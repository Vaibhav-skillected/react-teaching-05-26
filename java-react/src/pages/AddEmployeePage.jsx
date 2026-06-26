import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEmployee } from '../api/employeeApi';

const AddEmployeePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    salary: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.city || !formData.email || !formData.salary) {
      setError('All fields are required!');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      // Convert salary to number
      const employeeData = {
        ...formData,
        salary: parseFloat(formData.salary)
      };
      
      await createEmployee(employeeData);
      alert('✅ Employee added successfully!');
      navigate('/');  // Home page par redirect karo
    } catch (err) {
      setError(err.message || 'Failed to add employee. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headerStyle}>➕ Add New Employee</h2>
        
        {error && <div style={errorStyle}>{error}</div>}
        
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={fieldStyle}>
            <label style={labelStyle}>Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="e.g., John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          
          <div style={fieldStyle}>
            <label style={labelStyle}>City *</label>
            <input
              type="text"
              name="city"
              placeholder="e.g., Mumbai"
              value={formData.city}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          
          <div style={fieldStyle}>
            <label style={labelStyle}>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="e.g., john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <small style={hintStyle}>Email must be unique</small>
          </div>
          
          <div style={fieldStyle}>
            <label style={labelStyle}>Salary *</label>
            <input
              type="number"
              name="salary"
              placeholder="e.g., 50000"
              value={formData.salary}
              onChange={handleChange}
              required
              min="0"
              step="1000"
              style={inputStyle}
            />
          </div>
          
          <div style={buttonGroupStyle}>
            <button 
              type="submit" 
              disabled={loading} 
              style={submitBtnStyle}
            >
              {loading ? '⏳ Adding...' : '✅ Add Employee'}
            </button>
            <button 
              type="button" 
              onClick={() => navigate('/')} 
              style={cancelBtnStyle}
            >
              ❌ Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  minHeight: '80vh',
};

const cardStyle = {
  maxWidth: '500px',
  width: '100%',
  padding: '2.5rem',
  borderRadius: '12px',
  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
  backgroundColor: 'white',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '2rem',
  color: '#1a1a2e',
};

const errorStyle = {
  backgroundColor: '#f8d7da',
  color: '#721c24',
  padding: '0.75rem',
  borderRadius: '4px',
  marginBottom: '1rem',
  border: '1px solid #f5c6cb',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
};

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
};

const labelStyle = {
  fontWeight: '600',
  fontSize: '0.9rem',
  color: '#333',
};

const inputStyle = {
  padding: '0.75rem',
  fontSize: '1rem',
  border: '1px solid #ddd',
  borderRadius: '6px',
  transition: 'border-color 0.3s',
};

const hintStyle = {
  fontSize: '0.8rem',
  color: '#6c757d',
};

const buttonGroupStyle = {
  display: 'flex',
  gap: '1rem',
  marginTop: '0.5rem',
};

const submitBtnStyle = {
  flex: 2,
  padding: '0.75rem',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const cancelBtnStyle = {
  flex: 1,
  padding: '0.75rem',
  backgroundColor: '#6c757d',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

export default AddEmployeePage;