import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-700 text-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <div className="flex items-center">
            <div className="bg-white text-blue-700 px-4 py-2 rounded mr-4">
              <span className="font-bold text-lg">{{cookiecutter.clinic_name}}</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Doctor Portal</h1>
              <p className="text-sm opacity-90">Medical Records & Treatment Management</p>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Medical Dashboard</h2>
            <p className="text-gray-600 mb-6">
              Access patient records, document treatments, and manage medical workflows.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium text-gray-900 mb-2">Patient Records</h3>
                <p className="text-sm text-gray-600">View and update comprehensive patient medical records</p>
              </div>
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium text-gray-900 mb-2">Photo Documentation</h3>
                <p className="text-sm text-gray-600">Before/after photos and progress tracking</p>
              </div>
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium text-gray-900 mb-2">Treatment Planning</h3>
                <p className="text-sm text-gray-600">Create and manage treatment plans and protocols</p>
              </div>
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium text-gray-900 mb-2">Analytics</h3>
                <p className="text-sm text-gray-600">Patient outcomes and performance metrics</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
