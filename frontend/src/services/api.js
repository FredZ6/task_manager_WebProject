import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const registerUser = (username, password) => {
  return axios.post(`${API_URL}/users/register`, { username, password });
};

export const loginUser = (username, password) => {
  return axios.post(`${API_URL}/users/login`, { username, password });
};

export const getTasks = (userId) => {
  return axios.get(`${API_URL}/tasks/${userId}`);
};

export const createTask = (title, description, userId) => {
    return axios.post(`${API_URL}/tasks/create`, { title, description, userId });
  };

export const deleteTask = (taskId) => {
  return axios.delete(`${API_URL}/tasks/${taskId}`);
};

export const updateTask = (taskId, title, description, dueDate, userId) => {
  return axios.put(`${API_URL}/tasks/${taskId}`, { title, description, dueDate, userId });
};