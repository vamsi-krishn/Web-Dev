# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

// Import necessary dependencies
import React from 'react';  // Core React library
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Router components for navigation
import UserForm from './components/UserForm';  // Import UserForm component
import DataView from './components/DataView';  // Import DataView component

// Main App component
function App() {
  return (
    // Router: Enables client-side routing
    <Router>
      // Routes: Container for all Route definitions
      <Routes>
        // Route for home page ('/') - renders UserForm
        <Route path="/" element={<UserForm />} />
        // Route for data view page ('/view') - renders DataView
        <Route path="/view" element={<DataView />} />
      </Routes>
    </Router>
  );
}

export default App;  // Export App component for use in other files


// Import necessary dependencies
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';  // Hooks for routing
import { ArrowLeft, ClipboardList } from 'lucide-react';  // Icons

const DataView = () => {
  // useLocation: Access the current location object (contains state passed during navigation)
  const location = useLocation();
  // useNavigate: Get navigation function for programmatic routing
  const navigate = useNavigate();
  // Extract formData from location state
  const { formData } = location.state;

  return (
    // Container div with gradient background
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Tailwind classes explained:
          min-h-screen: Minimum height of 100vh
          bg-gradient-to-br: Background gradient bottom-right
          from-blue-50: Starting color of gradient
          to-indigo-100: Ending color of gradient
          py-12: Padding top/bottom 3rem
          px-4: Padding left/right 1rem
          sm:px-6: Padding left/right 1.5rem on small screens
          lg:px-8: Padding left/right 2rem on large screens */}
      
      // White card container
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* max-w-3xl: Maximum width 48rem
            mx-auto: Center horizontally
            rounded-xl: Large border radius
            shadow-lg: Large box shadow
            overflow-hidden: Hide overflow content */}

        // Content padding container
        <div className="px-6 py-8">
          // Header section with back button and title
          <div className="flex items-center justify-between mb-8">
            // Back button
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-indigo-600 hover:text-indigo-800"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Form
            </button>
            
            // Title with icon
            <div className="flex items-center">
              <ClipboardList className="h-8 w-8 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Submitted Data</h2>
            </div>
          </div>

          // Table container
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              // Table header
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Field
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Value
                  </th>
                </tr>
              </thead>
              
              // Table body
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Map through formData to create table rows */}
                {Object.entries(formData).map(([key, value]) => (
                  <tr key={key} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {/* Convert camelCase to Title Case */}
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {value || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataView;


// Import necessary dependencies
import React, { useState } from 'react';  // React and useState hook for managing form state
import { useNavigate } from 'react-router-dom';  // For programmatic navigation
import { UserCircle } from 'lucide-react';  // User icon from Lucide

const UserForm = () => {
  // useNavigate hook for programmatic navigation after form submission
  const navigate = useNavigate();
  
  // Form state using useState hook
  // Initial state is an object with empty strings for all fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    organization: '',
    email: '',
    contactNumber: '',
  });

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submission behavior
    // Navigate to /view route with form data passed as state
    navigate('/view', { state: { formData } });
  };

  // Input change handler
  // Updates form state when user types or selects options
  const handleChange = (e) => {
    const { name, value } = e.target;  // Destructure name and value from event target
    setFormData(prev => ({
      ...prev,           // Spread previous state
      [name]: value     // Update only the changed field
    }));
  };

  return (
    // Main container with gradient background
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* White card container */}
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          {/* Header with icon */}
          <div className="flex justify-center mb-6">
            <UserCircle className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
            User Registration
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name Field */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              />
            </div>

            {/* Last Name Field */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              />
            </div>

            {/* Gender Field */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {/* Organization Field */}
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                Organization
              </label>
              <select
                name="organization"
                id="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              >
                <option value="">Select Organization</option>
                <option value="Eminds">Eminds</option>
                <option value="Viasat">Viasat</option>
                <option value="Flipkart">Flipkart</option>  
                
              </select>
            </div>

            {/* Contact Number Field */}
            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                required
                pattern="[0-9]{10}"  // Validates 10-digit number
                placeholder="10-digit mobile number"
                value={formData.contactNumber}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"  // HTML5 email validation
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
#   W e b - D e v  
 