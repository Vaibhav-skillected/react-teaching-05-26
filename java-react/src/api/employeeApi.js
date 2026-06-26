import axios from 'axios';

// Base URL .env se lete hain
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081';

// Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 1. GET ALL Employees
export const getAllEmployees = async () => {
  try {
    const response = await apiClient.get('/employee/getall');
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

// 2. CREATE - Naya Employee add karo
export const createEmployee = async (employeeData) => {
  try {
    const response = await apiClient.post('/employee/save', employeeData);
    return response.data;
  } catch (error) {
    console.error('Error creating employee:', error);
    // Agar email duplicate hai toh error message show karo
    if (error.response && error.response.status === 500) {
      throw new Error('Email already exists! Please use a different email.');
    }
    throw error;
  }
};

// 3. GET BY ID - Ek specific employee (Backend mein endpoint nahi hai, but agar future mein add karo toh)
export const getEmployeeById = async (id) => {
  try {
    const response = await apiClient.get(`/employee/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employee:', error);
    throw error;
  }
};


// 5. DELETE - Employee delete (Backend mein endpoint nahi hai)
export const deleteEmployee = async (id) => {
  try {
    await apiClient.delete(`/employee/${id}`);
    return id;
  } catch (error) {
    console.error('Error deleting employee:', error);
    throw error;
  }
};