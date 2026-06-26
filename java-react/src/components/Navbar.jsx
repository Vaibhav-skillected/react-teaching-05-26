import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <h1 style={titleStyle}>👥 Employee Management</h1>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/add" style={linkStyle}>Add Employee</Link>
      </div>
    </nav>
  );
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#1a1a2e',
  color: 'white',
  boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
};

const titleStyle = {
  margin: 0,
  fontSize: '1.5rem',
};

const linkStyle = {
  color: 'white',
  marginLeft: '1.5rem',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  transition: 'background-color 0.3s',
  backgroundColor: 'transparent',
};

export default Navbar;