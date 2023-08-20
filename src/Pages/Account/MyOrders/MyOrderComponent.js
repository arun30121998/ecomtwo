import React from "react";
import { NewlyArrived } from "../../../Data/DummyApi";
import { CancelIcon, LocalShippingIcon } from "../../../Components/SharedIcons";
import "./MyOrders.css";
import { Prize, RemoveButton } from "../../../Components/SharedComponents";
import { useNavigate } from "react-router-dom";
const MyOrderComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=''>
        <ul className='flex px-0  flex-col '>
          {NewlyArrived.map((product) => (
            <div key={product.id}>
              <li className='flex flex-col myorders-style  sm:flex-row sm:justify-between'>
                <div
                  className=' flex w-full space-x-2 sm:space-x-4'
                  key={product.id}
                >
                  <img
                    onClick={() => navigate("/mycart/order-tracking")}
                    className='flex-shrink-0 object-cover w-24 h-24 dark:border-transparent rounded outline-none  sm:w-28 sm:h-28 dark:bg-gray-500'
                    src={product.img}
                    alt='Polaroid camera'
                  />
                  <div className='flex flex-col justify-between w-full '>
                    <div className='flex justify-between w-full  space-x-2'>
                      <div className='space-y-1'>
                        <h6 className=' sm:pr-8'>{product.name}</h6>
                        <p className='text-sm dark:text-gray-400'>Quantity {product.quantity}</p>
                      </div>
                      <Prize
                        mrp={product.mrp}
                        prize={product.prize}
                      />
                    </div>
                    <div className='flex text-sm  divide-x '>
                      <RemoveButton
                        icon={<CancelIcon />}
                        label='Cancel'
                        className='border-1'
                      />
                      <RemoveButton
                        icon={<LocalShippingIcon />}
                        label='On The Way'
                        className='local-shipping border-0 ml-3'
                      />
                    </div>
                  </div>
                </div>
              </li>
              <hr />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MyOrderComponent;
