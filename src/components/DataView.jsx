import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, ClipboardList, AlertCircle } from 'lucide-react';

const DataView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [displayData, setDisplayData] = useState(null);
  
  useEffect(() => {
    // If data is passed through navigation state
    if (location.state?.formData) {
      setDisplayData(location.state.formData);
    } else {
      //   from localStorage
      const savedData = localStorage.getItem('recentFormData');
      if (savedData) {
        setDisplayData(JSON.parse(savedData));
      }
    }
  }, [location.state]);

  if (!displayData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex flex-col items-center justify-center text-center">
              <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No Data Available</h2>
              <p className="text-gray-600 mb-6">Please submit the form first to view the data.</p>
              <button
                onClick={() => navigate('/')}
                className="flex items-center px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Return to Form
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-indigo-600 hover:text-indigo-800"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Form
            </button>
            <div className="flex items-center">
              <ClipboardList className="h-8 w-8 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Submitted Data</h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
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
              <tbody className="bg-white divide-y divide-gray-200">
                {Object.entries(displayData).map(([key, value]) => (
                  <tr key={key} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
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