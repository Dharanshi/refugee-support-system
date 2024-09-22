"use client";
import React, { useState } from 'react';
import ConnectButton from '../ConnectButton'; 

export default function ProfileForm() {
  const [file, setFile] = useState<File | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // For form submission state
  const [showPopup, setShowPopup] = useState(false); // For showing the popup

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all fields are filled before showing the popup
    if (firstName && lastName && file) {
      setShowPopup(true); // Show popup on successful submission
    }
  };

  return (
    <div className="max-w-md w-full p-6 bg-gray-900 rounded-lg shadow-lg">
      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name inputs */}
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="font-pixelify w-1/2 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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

      {/* Registration Successful Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black p-8 rounded-md shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-white font-pixelify">Registration Successful</h2>
            <p className='font-pixelify'>Thank you for registering!</p>
            <button
              onClick={() => setShowPopup(false)} // Close the popup
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-pixelify"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
