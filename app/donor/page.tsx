// /app/donor/page.tsx

"use client";

import React from "react";
import Image from "next/image";
import ConnectButton from '../ConnectButton';

export default function DonorPage() {
  const transactions = [
    { id: "TX1234567890", amount: "$100" },
    { id: "TX1234567891", amount: "$150" },
    { id: "TX1234567892", amount: "$200" },
    { id: "TX1234567893", amount: "$50" },
    { id: "TX1234567894", amount: "$75" },
    { id: "TX1234567895", amount: "$300" },
    { id: "TX1234567896", amount: "$90" },
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
            <a href="/" className="hover:text-gray-500 text-black">Home</a> {/* New Home Link */}
            <a href="#" className="hover:text-gray-500 text-black">FAQ</a>
            <a href="#" className="hover:text-gray-500 text-black">Contact Us</a>
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
          <h1 className="text-3xl font-bold">Support Refugees</h1>
          <p className="mt-2 text-lg">Enter an amount and donate to the cause.</p>
        </header>

        {/* Donation Input */}
        <div className="mb-8 flex space-x-4 bg-gray-900 p-6 rounded-lg shadow-lg">
          <input
            type="number"
            placeholder="Enter Amount"
            className="px-4 py-2 text-black rounded-md border border-gray-400"
          />
          <button className="bg-yellow-500 px-6 py-2 rounded-md hover:bg-yellow-600 transition">
            Donate Now
          </button>
        </div>

        {/* Transaction Table */}
        <div className="w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl mb-4 text-white">People Contributed so far</h2>
          <div className="bg-gray-800 text-white rounded-lg overflow-hidden">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-4 py-2">Transaction ID</th>
                  <th className="px-4 py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index} className="border-t border-gray-600">
                    <td className="px-4 py-2">{transaction.id}</td>
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
        <div className="max-w-7xl mx-auto text-center text-gray-400 font-londrina">
          Refugee support system by <b>Refuge</b>
        </div>
      </footer>
    </div>
  );
}
