import React, { useState } from 'react';
import { EditIcon } from '../../../Components/SharedIcons';
import EditAccountInfo from './EditAccountInfo';
import './AccountInformation.css';
export function AccountInfoSection({ Person, onEditClick }) {
  return (
    <>
        <div className='row'>
          <div className='account-information col-sm-8 col-lg-8'>
            <h2 className='heading-toph2'>{Person.title}</h2>
          </div>
          <div className='col-sm-4 col-lg-4'>
            <p
             
              className='uppercase  w-fit text-white bg-lime-700 hover:bg-lime-600 focus:ring-4 focus:bg-lime-600 font-medium rounded-0 text-sm py-2 text-center dark:bg-lime-600 dark:hover:bg-lime-600 dark:focus:ring-blue-800 px-2'
              onClick={onEditClick}
            >
              <EditIcon className='main-navigate-icons' />
            </p>
          </div>
        </div>
        <div className='col-lg-6 mt-3 account-info-content'>
          <p>
            First Name : <span>{Person.firstName}</span>
          </p>
          <p>
            E-mail Address : <span>{Person.email}</span>
          </p>
          <p>
            Phone Number : <span>{Person.phone}</span>
          </p>
        </div>
        <div className='col-lg-6 mt-3 account-info-content'>
          <p>
            Last Name : <span>{Person.lastName}</span>
          </p>
          <p>
            Date of Birth : <span>{Person.dob}</span>
          </p>
          <p>
            Gender : <span>{Person.gender}</span>
          </p>
        </div>
    </>
  );
}

export default function AccountInformation() {
  const PersonDetails = {
    title:"Account Information",
    firstName: 'Unknown',
    lastName: 'Unknown',
    email: '123unknown@gmail.com',
    phone: 2943294323,
    dob: '25.06.1998',
    gender: 'male',
  };

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <>
      {isEditing ? (
        <EditAccountInfo />
      ) : (
        <AccountInfoSection Person={PersonDetails} onEditClick={handleEditClick} />
      )}
    </>
  );
}
