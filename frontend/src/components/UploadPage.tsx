"use client";

import { useState } from "react";
import { Upload, FileText, CheckCircle, AlertCircle, Clock } from "lucide-react";

interface UploadRecord {
  id: string;
  filename: string;
  status: "processing" | "complete" | "error";
  uploadedAt: string;
  processedAt?: string;
  recordsProcessed?: number;
  errorMessage?: string;
}

export function UploadPage() {
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "processing" | "complete" | "error">("idle");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadHistory, setUploadHistory] = useState<UploadRecord[]>([
    {
      id: "upload_1",
      filename: "spring_training_session_1.csv",
      status: "complete",
      uploadedAt: "2024-01-15T10:30:00Z",
      processedAt: "2024-01-15T10:35:00Z",
      recordsProcessed: 247
    },
    {
      id: "upload_2",
      filename: "bullpen_session_2.csv",
      status: "complete",
      uploadedAt: "2024-01-14T14:20:00Z",
      processedAt: "2024-01-14T14:25:00Z",
      recordsProcessed: 156
    },
    {
      id: "upload_3",
      filename: "game_data_friday.csv",
      status: "processing",
      uploadedAt: "2024-01-17T09:15:00Z"
    }
  ]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus("idle");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploadStatus("uploading");

    try {
      // Simulate upload process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setUploadStatus("processing");
      
      // Simulate processing
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Add to upload history
      const newUpload: UploadRecord = {
        id: `upload_${Date.now()}`,
        filename: selectedFile.name,
        status: "complete",
        uploadedAt: new Date().toISOString(),
        processedAt: new Date().toISOString(),
        recordsProcessed: Math.floor(Math.random() * 500) + 100
      };
      
      setUploadHistory(prev => [newUpload, ...prev]);
      setUploadStatus("complete");
      setSelectedFile(null);

      // Reset status after 3 seconds
      setTimeout(() => setUploadStatus("idle"), 3000);

    } catch {
      setUploadStatus("error");
      setTimeout(() => setUploadStatus("idle"), 3000);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "processing":
        return <Clock className="h-4 w-4 text-blue-600" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "complete":
        return "text-green-600 bg-green-50";
      case "processing":
        return "text-blue-600 bg-blue-50";
      case "error":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4 lg:p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl lg:text-3xl font-bold flex items-center">
            <Upload className="h-8 w-8 mr-3 text-green-400" />
            Data Upload
          </h1>
        </div>
        <div className="h-1 bg-orange-500 mt-2"></div>
        <div className="h-1 bg-blue-500 mt-1"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Form */}
        <div className="bg-white rounded-lg shadow-sm border p-4 lg:p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload TrackMan Data</h2>
          
          <div className="space-y-6">
            {/* File Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select CSV File
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400 transition-colors">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        accept=".csv"
                        className="sr-only"
                        onChange={handleFileSelect}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">CSV files up to 10MB</p>
                </div>
              </div>
              
              {selectedFile && (
                <div className="mt-2 flex items-center space-x-2 text-sm text-gray-600">
                  <FileText className="h-4 w-4" />
                  <span>{selectedFile.name}</span>
                  <span className="text-gray-400">({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                </div>
              )}
            </div>

            {/* Upload Status */}
            {uploadStatus !== "idle" && (
              <div className={`flex items-center space-x-2 p-3 rounded-md ${
                uploadStatus === "complete" ? "bg-green-50" :
                uploadStatus === "error" ? "bg-red-50" : "bg-blue-50"
              }`}>
                {uploadStatus === "uploading" || uploadStatus === "processing" ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                ) : uploadStatus === "complete" ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-600" />
                )}
                <span className={`text-sm font-medium ${
                  uploadStatus === "complete" ? "text-green-600" :
                  uploadStatus === "error" ? "text-red-600" : "text-blue-600"
                }`}>
                  {uploadStatus === "uploading" ? "Uploading file..." :
                   uploadStatus === "processing" ? "Processing TrackMan data..." :
                   uploadStatus === "complete" ? "Data successfully processed and ingested!" :
                   "Upload failed. Please try again."}
                </span>
              </div>
            )}

            {/* Upload Button */}
            <button
              onClick={handleUpload}
              disabled={!selectedFile || uploadStatus === "uploading" || uploadStatus === "processing"}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploadStatus === "uploading" ? "Uploading..." :
               uploadStatus === "processing" ? "Processing..." :
               "Upload & Process"}
            </button>
          </div>
        </div>

        {/* Upload History */}
        <div className="bg-white rounded-lg shadow-sm border p-4 lg:p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload History</h2>
          
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {uploadHistory.map((upload) => (
              <div key={upload.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      {getStatusIcon(upload.status)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {upload.filename}
                      </p>
                      <div className="flex items-center space-x-4 mt-1">
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>{new Date(upload.uploadedAt).toLocaleDateString()}</span>
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(upload.status)}`}>
                          {upload.status.charAt(0).toUpperCase() + upload.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {upload.status === "complete" && upload.recordsProcessed && (
                  <div className="mt-2 text-xs text-gray-600">
                    Processed {upload.recordsProcessed.toLocaleString()} records
                  </div>
                )}
                
                {upload.status === "processing" && (
                  <div className="mt-2 flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-blue-600"></div>
                    <span className="text-xs text-blue-600">Processing...</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}