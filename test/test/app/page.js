
'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-300 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Routing</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <p className="text-lg text-gray-700 mb-4">Welcome to the routing page! Click below to go to the student list.</p>
        <Link href="/studentlist" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition duration-300 ease-in-out">
          Go to Student List
        </Link>
      </div>
    </div>
  );
}

