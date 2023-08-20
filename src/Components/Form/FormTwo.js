import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

const FormTwo = (props) => {
  const { classNameParent, label, icon, ...inputProps } = props;

  return (
    <ChakraProvider>
      <div>
        <div className={classNameParent}>
          <FormControl id="name">
            <FormLabel className="text-black">{label}</FormLabel>
            <InputGroup borderColor="#E0E1E7">
              {icon && (
                <InputLeftElement pointerEvents="none" children={icon} />
              )}
              <Input type="text" size="md" {...inputProps} />
            </InputGroup>
          </FormControl>
        </div>
      </div>
    </ChakraProvider>
  );
};

FormTwo.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.element,
};

export default FormTwo;
