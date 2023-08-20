import React, { useState } from "react";
import "./Button.css";

export function CustomNumberInput(props) {
  const [value, setValue] = useState(props.defaultValue);

  const handleIncrease = () => {
    if (value < props.max) {
      const newValue = value + 1;
      setValue(newValue);
      props.onQuantityChange(newValue); // Inform the parent component about the new quantity
    }
  };

  const handleDecrease = () => {
    if (value > props.min) {
      const newValue = value - 1;
      setValue(newValue);
      props.onQuantityChange(newValue); // Inform the parent component about the new quantity
    }
  };

  const handleChange = (e) => {
    // Parse the input value as a number and set the state
    const newValue = parseInt(e.target.value, 10);
    setValue(newValue);
    props.onQuantityChange(newValue); // Inform the parent component about the new quantity
  };

  return (
    <div className='d-flex w-16 justify-between calculation'>
      <button className="" onClick={handleIncrease}>+</button>
      <input
        className='border-1 w-8 rounded-sm'
        value={value}
        name=''
        id=''
        onChange={handleChange} // Add the onChange handler to update the state
      />
      <button onClick={handleDecrease} className=' '>-</button>
    </div>
  );
}
