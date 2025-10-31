// src/utils/auth.js

// This file is responsible for securely loading the Google Service Account Credentials.

// It relies on the 'dotenv' package to load environment variables.
require('dotenv').config();

// The environment variable SERVICE_ACCOUNT_KEY_JSON should contain the entire 
// service account JSON object as a single, quoted string.
const jsonString = process.env.SERVICE_ACCOUNT_KEY_JSON;
let serviceAccountKeyJson = null;

if (!jsonString) {
    console.error("!!! FATAL ERROR: Environment variable SERVICE_ACCOUNT_KEY_JSON is missing. Authentication will fail. Ensure your .env file is present and SERVICE_ACCOUNT_KEY_JSON is set. !!!");
    serviceAccountKeyJson = {};
} else {
    try {
        // ----------------------------------------------------------------------------------
        // SECURED: Parsing the single JSON string from the environment
        // ----------------------------------------------------------------------------------
        serviceAccountKeyJson = JSON.parse(jsonString);
        console.log("✅ Google Service Account JSON loaded and parsed successfully.");
    } catch (e) {
        console.error("!!! FATAL ERROR: Failed to parse SERVICE_ACCOUNT_KEY_JSON. Ensure the entire JSON object is enclosed in single quotes (') in your .env file and is properly formatted. Error:", e.message);
        serviceAccountKeyJson = {};
    }
}

// Check if critical keys are missing after parsing
if (!serviceAccountKeyJson.private_key || !serviceAccountKeyJson.client_email) {
    console.error("!!! WARNING: Parsed SERVICE_ACCOUNT_KEY_JSON is missing 'private_key' or 'client_email'. Please verify the content of your JSON string in the .env file. !!!");
}

module.exports = serviceAccountKeyJson;