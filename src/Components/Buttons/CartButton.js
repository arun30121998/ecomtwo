import React from "react";
import './Button.css';

export function CartButton({ label, className, onClick, icon, classNameIcon }) {
  return (
    <div className='flex justify-between'>
      <button
        type="submit"
        onClick={onClick}
        className={`cart-button-style cursor-pointer uppercase text-white focus:ring-4 focus:bg-lime-600 font-medium rounded-lg text-sm text-center dark:bg-lime-600 dark:hover:bg-lime-600 dark:focus:ring-lime-800 ${className}`}
      >
        <span className={` ${classNameIcon}`}>{icon}</span>
        {label}
      </button>
    </div>
  );
}
