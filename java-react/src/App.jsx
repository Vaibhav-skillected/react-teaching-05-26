import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';
import AddEmployeePage from './pages/AddEmployeePage';

function App() {
  const [refresh, setRefresh] = useState(0);

  // Refresh function - employee list refresh karne ke liye
  const refreshEmployees = () => {
    setRefresh(prev => prev + 1);
  };

  return (
    <Router>
      <div style={appStyle}>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={<EmployeeList refreshTrigger={refresh} />} 
          />
          <Route 
            path="/add" 
            element={<AddEmployeePage onEmployeeAdded={refreshEmployees} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

const appStyle = {
  minHeight: '100vh',
  backgroundColor: '#f8f9fa',
};

export default App;