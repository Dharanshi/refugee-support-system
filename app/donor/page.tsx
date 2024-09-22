// /app/donor/page.tsx

"use client";

import React from "react";
import Image from "next/image";
import ConnectButton from '../ConnectButton';

export default function DonorPage() {
  const transactions = [
    { id: "0x1A2b3C4D5e6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T", amount: "100 USDC" },
    { id: "0x2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S1T2", amount: "150 USDC" },
    { id: "0x3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S2T3U4", amount: "200 USDC" },
    { id: "0x4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S3T4U5V6", amount: "50 USDC" },
    { id: "0x5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S4T5U6V7W8", amount: "75 USDC" },
    { id: "0x6F7G8H9I0J1K2L3M4N5O6P7Q8R9S5T6U7V8W9X0", amount: "300 USDC" },
    { id: "0x7G8H9I0J1K2L3M4N5O6P7Q8R9S6T7U8V9W0X1Y2", amount: "90 USDC" },
    { id: "0x8H9I0J1K2L3M4N5O6P7Q8R9S7T8U9V0W1X2Y3Z4", amount: "120 USDC" },
    { id: "0x9I0J1K2L3M4N5O6P7Q8R9S8T9U0V1W2X3Y4Z5A6", amount: "250 USDC" },
    { id: "0x0J1K2L3M4N5O6P7Q8R9S9T0U1V2W3X4Y5Z6A7B8", amount: "180 USDC" },
  ];

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
            <a href="/" className="hover:text-gray-500 text-black font-Minecraftia">Home</a>
            <a href="/refugee" className="hover:text-gray-500 text-black font-Minecraftia">Register as Refugee</a>
            <a href="/partner" className="hover:text-gray-500 text-black font-Minecraftia">Partners</a>
            <a href="/faq" className="hover:text-gray-500 text-black font-Minecraftia">FAQ</a>
            <a href="/contact" className="hover:text-gray-500 text-black font-Minecraftia">Contact Us</a>
            <div className="ml-4">
              <ConnectButton />
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 text-center relative z-10 text-black">
        {/* Donation Input Section */}
        <header className="mb-8 text-center">
          <h1 className="font-bold font-jersey text-5xl text-white">Support Refugees</h1>
          <p className="mt-2 font-pixelify text-2xl text-white">Enter an amount (<b>Minimum 5 USDC</b>) and donate to the cause.</p>
        </header>

        {/* Donation Input */}
        <div className="mb-8 flex space-x-4 bg-gray-900 p-6 rounded-lg shadow-lg">
          <input
            type="number"
            placeholder="Enter Amount"
            className="px-4 py-2 text-black rounded-md border border-gray-400 font-pixelify w-48"
          />
          <button className="bg-yellow-500 px-6 py-2 rounded-md hover:bg-yellow-600 transition font-pixelify">
            Donate Now
          </button>
        </div>

        {/* Transaction Table */}
        <div className="w-full max-w-2xl bg-gray-900 p-6 rounded-lg shadow-lg font-pixelify">
          <h2 className="text-xl mb-4 text-white">People Contributed so far</h2>
          <div className="bg-gray-800 text-white rounded-lg overflow-hidden">
            <table className="table-auto w-full break-words">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-4 py-2 text-left">Transaction ID</th>
                  <th className="px-4 py-2 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index} className="border-t border-gray-600">
                    <td className="px-4 py-2 break-all">{transaction.id}</td>
                    <td className="px-4 py-2">{transaction.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-900 py-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center text-gray-400 font-pixelify">
          Refugee support system by <b>Refuge Link</b> <br />Powered by <b>Noun</b>
        </div>
      </footer>
    </div>
  );
}
