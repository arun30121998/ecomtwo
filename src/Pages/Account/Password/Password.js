import React, { useState } from "react";
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import "./Password.css";
import ChangePassword from "./ChangePassword";
//

const Password = () => {
  const [changePassword, setChangePassword] = useState(false);
  const [show, setShow] = React.useState(false);
  const [showtwo, setShowtwo] = React.useState(false);

  const handleClick = () => setShow(!show);
  const handleClickTwo = () => setShowtwo(!showtwo);

  const handlePassword = () => {
    setChangePassword(true);
  };
  return (
    <>
      {changePassword ? (
        <ChangePassword />
      ) : (
        <div className=' row'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='heading-toph2'>Change Password</h2>
            </div>
          </div>
          <div className='col-lg-8'>
            <ChakraProvider>
              {/* input one */}
              <InputGroup
                size='lg'
                mt={7}
              >
                <Input
                  pr='4.5rem'
                  type={show ? "text" : "password"}
                  placeholder='Enter password'
                  className='border-2 p-2 w-full password-input-style'
                />
                <InputRightElement width='4.5rem'>
                  <Button
                    h='1.75rem'
                    size='sm'
                    onClick={handleClick}
                  >
                    {showtwo ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {/* input two */}
              <InputGroup
                size='lg'
                mt={5}
              >
                <Input
                  pr='4.5rem'
                  type={showtwo ? "text" : "password"}
                  placeholder='Re-Enter password'
                  className='border-2 p-2 w-full password-input-style'
                />
                <InputRightElement width='4.5rem'>
                  <Button
                    h='1.75rem'
                    size='sm'
                    onClick={handleClickTwo}
                  >
                    {showtwo ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button
                onClick={handlePassword}
                mt={8}
                className='change-password-btn'
                type='submit'
              >
                Change Password
              </Button>
            </ChakraProvider>
          </div>
        </div>
      )}
    </>
  );
};

export default Password;
