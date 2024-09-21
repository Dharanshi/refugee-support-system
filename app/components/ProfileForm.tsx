// /app/components/ProfileForm.tsx
"use client";
import React from 'react';
import {useState} from 'react';
import ConnectButton from '../ConnectButton'; 

export default function ProfileForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-md w-full p-6 bg-gray-900 rounded-lg shadow-lg">
      {/* Form */}
      <form className="space-y-6">
        {/* Name inputs */}
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="First Name"
            className="font-pixelify w-1/2 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="font-pixelify w-1/2 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* File upload section */}
        <div className="flex flex-col items-center p-4 bg-gray-800 border border-dashed border-gray-700 rounded-lg font-pixelify">
          <div className="flex items-center space-x-4">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md cursor-pointer"
            >
              Choose File
            </label>
            <button
              type="button"
              className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600"
            >
              Upload UNHCR Doc
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-2">.pdf or .png up to 10 MB</p>
          {file && (
            <p className="text-gray-300 text-sm mt-1">
              Selected: {file.name}
            </p>
          )}
        </div>

        {/* Buttons section */}
        <div className="flex justify-between space-x-4">
          {/* Connect Wallet Button */}
          <ConnectButton />

          {/* Login Now button */}
          <button
            type="submit"
            className="flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 font-pixelify"
          >
            Login Now
            <span className="ml-2">➤</span>
          </button>
        </div>
      </form>
    </div>
  );
}
