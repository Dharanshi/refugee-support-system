// app/page.tsx

import React from "react";
import Image from "next/image";
import ConnectButton from './ConnectButton';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 p-8 text-white">
      <header className="mb-8 text-center">
        <Image
          className="dark:invert"
          src="/logo.png" // Use your actual logo path here
          alt="Refugee Identification System Logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-bold mt-4">Refugee Identification System</h1>
        <p className="mt-2 text-lg">
          Empowering refugees with digital identification via Web3.
        </p>
      </header>

      <main className="flex flex-col items-center">
        <ConnectButton />

        <div className="mt-6 flex flex-col gap-4">
          <h2 className="text-2xl">Register as:</h2>
          <div className="flex gap-4">
            <a
              href="/register?role=refugee"
              className="bg-green-500 p-4 rounded hover:bg-green-600 transition"
            >
              Register as Refugee
            </a>
            <a
              href="/register?role=donor"
              className="bg-yellow-500 p-4 rounded hover:bg-yellow-600 transition"
            >
              Register as Donor
            </a>
          </div>
        </div>

        <footer className="mt-auto flex gap-4 p-4 bg-black w-full justify-center text-gray-400">
          <a
            className="flex items-center gap-2 hover:underline"
            href="/faq"
          >
            <Image
              src="/icons/faq-icon.svg" // Replace with your FAQ icon
              alt="FAQ icon"
              width={16}
              height={16}
            />
            FAQ
          </a>
          <a
            className="flex items-center gap-2 hover:underline"
            href="/contact"
          >
            <Image
              src="/icons/contact-icon.svg" // Replace with your Contact icon
              alt="Contact icon"
              width={16}
              height={16}
            />
            Contact Us
          </a>
        </footer>
      </main>
    </div>
  );
}

