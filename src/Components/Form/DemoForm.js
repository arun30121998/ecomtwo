import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Form.css";

const Form = ({
  fields,
  onSubmit,
  phoneNumber,
  setPhoneNumber,
  register,
  errors,
  labelButton,
  showPhoneInput,
  showCheckboxInput,
  handleNavigate,
  labelNavigate,
  errorMessaage,
}) => {
  const handlePhoneInputChange = (value) => {
    // Update the phone number state
    setPhoneNumber(value);
  };

  return (
    <form onSubmit={onSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label
            className='input-label'
            htmlFor={field.name}
          >
            {field.label}
          </label>
          <input
            className='border-2   validation-input'
            {...register(field.name, field.validation)}
            aria-invalid={errors[field.name] ? "true" : "false"}
          />
          {errors[field.name] && (
            <p
              className='m-0 form-erroe-style'
              role='alert'
            >
              {errors[field.name].message}
            </p>
          )}
        </div>
      ))}

      {/* Conditionally render PhoneInput based on the "showPhoneInput" prop */}
      {showPhoneInput && (
        <div>
          <label
            className='input-label'
            htmlFor='phoneNumber'
          >
            Phone Number:
          </label>
          <PhoneInput
            className=''
            country={"in"}
            name='phoneNumber'
            value={phoneNumber}
            onChange={handlePhoneInputChange}
            inputProps={{
              name: "phoneNumber",
              required: true, // Add the required attribute for built-in validation
            }}
          />
        </div>
      )}
      {showCheckboxInput && (
        <div className=' d-flex justify-between form-checkbox'>
          <div className='d-flex    form-checkbox'>
            <input
              type='checkbox'
              name=''
              id=''
            />
            <p>Accept Terms & Conditions</p>
          </div>
          <div className='login-link'>
            <p
              onClick={handleNavigate}
              className=' cursor-pointer'
            >
              {labelNavigate}
            </p>
          </div>
        </div>
      )}
      <p className=' text-red-500'>{errorMessaage}</p>

      <button
        className='validation-form-btn w-full'
        type='submit'
      >
        {labelButton}
      </button>
    </form>
  );
};

export { Form };
