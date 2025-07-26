import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <div className="flex items-center">
            <div className="bg-blue-600 text-white px-4 py-2 rounded mr-4">
              <span className="font-bold text-lg">{{cookiecutter.clinic_name}}</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Staff Portal</h1>
              <p className="text-sm text-gray-600">Patient Management System</p>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Dashboard</h2>
            <p className="text-gray-600 mb-6">
              Welcome to the staff portal. Manage patients, appointments, and daily operations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium text-gray-900 mb-2">Patient Check-in</h3>
                <p className="text-sm text-gray-600">Register new patients and check-in appointments</p>
              </div>
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium text-gray-900 mb-2">Schedule Appointment</h3>
                <p className="text-sm text-gray-600">Book and manage patient appointments</p>
              </div>
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium text-gray-900 mb-2">Process Payment</h3>
                <p className="text-sm text-gray-600">Handle payments and insurance billing</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
