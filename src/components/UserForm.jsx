import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle } from 'lucide-react';

const UserForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    organization: '',
    email: '',
    contactNumber: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store in localStorage 
    localStorage.setItem('recentFormData', JSON.stringify(formData));
    navigate('/view', { state: { formData } });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <div className="flex justify-center mb-6">
            <UserCircle className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
            User Registration
          </h2>
          
          <form onSubmit={handleSubmit}>
            <table className="w-full border-collapse">
              <tbody>
                {/* First Name Row */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 bg-gray-50 w-1/3">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                  </td>
                  <td className="py-4 px-6">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    />
                  </td>
                </tr>

                {/* Last Name Row */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 bg-gray-50">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                  </td>
                  <td className="py-4 px-6">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    />
                  </td>
                </tr>

                {/* Gender Row */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 bg-gray-50">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                      Gender
                    </label>
                  </td>
                  <td className="py-4 px-6">
                    <select
                      name="gender"
                      id="gender"
                      required
                      value={formData.gender}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </td>
                </tr>

                {/* Organization Row */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 bg-gray-50">
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                      Organization
                    </label>
                  </td>
                  <td className="py-4 px-6">
                    <select
                      name="organization"
                      id="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    >
                      <option value="">Select Organization</option>
                      <option value="Eminds">Eminds</option>
                      <option value="Viasat">Viasat</option>
                      <option value="Flipkart">Flipkart</option>
                      <option value="Amazon">Amazon</option>
                    </select>
                  </td>
                </tr>

                {/* Contact Number Row */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 bg-gray-50">
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                      Contact Number
                    </label>
                  </td>
                  <td className="py-4 px-6">
                    <input
                      type="tel"
                      name="contactNumber"
                      id="contactNumber"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    />
                  </td>
                </tr>

                
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 bg-gray-50">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                  </td>
                  <td className="py-4 px-6">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    />
                  </td>
                </tr>

                
                <tr>
                  <td className="py-6 px-6" colSpan={2}>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;