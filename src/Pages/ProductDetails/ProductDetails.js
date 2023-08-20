import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { AddShoppingCartIcon, FavoriteBorderIcon } from "../../Components/SharedIcons";
import {
  StarRatings,
  Prize,
  ShareSocialMedia,
  RadioCard,
  CustomNumberInput,
  LargeScreenNavbar,
  NavbarTop,
  Breadcrumbs,
  Footer,
  PopUpButton,
} from "../../Components/SharedComponents";
import { cartProducts, products } from "../../Data/ProductData";
import { UserReviewForm } from "./UserReviewForm";

export default function ProductDetails() {
  const { category, productId } = useParams();
  return (
    <>
      <NavbarTop />
      <LargeScreenNavbar />
      <Breadcrumbs
        name={category}
        productId={productId}
      />
      <ProductUI />
      <Footer />
    </>
  );
}

export function ProductUI() {
  const { category, productId } = useParams();
  const [displayImage, setDisplayImage] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedVariantObject, setSelectedVariantObject] = useState(null);
  const [cartValue, setCartValue] = useState('');

  
  
  const handleDisplayImage = (image) => {
    setDisplayImage(image);
  };

  const product = products.find((product) => product.category === category && product.id.toString() === productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  const selectedVariantData = product.variants.find((variant) => variant.value === selectedVariant) || product.variants[0];

  const handleVariantSelection = (variant) => {
    const selectedVariantData = product.variants.find((v) => v.value === variant);
    setSelectedVariant(variant);
    setSelectedVariantObject(selectedVariantData);

    // Check the availability of the selected variant and update the cart value
    if (selectedVariantData && selectedVariantData.availability[0] === "yes") {
      setCartValue("Added to cart"); // Update the cartValue state if the product is available.
    } else {
      setCartValue("Product is not available."); // Update the cartValue state to "Product is not available." if not available.
    }
  };


  // Inside the ProductUI component

 // Inside the ProductUI component
 
const handleAddToCart = () => {
  if (selectedVariantObject && selectedVariantObject.availability[0] === "yes") {
    const selectedVariantProduct = {
      ...product,
      variants: [selectedVariantObject],
    };
    cartProducts.push(selectedVariantProduct);
    setCartValue("Added to cart"); // Update the cartValue state if the product is available.
   
  } else {
    setCartValue("Product is not available.");
  }
};

  return (
    <div className='section-padding common-mt'>
      <div className='row product-details-head'>
        <div className='col-lg-1 col-2 h-fit p-0 m-0'>
          {selectedVariantData.subImg && selectedVariantData.subImg.length > 0 ? (
            selectedVariantData.subImg.map((image, index) => (
              <div
                key={index}
                className='col-12 mb-2 border-1'
              >
                <img
                  onClick={() => handleDisplayImage(image)}
                  onMouseOver={() => handleDisplayImage(image)}
                  className=' cursor-pointer hover:opacity-80 w-full object-cover'
                  src={image}
                  alt={product.name}
                />
              </div>
            ))
          ) : (
            <p>no photo</p>
          )}
        </div>
        <div className='col-lg-5 col-10'>
          <div className='col-lg-12 border-1'>
            <img
              className='w-full h-56 lg:h-96 object-contain'
              src={displayImage || selectedVariantData.mainImg}
              alt={product.name}
            />
          </div>
          <div className='row mt-4'></div>
        </div>
        <div className='col-lg-6 product-details-content'>
          <ShareSocialMedia
            classNameParent='share-social-icon'
            text=''
            showIcons={false}
          ></ShareSocialMedia>
          <h5>{product.name}</h5>
          <div className='d-flex m-0 mt-4 p-0'>
            <h6 className=' mr-5'>Prize :</h6>{" "}
            <Prize
              prize={selectedVariantData.price}
              mrp={selectedVariantData.mrp}
            />
          </div>
          <div className='d-flex p-0'>
            <h6 className='mr-5'>Ratings :</h6>
            <StarRatings ratings={selectedVariantData.ratings} />
          </div>
          <div>
            <h6>
              {" "}
              Availability: <span className='bg-lime-300 px-2 py-0.5 ml-3 rounded-sm'>{selectedVariantData.availability[0]}</span>{" "}
            </h6>
          </div>
          <div className='how-many pt-2'>
            <h6 className='d-flex p-0 mt-2'>
              <span className='mr-5 pb-0'>Select Items :</span>
              <CustomNumberInput />
            </h6>
          </div>
          <div className='select-quantity pb-4'>
            <h6 className='p-0 mt-0'>
              <span className='mr-5 pb-3'> Grams :</span>
            </h6>
            <div>
              <RadioCard
                variants={product.variants}
                onChange={handleVariantSelection}
              />
            </div>
          </div>
          <div className='d-flex space-x-2'>
            <PopUpButton
              onClick={() => handleAddToCart()}
              icon={<AddShoppingCartIcon />}
              buttonLabel='Add to Cart'
              toastMessage={cartValue}
              classNameIcon='pr-1'
              className='cart-btn-style'
            />
            <PopUpButton
              icon={<FavoriteBorderIcon />}
              classNameIcon='pr-1'
              buttonLabel='Add to Wishlist'
              className='whishlist-btn-style'
            />
          </div>
          <div className="general-details">
            <h6>General</h6>
            <p>Unit : <span>{selectedVariantData.value}</span></p>
            <p>Brand : <span>{product.brandName}</span></p>
            <p>Category : <span>{product.category}</span></p>
          </div>
          <div className="product-description">
            <h6>Desription:</h6>
            <p>{selectedVariantData.description}</p>
          </div>
        </div>
      </div>

      <UserReviewForm />
    </div>
  );
}
