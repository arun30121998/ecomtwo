import React from "react";
import './Design.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
//


const InputUi = (props) => {
  const {
    inputValue,
    inputType,
    classNameInput,
    inputPlaceHolder,
    handleInput,
    error, // New prop for error message
  } = props;

  return (
    <div>
      <input
        value={inputValue}
        type={inputType}
        placeholder={inputPlaceHolder}
        onChange={handleInput}
        className={`w-full inputUi ${classNameInput} ${error ? 'error-border' : ''}`}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

const TextAreaInput = (props) =>  {
    const {inputValue, inputType, classNameInput, inputPlaceHolder, handleInput } = props;
    return (
      <div>
            <textarea
                value={inputValue}
          type={inputType}
          placeholder={inputPlaceHolder}
          onChange={handleInput}
          className={`w-full inputUi ${classNameInput}`}
        />
      </div>
    );
  }


export default function CountryInput() {
  return (
    <>
      <PhoneInput
     country={"in"}
      />
    </>
  )
}

export { InputUi ,TextAreaInput};
