// /app/page.tsx

"use client"; // Ensure this component runs on the client side

import React from "react";
import Image from "next/image";
import ConnectButton from './ConnectButton'; // Adjust path if necessary

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen items-center justify-between bg-cover bg-center" style={{ backgroundImage: `url('/bgHome.gif')` }}>
      
      {/* Navigation Bar */}
      <header className="w-full bg-transparent py-4 relative z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="/"><Image src="/logo.png" alt="Logo" width={60} height={60} /></a>
          </div>

          {/* Navigation Links + Connect Wallet */}
          <nav className="flex items-center space-x-6">
            <a href="/faq" className="hover:text-gray-500 text-black">FAQ</a>
            <a href="/contact" className="hover:text-gray-500 text-black">Contact Us</a>
            <div className="ml-4">
              <ConnectButton />
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 text-center z-10">
        <h1 className="text-4xl font-bold text-black">Refuge Link System</h1>
        <p className="text-lg text-black mt-2">Transparent, direct donations empowering refugees with stability and trust.</p>

        <div className="mt-8">
          {/* <ConnectButton /> */}
        </div>

        <div className="mt-8 flex space-x-4">
          <a
            href="/refugee"
            className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
          >
            Register as Refugee
          </a>
          <a
            href="/donor"
            className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition"
          >
            Become a Donor
          </a>
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
