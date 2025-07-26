import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-pink-600 text-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <div className="flex items-center">
            <div className="bg-white text-pink-600 px-4 py-2 rounded mr-4">
              <span className="font-bold text-lg">{{cookiecutter.clinic_name}}</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Patient Portal</h1>
              <p className="text-sm opacity-90">Your Beauty & Wellness Journey</p>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">My Account</h2>
            <p className="text-gray-600 mb-6">
              Manage your appointments, view treatment progress, and access your health information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium text-gray-900 mb-2">Book Appointment</h3>
                <p className="text-sm text-gray-600">Schedule your next visit with available providers</p>
              </div>
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium text-gray-900 mb-2">Treatment Progress</h3>
                <p className="text-sm text-gray-600">View your before/after photos and treatment timeline</p>
              </div>
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <h3 className="font-medium text-gray-900 mb-2">Payment & Billing</h3>
                <p className="text-sm text-gray-600">View invoices, make payments, and manage billing</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
