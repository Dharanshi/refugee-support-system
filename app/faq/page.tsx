// /app/faq/page.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import ConnectButton from '../ConnectButton'; // Adjust the path as necessary

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null); // Control which FAQ is open

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index); // Toggle open/close
  };

  const faqs = [
    {
      question: "What is the Refugee Identification System?",
      answer: "The Refugee Identification System is a Web3-based platform that helps refugees establish digital identities and securely store their personal information.",
    },
    {
      question: "How do I register as a refugee?",
      answer: "Click on the 'Register as Refugee' button on the homepage and complete the registration process by providing the required information.",
    },
    {
      question: "How can I donate?",
      answer: "You can donate by clicking the 'Donate Now' button on the donor page and entering the amount you wish to contribute.",
    },
    {
      question: "Is my donation secure?",
      answer: "Yes, all transactions are secured using blockchain technology, ensuring that your donations are safe and transparent.",
    },
    {
      question: "Who can use this platform?",
      answer: "The platform is designed for refugees, donors, and organizations that wish to support the cause by offering secure identification and donation services.",
    },
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
              <a href="/donor" className="hover:text-gray-500 text-black font-Minecraftia">Become a Donor</a>
              <a href="/partner" className="hover:text-gray-500 text-black font-Minecraftia">Partners</a>
              <a href="/contact" className="hover:text-gray-500 text-black font-Minecraftia">Contact Us</a>
              <div className="ml-4">
                <ConnectButton />
              </div>
            </nav>
          </div>
        </header>

      {/* FAQ Section */}
      <main className="flex flex-col items-center justify-center flex-1 text-center relative z-10 text-black">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-bold font-jersey">Frequently Asked Questions</h1>
          <p className="mt-2 text-3xl font-pixelify">Find answers to common questions below.</p>
        </header>

        {/* FAQ List */}
        <div className="w-full max-w-4xl space-y-4 font-pixelify">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-left text-white"
            >
              <h2
                className="text-xl font-semibold cursor-pointer flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </h2>

              {openFAQ === index && (
                <p className="text-gray-300 mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
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
