import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import DataView from './components/DataView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/view" element={<DataView />} />
      </Routes>
    </Router>
  );
}

export default App;