import React, { useState } from "react";
import AccountInformation from "./AccountInformation";

export default function EditAccountInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here

    // Set the state to indicate that the form is saved
    setIsSaved(true);
  };

  return (
    <>
      {isSaved ? (
        <AccountInformation
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          date={date}
        />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='space-y-12'>
            <div className='border-b border-gray-900/10 pb-12'>
              <h2 className='text-base font-semibold leading-7 text-gray-700'>Edit Your Account Info</h2>

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    First name
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      autoComplete='given-name'
                      value={firstName}
                      onChange={handleFirstNameChange}
                      className='rounded-md border-gray-100 block w-full  border-1 p-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Last name
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='last-name'
                      id='last-name'
                      autoComplete='family-name'
                      value={lastName}
                      onChange={handleLastNameChange}
                      className= 'rounded-md border-gray-100 block w-full  border-1 p-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Email address
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      value={email}
                      onChange={handleEmailChange}
                      className=  'rounded-md border-gray-100 block w-full  border-1 p-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Phone
                  </label>
                  <div className='mt-2'>
                    <input
                      id='phone'
                      name='phone'
                      type='tel'
                      autoComplete='tel'
                      value={phone}
                                              onChange={handlePhoneChange}
                                              
                      className='rounded-md border-gray-100  block w-full  border-1 p-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='date'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Date
                  </label>
                  <div className='mt-2'>
                    <input
                      id='date'
                      name='date'
                      type='date'
                      autoComplete='date'
                      value={date}
                      onChange={handleDateChange}
                      className='rounded-md border-gray-100 block w-full  border-1 p-1.5 text-gray-900  ring-1 ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-6 flex items-center justify-end gap-x-6'>
            <button
              type='button'
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='rounded-md bg-lime-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'
            >
              Save
            </button>
          </div>
        </form>
      )}
    </>
  );
}
