import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // Function to update the user state with the received data
  const updateUser = (userData) => {
    setUser(userData);
  };

  // Read the stored user details from sessionStorage on component mount
  useEffect(() => {
    const storedUserDetails = sessionStorage.getItem("specificUser");
    if (storedUserDetails) {
      setUser(JSON.parse(storedUserDetails));
      console.log(storedUserDetails);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser: updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
