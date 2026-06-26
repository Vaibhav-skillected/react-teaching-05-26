import React, { useEffect, useState } from 'react';
import { getAllEmployees, deleteEmployee } from '../api/employeeApi';

const EmployeeList = ({ refreshTrigger }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect - Component load hote hi employees fetch karo
  useEffect(() => {
    fetchEmployees();
  }, [refreshTrigger]);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const data = await getAllEmployees();
      setEmployees(data);
      setError(null);
    } catch (err) {
      setError('Failed to load employees');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        await deleteEmployee(id);
        // List refresh karo delete ke baad
        fetchEmployees();
        alert('Employee deleted successfully!');
      } catch (err) {
        alert('Failed to delete employee. Backend endpoint may not exist.');
        console.error(err);
      }
    }
  };

  // Loading state
  if (loading) {
    return (
      <div style={loadingStyle}>
        <div className="spinner"></div>
        <p>Loading employees...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div style={errorStyle}>
        <p>❌ {error}</p>
        <button onClick={fetchEmployees} style={retryBtnStyle}>Retry</button>
      </div>
    );
  }

  // Empty state
  if (employees.length === 0) {
    return (
      <div style={emptyStyle}>
        <h2>No Employees Found</h2>
        <p>Click "Add Employee" to add your first employee! 🚀</p>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>📋 Employee List</h2>
      <div style={gridStyle}>
        {employees.map((employee) => (
          <div key={employee.id} style={cardStyle}>
            <div style={cardHeaderStyle}>
              <h3 style={nameStyle}>{employee.name}</h3>
              <span style={idBadgeStyle}>ID: {employee.id}</span>
            </div>
            <div style={detailsStyle}>
              <p><strong>📧 Email:</strong> {employee.email}</p>
              <p><strong>🏙️ City:</strong> {employee.city}</p>
              <p><strong>💰 Salary:</strong> ₹{employee.salary.toLocaleString()}</p>
            </div>
            <div style={actionStyle}>
              {/* Edit button - hidden because backend doesn't have update endpoint yet */}
              <button 
                style={{ ...btnStyle, ...editBtnStyle }}
                onClick={() => alert('Update endpoint not available in backend yet!')}
              >
                ✏️ Edit
              </button>
              <button 
                style={{ ...btnStyle, ...deleteBtnStyle }}
                onClick={() => handleDelete(employee.id)}
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const containerStyle = { padding: '2rem' };
const headerStyle = { textAlign: 'center', marginBottom: '2rem', color: '#1a1a2e' };

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '1.5rem',
};

const cardStyle = {
  border: '1px solid #e0e0e0',
  padding: '1.5rem',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  backgroundColor: 'white',
};

const cardHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '2px solid #f0f0f0',
  paddingBottom: '0.5rem',
  marginBottom: '1rem',
};

const nameStyle = { margin: 0, color: '#1a1a2e' };
const idBadgeStyle = { backgroundColor: '#e8f4f8', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem' };

const detailsStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const actionStyle = {
  display: 'flex',
  gap: '0.5rem',
  marginTop: '1rem',
  paddingTop: '1rem',
  borderTop: '1px solid #f0f0f0',
};

const btnStyle = {
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '0.9rem',
  flex: 1,
};

const editBtnStyle = {
  backgroundColor: '#007bff',
  color: 'white',
};

const deleteBtnStyle = {
  backgroundColor: '#dc3545',
  color: 'white',
};

const loadingStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4rem',
};

const errorStyle = {
  textAlign: 'center',
  padding: '2rem',
  color: '#dc3545',
};

const emptyStyle = {
  textAlign: 'center',
  padding: '4rem',
  color: '#6c757d',
};

const retryBtnStyle = {
  padding: '0.5rem 1.5rem',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default EmployeeList;