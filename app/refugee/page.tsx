// /app/refugee/page.tsx

"use client";

import Image from 'next/image';
import ProfileForm from '../components/ProfileForm';

export default function RefugeePage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url('/bg.gif')` }}>
      {/* Main content */}
      <header className="w-full bg-transparent py-4 relative z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* Use Image component for the logo */}
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
          </div>
          <nav className="space-x-4 text-gray-900 font-londrina">
            <a href="#" className="hover:text-gray-200">FAQ</a>
            <a href="#" className="hover:text-gray-200">Contact Us</a>
          </nav>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center relative z-10">
        <ProfileForm />
      </main>

      <footer className="w-full bg-gray-900 py-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center text-gray-400 font-londrina">
            Refugee support system by <b>Refuge</b>
        </div>
      </footer>
    </div>
  );
}
