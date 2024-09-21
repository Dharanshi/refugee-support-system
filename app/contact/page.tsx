// /app/contact/page.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import ConnectButton from '../ConnectButton'; // Adjust the path as necessary

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = "contact@refugeesupport.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/bg.gif')` }}>
      
      {/* Navigation Bar */}
      <header className="w-full bg-transparent py-4 relative z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
          <a href="/"><Image src="/logo.png" alt="Logo" width={60} height={60} /></a>
          </div>

          {/* Navigation Links + Connect Wallet */}
          <nav className="flex items-center space-x-6">
            <a href="/" className="hover:text-gray-500 text-black">Home</a>
            <a href="/refugee" className="hover:text-gray-500 text-black">Register as Refugee</a>
            <a href="/donor" className="hover:text-gray-500 text-black">Become a Donor</a>
            <a href="/faq" className="hover:text-gray-500 text-black">FAQ</a>
            <div className="ml-4">
              <ConnectButton />
            </div>
          </nav>
        </div>
      </header>

      {/* Contact Us Section */}
      <main className="flex flex-col items-center justify-center flex-1 text-center relative z-10 text-black">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">You can reach us via the email below.</p>
        </header>

        {/* Email Display and Copy Button */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white">
          <p className="text-xl mb-4">{email}</p>
          <button
            onClick={copyEmail}
            className="bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-600 transition"
          >
            {copied ? "Email Copied!" : "Copy Email"}
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-900 py-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center text-gray-400 font-londrina">
          Refugee support system by <b>Refuge Link</b>
        </div>
      </footer>
    </div>
  );
}
