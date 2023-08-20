import React, { useState } from "react";
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import "./Password.css";
import Password from "./Password";

//

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState(false);
  const [show, setShow] = React.useState(false);
  const [showtwo, setShowtwo] = React.useState(false);

  const handleClick = () => setShow(!show);
  const handleClickTwo = () => setShowtwo(!showtwo);

  const handleNewPassword = () => {
    setNewPassword(true);
  };
  return (
    <>
      {newPassword ? (
        <div className='newpassword'>
          <Password />
        </div>
      ) : (
        <div className=' row '>
          <div className='row'>
            <div className='col-12'>
              <h2 className='heading-toph2'>Enter Your New Password</h2>
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
                  type={show ? "text" : "password"}
                  placeholder='Enter New password'
                  className='border-2 p-2 w-full password-input-style'
                />
                <InputRightElement width='4.5rem'>
                  <Button
                    h='1.75rem'
                    size='sm'
                    onClick={handleClick}
                  >
                    {show ? "Hide" : "Show"}
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
                  placeholder='Re-Enter New password'
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
                onClick={handleNewPassword}
                mt={8}
                className='change-password-btn'
                type='submit'
              >
                Confirm Password
              </Button>
            </ChakraProvider>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangePassword;
