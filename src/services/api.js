// services/api.js
import axios from 'axios';

export const registerUser = async (registrationData) => {
  try {
    const response = await axios.post('http://localhost:3002/api/register', registrationData);
    return response.data;
  } catch (error) {
    // If the API responds with a 409 status, it means the user is already registered
    if (error.response && error.response.status === 409) {
      throw new Error("User with the same email or phone number already exists");
    }

    throw new Error("Something went wrong during registration");
  }
};

export const loginUser = async (loginData) => { // Pass setUser function from UserContextProvider
    try {
      const response = await axios.post('http://localhost:3002/api/login', loginData);
  
      // Store the user details in the UserContext
  
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
};
  
// services/api.js

export const getUsers = async () => {
  try {
    console.log("Fetching users...");
    const response = await axios.get('http://localhost:3002/api/users');
    console.log("User data received:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error while fetching users:", error);
    throw error.response.data;
  }
};


