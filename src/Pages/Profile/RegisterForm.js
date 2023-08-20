import React, { useState } from "react";
import { Form } from "../../Components/Form/DemoForm";
import { registerUser } from "../../services/api"; // Import the registerUser function
import { useForm } from "react-hook-form";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
//
export default function RegisterForm() {

  const navigate = useNavigate();
  const [error, setError] = useState('')
  const [phoneNumber, setPhoneNumber] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      // Include the phone number in the form data
      const formData = { ...data, phoneNumber };

      // Call the registerUser function and pass the form data to it
      const response = await registerUser(formData);
      // Handle the response from the server
      console.log("Form submitted successfully:", response);
      // You can also display a success message to the user if needed
      reset(); // Reset the form fields to their initial values
      setPhoneNumber(""); 
    } catch (error) {
      // Handle any errors that occur during form submission
      console.error("Error submitting form:", error);
      if (error.message === "User with the same email or phone number already exists") {
        setError("User with the same email or phone number already exists")
        // Display a message indicating that the user is already registered
        // You can set this message to the 'error' state and display it on the form
      } else {
        // Display a generic error message indicating that something went wrong
        // You can set this message to the 'error' state and display it on the form
      }
    }
  };

  const formFields = [
    {
      name: "fullName",
      label: "First Name:",
      validation: {
        required: "First name is required",
        pattern: {
          value: /^[A-Za-z]+$/i,
          message: "First name should contain only alphabetical characters",
        },
        maxLength: {
          value: 20,
          message: "First name should not exceed 10 characters",
        },
      },
    },
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
        pattern: {
          // value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          message: "Password must contain at least 8 characters, including both letters and numbers.",
        },
        maxLength: {
          value: 50, // Adjust the maximum length as per your requirement
          message: "Password should not exceed 50 characters",
        },
      },
    },
  ];

  return (
    <div className='mt-10'>
      <div className='col-12 col-lg-4  m-auto registration-from-style'>
        <h1>Register Here</h1>
        <Form
          fields={formFields}
          onSubmit={handleSubmit(onSubmit)}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          register={register}
          errors={errors}
          labelButton='Submit'
          showPhoneInput={true}
          showCheckboxInput={true}
          labelNavigate='Login Here'
          handleNavigate={() => navigate("/userLogin")}
          errorMessaage={error}
        />{" "}
      </div>
      
    </div>
  );
}
