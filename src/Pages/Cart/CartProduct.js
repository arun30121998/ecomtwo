import React from "react";
import { cartProducts } from "../../Data/ProductData";
import "./Cart.css";
import { DeleteIcon, } from "../../Components/SharedIcons";
import { CartButton, PopUpButton, Prize } from "../../Components/SharedComponents";
import { useNavigate } from "react-router-dom";

const CartProduct = () => {
  // Calculate the total prize of the products
  const navigate = useNavigate();

  const handleClick = () => {};

  return (
    <>
      <div className=''>
        {cartProducts.map((product) => {
          const { id, name, variants } = product;
          const variant = variants[0]; // Get the first variant

          const isValidPrice = typeof variant.price === "number";

          return (
            <>
              <div
                className='border-1 mt-4 rounded-lg'
                key={id}
              >
                <div className='block border-gray-200 dark:border-gray-700 md:flex'>
                  <div className='w-full md:w-1/3 md:mb-0'>
                    <div className='flex w-full h-96 md:h-32 md:w-32'>
                      <img
                        src={product.displayImage}
                        alt=''
                        className='object-cover w-full h-full rounded-md'
                      />
                    </div>
                  </div>
                  <div className='w-full pl-5 pr-3 pt-2 md:2/3'>
                    <div className='flex justify-between'>
                      <div className='cart-content '>
                        <h5 className='dark:text-gray-400'>{name}</h5>
                       
                        <div className='d-flex'>
                          <PopUpButton
                            toastMessage='removed from cart'
                            buttonLabel='Remove'
                            onClick={handleClick}
                            className='wishlist-remove-btn'
                            icon={<DeleteIcon />}
                          />
                        </div>
                      </div>
                      <Prize
                        prize={isValidPrice ? variant.price : 0}
                        mrp={variant.mrp}
                        h4ClassName='prize'
                        parentDivClassName='prize-style'
                        pClassName='mrp-style'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className='row'>
        <div className='col-12'>
          <CartButton label='View Cart'
            className="w-full py-3 mt-4"
            onClick={() => navigate('/mycart')}
          />
        </div>
      </div>
    </>
  );
};

export default CartProduct;
