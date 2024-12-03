
'use client';
import React from 'react';

const StudentDetailPage = ({ params }) => {
  // Unwrap params with React.use() 
  const { id } = React.use(params);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-300">
      <div className="bg-white p-12 rounded-xl shadow-xl max-w-sm w-full">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-indigo-700 mb-4">Student ID</h1>
          <p className="text-xl font-medium text-gray-700">ID: <span className="text-indigo-600">{id}</span></p>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out">
            View More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailPage;

