"use client";

import Image from "next/image";
import ConnectButton from '../ConnectButton'; // Adjust the path as necessary

export default function PartnersPage() {
  const partners = [
    { name: "Worldcoin", logo: "/1.png" },
    { name: "Reown", logo: "/2.png" },
    { name: "Circle", logo: "/3.png" },
    // Flow has been removed
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-cover bg-center" style={{ backgroundImage: `url('/bg.gif')` }}>
      
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
      <main className="flex flex-1 flex-col items-center justify-center relative z-10 space-y-12">
        {/* Our Partners Heading */}
        <h1 className="text-5xl font-bold text-center text-black font-jersey">Our Partners</h1>

        {/* Powered by Nouns Section */}
        <div className="flex items-center justify-center bg-gray-900 rounded-lg p-8 shadow-lg font-pixelify">
          <Image
            src="/4.png" // Update this to your Nouns logo path
            alt="Nouns logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <p className="ml-4 text-white text-2xl font-semibold">Powered by <b className="text-yellow-500 font-jersey text-3xl">Nouns</b></p>
        </div>

        {/* Partners Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center font-pixelify">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 bg-gray-900 p-6 rounded-lg shadow-lg">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={100}
                height={100}
                className="rounded-md"
              />
              <p className="text-lg text-white font-semibold">{partner.name}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-900 py-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center text-gray-400 font-pixelify">
          Refugee support system by <b>Refuge Link</b> <br />Powered by <b>Nouns</b>
        </div>
      </footer>
    </div>
  );
}
