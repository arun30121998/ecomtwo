import React from "react";
import { CartButton } from "../SharedComponents";
import "./Calculation.css";
import { ArrowRightAltIcon, CurrencyRupeeIcon } from "../SharedIcons";
import { Link } from "react-router-dom";

// 
export function TotalPrize(props) {
  const { totalPrize,totalItems } = props;
  return (
    <div>
      <div className='  total-prize'>
        <div className='pt-3 pb-3 '>
          <h2>Prize Details</h2>
        </div>
        <div className='discount d-flex justify-between pl-2 pr-2'>
          <p>Prize({totalItems}items)</p>
        </div>
        <div className='discount d-flex justify-between pl-2 pr-2'>
          <p>Discount</p>
          <p>4543</p>
        </div>
        <div className='discount d-flex justify-between pl-2 pr-2'>
          <p>Delivery Charge</p>
          <p>Free</p>
        </div>
        <div className='border-b-2 border-t-2 pt-3 total-amount d-flex justify-between pl-2 pr-2'>
          <h5>SubTotal</h5>
          {/*PRODUCT TOTAL */}
          <p>
            {" "}
            <span>{<CurrencyRupeeIcon className="currency-style"/>}</span> {totalPrize} INR
          </p>
        </div>
        <div className='row  mt-3 d-flex justify-between'>
          
          <div className='col-12'>
            <CartButton
              label='Check Out'
              className='w-full check-out-btn  cursor-pointer'
            />
          </div>
        </div>
        <div className='continue-shopping-btn text-left mt-3 px-2 py-3 cursor-pointer'>
          <Link to={"/"}>
            <p>
              Continue Shopping <ArrowRightAltIcon />{" "}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
