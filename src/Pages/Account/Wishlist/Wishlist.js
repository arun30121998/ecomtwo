import React, { useState } from "react";
import { AddShoppingCartIcon, DeleteIcon } from "../../../Components/SharedIcons";
import "./WishList.css";
import { wishlistProducts } from "../../../Data/ProductData";
import { Prize, PopUpButton } from "../../../Components/SharedComponents";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(wishlistProducts);

  const handleClick = (productId) => {
    // Find the index of the product to be removed
    const indexToRemove = wishlist.findIndex((product) => product.id === productId);

    if (indexToRemove !== -1) {
      // Create a new array without the item to be removed
      const updatedWishlist = [...wishlist.slice(0, indexToRemove), ...wishlist.slice(indexToRemove + 1)];

      // Update the wishlist state with the updated array
      setWishlist(updatedWishlist);
    }
  };

  return (
    <>
      <div className=''>
        {wishlist.map((product) => {
          const { id, name, variants } = product;
          const variant = variants[0]; // Get the first variant

          return (
            <div
              className='border-1 mt-4 rounded-lg'
              key={id}
            >
              <div className='row  border-gray-200 dark:border-gray-700 '>
                <div className='col-lg-2 col-4'>
                  <img
                    src={variant.mainImg}
                    alt=''
                    className='object-cover w-full h-full rounded-md'
                  />
                </div>
                <div className='col-lg-10 col-8 pt-2'>
                  <div className='row'>
                    <div className='col-lg-9 col-5'>
                      <div className='cart-content'>
                        <h6 className='dark:text-gray-400'>{name}</h6>
                        <div className='d-flex'>
                          <p className='text-gray-600 dark:text-gray-400'>Quantity:</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-7 '>
                      <Prize
                        mrp={variant.mrp}
                        prize={variant.price}
                        ClassNameh4=' mt-2 pl-2'
                        pClassName=' mt-2 pr-4'
                        parentDivClassName=''
                      />
                    </div>
                  </div>
                  <div className='d-flex'>
                    <PopUpButton
                      toastMessage='removed from cart'
                      buttonLabel='Remove'
                      onClick={() => handleClick(id)} // Pass the productId to handleClick
                      className='wishlist-remove-btn'
                      icon={<DeleteIcon />}
                    />
                    <PopUpButton
                      toastMessage='added to cart'
                      buttonLabel='Add to Cart'
                      onClick={handleClick} // You can implement Add to Cart functionality here
                      className='ml-2 wishlist-cart-btn'
                      icon={<AddShoppingCartIcon className='mr-2' />}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Wishlist;
