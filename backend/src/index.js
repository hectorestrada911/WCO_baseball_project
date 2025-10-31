const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { syncFolderToS3 } = require('./services/drive-to-s3.service.js');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Baseball API is running' });
});

app.get('/api/players', (req, res) => {
  res.json({ message: 'Players endpoint - to be implemented' });
});

app.get('/api/stats', (req, res) => {
  res.json({ message: 'Stats endpoint - to be implemented' });
});

app.post('/api/upload', (req, res) => {
  res.json({ message: 'Upload endpoint - to be implemented' });
});

app.listen(PORT, () => {
  console.log(`Baseball API running on port ${PORT}`);
});


/**
 * New endpoint to manually trigger the Google Drive folder synchronization to S3.
 * Use this POST route to initiate the data transfer job.
 */
app.post('/api/sync-drive', async (req, res) => {
  console.log('API call received: Initiating Google Drive to S3 sync...');
  try {
    const results = await syncFolderToS3();

    // Check if the request came from an automated source or if we should just confirm
    if (results.length > 0) {
      res.status(200).json({ 
        status: 'Success', 
        message: `Successfully synchronized ${results.length} file(s) from Google Drive to S3 bucket wco-baseball-rawcsv.`,
        files_synced: results.map(f => f.name)
      });
    } else {
      res.status(200).json({ 
        status: 'Success', 
        message: 'Sync completed, but no new files were found or transferred.',
        files_synced: []
      });
    }
  } catch (error) {
    console.error('Synchronization failed during API call:', error.message);
    res.status(500).json({ 
      status: 'Error', 
      message: 'Failed to complete Google Drive synchronization.',
      details: error.message
    });
  }
});
