import React, { useState } from "react";
import { loginUser } from "../../services/api";
import "./Profile.css";
import { Form } from "../../Components/Form/DemoForm";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const UserLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = async (data) => {
    // Extract the email and password from the form data
    const { email, password } = data;

    // Form validation
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    // Perform user login here
    const loginData = {
      email,
      password,
    };

    try {
      const response = await loginUser(loginData);
      console.log("user login successful:", response);

      // Clear form fields and error message after successful login
      setError("");

      // Store user information in sessionStorage
      sessionStorage.setItem("accessToken", response.token);
      sessionStorage.setItem("email", email);

      // Store specific user details in sessionStorage
      sessionStorage.setItem("specificUser", JSON.stringify(response.user));

      // Reload the page to reflect the logged-in state
      navigate('/')
      window.location.reload();
    } catch (error) {
      console.log("error while logging in:", error);
      setError("Invalid email or password.");
    }
  };

  const formFields = [
    {
      name: "email",
      label: "Email:",
      validation: {
        required: "Email is required",
        pattern: {
          value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
          message: "Invalid email format",
        },
        maxLength: {
          value: 100,
          message: "Email should not exceed 100 characters",
        },
      },
    },
    {
      name: "password",
      label: "Password:",
      validation: {
        required: "Password is required",
        // Add any other validation rules for the password if needed
      },
    },
  ];

  return (
    <div className='mt-10'>
      <div className='col-lg-4 col-12 m-auto registration-from-style'>
        <h1>Login Here</h1>
        <Form
         fields={formFields}
         onSubmit={handleSubmit(handleLogin)}
         register={register} // Pass the register function to the Form component
         errors={errors} // Pass the errors from React Hook Form
          labelButton="Login"
          showCheckboxInput={true}
          labelNavigate="Register Here"
          handleNavigate={() => navigate('/registration')}
        />
        {error && <p className=" text-red-500  m-0 " role='alert'>{error}</p>}
      </div>
    </div>
  );
};

export default UserLogin;
