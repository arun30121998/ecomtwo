import React, { useEffect, useState } from "react";
import { getUsers } from "../../services/api";

const UserList = ({ userDetails, isLoggedIn }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users when the component mounts
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      console.log("Users:", response.users);

      // Update the state with the fetched users
      setUsers(response.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Find the user with the specific _id value
  const specificUser = users.find((user) => user._id === userDetails?._id);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>User Details:</h2>
          {specificUser ? (
            <div>
              <p>Name: {specificUser.fullName}</p>
              <p>Email: {specificUser.email}</p>
              <p>Phone Number: {specificUser.phoneNumber}</p>
            </div>
          ) : (
            <div>Specific user not found.</div>
          )}
        </div>
      ) : (
        <div>Please log in to view user details.</div>
      )}
    </div>
  );
};

export default UserList;
