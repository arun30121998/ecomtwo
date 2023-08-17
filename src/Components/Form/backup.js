import React, { useState } from "react";
import { CartButton, InputUi } from "../../Components/SharedComponents";
import { loginUser } from "../../services/api";
import "./Profile.css";
import UserList from "./Demo";
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    // Form validation
    if (!phoneNumber.trim() || !password.trim()) {
      setError("Please enter both phone number and password.");
      return;
    }

    // Perform user login here
    const loginData = {
      phoneNumber,
      password,
    };

    try {
      const response = await loginUser(loginData);
      console.log("user login successful:", response);

      // Clear form fields and error message after successful login
      setPhoneNumber("");
      setPassword("");
      setError("");

      // Store user information in sessionStorage
      sessionStorage.setItem("accessToken", response.token);
      sessionStorage.setItem("phoneNumber", phoneNumber);
      // Set the isLoggedIn flag to true
      setIsLoggedIn(true);

      // Store user details in state
      setUserDetails(response.user);
      // Store specific user details in sessionStorage
      sessionStorage.setItem("specificUser", JSON.stringify(response.user));
      // navigate to home if user is true
      navigate('/')
      window.location.reload();
    } catch (error) {
      console.log("error while logging in:", error);
      setError("Invalid phone number or password.");
    }
  };

  console.log("User details in UserLogin:", userDetails);

  // Access data from sessionStorage after successful login
  const storedPhoneNumber = sessionStorage.getItem("phoneNumber");

  return (
    <div className='col-11 col-lg-5 m-auto registration-form'>
      <h6>Login Here</h6>
      <form onSubmit={handleLogin}>
        <InputUi
          inputValue={phoneNumber}
          inputType='number'
          inputPlaceHolder='enter your number'
          handleInput={handlePhoneNumber}
        />
        <InputUi
          inputValue={password}
          inputType='password'
          inputPlaceHolder='enter your password'
          handleInput={handlePassword}
        />
        {error && <div className='error-message'>{error}</div>}
        <CartButton
          label='Login'
          className='registration-btn'
        />
      </form>
      <UserList
        userDetails={userDetails}
        isLoggedIn={isLoggedIn}
      />
      <div className='details'>
        {/* Display the stored phoneNumber */}
        {storedPhoneNumber && <p>Stored Phone Number: {storedPhoneNumber}</p>}
      </div>
    </div>
  );
};

export default UserLogin;
