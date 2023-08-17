import React from "react";
import "./Form.css";
import { CartButton } from "../SharedComponents";

const CustomForm = ({ address, formData, handleChange, handleSubmit }) => {
  const { fullName, email, number ,} = formData;

  return (
    <div className='p-2'>
      <form onSubmit={handleSubmit}>
        <div className='row '>
          <div className='col-lg-6 input-style'>
            <p>Full name</p>
            <input
              value={fullName}
              type='text'
              name='fullName'
              id='fullName'
              className='border-1'
              onChange={handleChange}
            />
          </div>
          <div className='col-lg-6 input-style'>
            <p>Email</p>

            <input
              value={email}
              type='text'
              name='email'
              id='email'
              className='border-1 '
              onChange={handleChange}
            />
          </div>
          <div className='col-lg-6  input-style'>
            <p>Phone Number</p>

            <input
              value={number}
              type='number'
              name='number'
              id='email'
              className='border-1 '
              onChange={handleChange}
            />
          </div>
          <div className='col-lg-6 input-style'>
            <p>Select Country</p>
            <select name='selectedFruit'>
              <option value='apple'>Apple</option>
              <option value='banana'>Banana</option>
              <option value='orange'>Orange</option>
            </select>
          </div>
          <div className='col-lg-12 input-style'>
            <p>Address</p>
            <input
              value={address}
              type='text'
              name='address'
              id='address'
              className='border-1 '
              onChange={handleChange}
            />
          </div>
          <div className='col-lg-4  input-style'>
            <p>State</p>
            <input
              value={address}
              type='text'
              name='address'
              id='address'
              className='border-1 '
              onChange={handleChange}
            />
          </div>
          <div className='col-lg-4  input-style'>
            <p>District</p>
            <input
              value={address}
              type='text'
              name='address'
              id='address'
              className='border-1 '
              onChange={handleChange}
            />
          </div>
          <div className='col-lg-4  input-style'>
            <p>Postal Code</p>
            <input
              value={address}
              type='text'
              name='address'
              id='address'
              className='border-1 '
              onChange={handleChange}
            />
          </div>
         
          <div className='col-4'>
            <CartButton  label="Save" className="px-4 py-2  " />
          </div>
        </div>
      </form>
    </div>
  );
};

export { CustomForm };
