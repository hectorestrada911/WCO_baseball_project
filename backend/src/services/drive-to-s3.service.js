// src/services/drive-s3.service.js (CommonJS Module)

const { google } = require('googleapis');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { Readable } = require('stream'); // Standard Node.js stream module
const serviceAccountKeyJson = require('../utils/auth.js'); 

// --- CONFIGURATION COMPLETE ---
const AWS_REGION = 'us-east-1'; // US East (N. Virginia)
const BUCKET_NAME = 'wco-baseball-rawcsv'; 

// The Google Drive Folder ID provided by the user
const GOOGLE_FOLDER_ID = '1fYClGtaPuPk4LxS-KxwFd-GRc-Psw69E'; 

// AWS S3 Setup
const s3Client = new S3Client({ region: AWS_REGION });

/**
 * Utility to turn a stream into a buffer.
 * @param {Readable} stream - The input stream from Google Drive.
 * @returns {Promise<Buffer>}
 */
function streamToBuffer(stream) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        stream.on('data', (chunk) => chunks.push(chunk));
        stream.on('error', reject);
        stream.on('end', () => resolve(Buffer.concat(chunks)));
    });
}

/**
 * Uploads a file buffer to S3.
 * @param {string} fileName - The name of the file.
 * @param {Buffer} fileBuffer - The content of the file.
 * @param {string} mimeType - The file's MIME type.
 * @returns {Promise<string>} The S3 object URL.
 */
async function uploadToS3(fileName, fileBuffer, mimeType) {
    // Create a unique key for the S3 object by prepending 'uploads/'
    const key = `uploads/${fileName.replace(/ /g, '_')}`; // Use original file name
    
    const uploadParams = {
        Bucket: BUCKET_NAME,
        Key: key, 
        Body: fileBuffer,
        ContentType: mimeType,
    };
    
    await s3Client.send(new PutObjectCommand(uploadParams));
    
    const s3Url = `https://${BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${key}`;
    return s3Url;
}

/**
 * Finds all files in the configured Google Drive folder and uploads them to S3.
 * @returns {Promise<object[]>} A promise resolving to an array of uploaded file details.
 */
async function syncFolderToS3() {
    console.log(`Starting synchronization of folder ID ${GOOGLE_FOLDER_ID} to S3 bucket ${BUCKET_NAME} in ${AWS_REGION}...`);

    // 1. Authenticate with Google Drive Service Account
    const auth = new google.auth.JWT({
        email: serviceAccountKeyJson.client_email,
        key: serviceAccountKeyJson.private_key,
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });

    const drive = google.drive({ version: 'v3', auth });
    const uploadedFiles = [];

    // 2. List all files (that are not folders) in the specified folder
    try {
        const q = `'${GOOGLE_FOLDER_ID}' in parents and mimeType != 'application/vnd.google-apps.folder' and trashed=false`;
        
        const response = await drive.files.list({
            q: q,
            fields: 'files(id, name, mimeType)',
            spaces: 'drive',
            pageSize: 100, 
        });

        const files = response.data.files;

        if (!files || files.length === 0) {
            console.log('No files found in the Google Drive folder.');
            return [];
        }
        
        console.log(`Found ${files.length} files. Starting transfer...`);

        // 3. Iterate, Download, and Upload each file
        for (const file of files) {
            try {
                // Download the File as a stream
                const response = await drive.files.get({
                    fileId: file.id,
                    alt: 'media', 
                }, { responseType: 'stream' });

                const fileStream = response.data;
                
                // Convert stream to Buffer
                const fileBuffer = await streamToBuffer(fileStream);

                // Upload to S3
                const s3Url = await uploadToS3(file.name, fileBuffer, file.mimeType);

                uploadedFiles.push({
                    name: file.name,
                    size: fileBuffer.length,
                    s3Url: s3Url
                });
                
                console.log(`✅ Transferred: ${file.name} (Size: ${Math.round(fileBuffer.length / 1024)} KB) -> ${s3Url}`);

            } catch (error) {
                console.error(`❌ Failed to process file ${file.name} (${file.id}):`, error.message);
            }
        }
        
        return uploadedFiles;

    } catch (error) {
        console.error('Error listing files in Google Drive:', error.message);
        throw error;
    }
}

// Export the function using CommonJS syntax
module.exports = { syncFolderToS3 };