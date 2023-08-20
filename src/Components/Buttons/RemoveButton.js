import React from "react";

const RemoveButton = ({ onClick, className, label,icon }) => {
  return (
    <p
      type='button'
          className={`w-fit text-red-400  pl-1 flex items-center border-1 rounded-lg ${className}`}
      onClick={onClick}
    >
      {icon}
      <span className='hover:text-red-400 mt-0.1 pr-3 pl-1'>{label}</span>
    </p>
  );
};

export  {RemoveButton};
