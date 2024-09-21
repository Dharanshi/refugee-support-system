// /app/refugee/page.tsx

"use client";

import Image from 'next/image';
import ProfileForm from '../components/ProfileForm';
import ConnectButton from '../ConnectButton';

export default function RefugeePage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url('/bg.gif')` }}>
      {/* Main content */}
      <header className="w-full bg-transparent py-4 relative z-10">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <a href="/"><Image src="/logo.png" alt="Logo" width={60} height={60} /></a>
            </div>

            {/* Navigation Links + Connect Wallet */}
            <nav className="flex items-center space-x-6">
            <a href="/" className="hover:text-gray-500 text-black font-Minecraftia">Home</a>
              <a href="/donor" className="hover:text-gray-500 text-black font-Minecraftia">Become a Donor</a>
              <a href="/partner" className="hover:text-gray-500 text-black font-Minecraftia">Partners</a>

              <a href="/faq" className="hover:text-gray-500 text-black font-Minecraftia">FAQ</a>
              <a href="/contact" className="hover:text-gray-500 text-black font-Minecraftia">Contact Us</a>
              <div className="ml-4">
                <ConnectButton />
              </div>
            </nav>
          </div>
        </header>

      <main className="flex flex-1 items-center justify-center relative z-10">
        <ProfileForm />
      </main>

      <footer className="w-full bg-gray-900 py-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center text-gray-400 font-pixelify">
            Refugee support system by <b>Refuge Link</b> <br />Powered by <b>Noun</b>
          </div>
        </footer>
    </div>
  );
}
