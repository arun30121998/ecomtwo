import React, { useState } from "react";
import "./AddressBook.css";
import { CartButton, CustomForm } from "../../../Components/SharedComponents";
// CHILD
const AddressDetails = ({ formData, onEditAddress }) => {
  const { fullName, email, number, address } = formData;

  return (
    <div className="address-book-style">
      <h2>Address:</h2>
      <p>Full Name: {fullName}</p>
      <p>Email: {email}</p>
      <p>Number: {number}</p>
      <p>Address: {address}</p>
    </div>
  );
};

// PARENT
const Addressbook = () => {
  const [formList, setFormList] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    address: "",
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormList([...formList, formData]);
    setFormData({
      fullName: "",
      email: "",
      number: "",
      address: "",
    });
    setShowForm(false);
  };

  const handleEditAddress = () => {
    setShowForm(true);
  };

  

  return (
    <>
      <div className='row'>
        <div className='row'>
          <div className='col-8'>
            <h2 className='heading-toph2'>Your Addresses</h2>
          </div>
        </div>
        <div className='col-lg-12 mt-3'>
          {showForm ? (
            <>
              <CustomForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
              
            </>
          ) : (
            <>
                <CartButton
                  label="Edit Address" 
                  className="px-3 py-2"
                  onClick={handleEditAddress} />
              <div>
                {formList.map((data, index) => (
                  //CHILD
                  <AddressDetails
                    key={index}
                    formData={data}
                    onEditAddress={handleEditAddress}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Addressbook;
