import React from "react";
import "./NavbarTop.css";
//

const NavbarTop = () => {
  const prize = 4000;
  return (
    <>
      <div className='col-12 top-navbar text-center'>
        <p className='p-0 m-0 text-xs font-normal text-white'>Free Shipping in India For Orders above {prize} INR!</p>
      </div>
    </>
  );
};

export { NavbarTop };
