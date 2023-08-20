import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  StarRatings,
  Prize,
  ShareSocialMedia,
  RadioCard,
  CustomNumberInput,
  CartButton,
  LargeScreenNavbar,
  NavbarTop,
  Breadcrumbs,
  Footer,
} from "../../Components/SharedComponents";
import { products } from "../../Data/ProductData";
import { ProductDetailsTab } from "./ProductDetailsTab";

export default function ProductDetails() {
  return (
    <>
      <NavbarTop />
      <LargeScreenNavbar />
      <Breadcrumbs />
      <ProductUI />
      <Footer />
    </>
  );
}

export function ProductUI() {
  const { category, productId } = useParams();
  const [displayImage, setDisplayImage] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const handleDisplayImage = (image) => {
    setDisplayImage(image);
  };

  const handleVariantSelection = (variant) => {
    setSelectedVariant(variant);
  };

  const product = products.find(
    (product) =>
      product.category === category && product.id.toString() === productId
  );

  if (!product) {
    return <div>Product not found.</div>;
  }

  const selectedVariantData = product.variants.find(
    (variant) => variant.value === selectedVariant
  ) || product.variants[0];

  return (
    <div className="section-padding common-mt">
      <div className="row product-details-head">
        <div className="col-lg-1 col-2 h-fit p-0 m-0">
          {selectedVariantData.subImg && selectedVariantData.subImg.length > 0 ? (
            selectedVariantData.subImg.map((image, index) => (
              <div key={index} className="col-12 mb-2 border-1">
                <img
                  onClick={() => handleDisplayImage(image)}
                  onMouseOver={() => handleDisplayImage(image)}
                  className=" cursor-pointer hover:opacity-80 w-full object-cover"
                  src={image}
                  alt={product.name}
                />
              </div>
            ))
          ) : (
            <p>no photo</p>
          )}
        </div>
        <div className="col-lg-5 col-10">
          <div className="col-lg-12 border-1">
            <img
              className="w-full h-56 lg:h-96 object-contain"
              src={displayImage || selectedVariantData.mainImg}
              alt={product.name}
            />
          </div>
          <div className="row mt-4"></div>
        </div>
        <div className="col-lg-6 product-details-content">
          <ShareSocialMedia
            classNameParent="share-social-icon"
            text=""
            showIcons={false}
          ></ShareSocialMedia>
          <h5>{product.name}</h5>
          <p className="d-flex m-0 mt-4 p-0">
            <span className="mt-1.5 mr-5">Prize :</span>{" "}
            <Prize prize={selectedVariantData.price} mrp={selectedVariantData.mrp} />
          </p>
          <p className="d-flex p-0">
            <span className="mr-5">Ratings :</span>
            <StarRatings ratings={selectedVariantData.ratings}  />
          </p>
          <p>
            Availability:{" "}
            <span className="bg-lime-300 px-2 py-0.5 ml-3 rounded-sm">
              {selectedVariantData.availability[0]}
            </span>
          </p>
          <div className="how-many pt-2">
            <p className="d-flex p-0 mt-2">
              <h6 className="mr-5 pb-0">Select Items :</h6>
              <CustomNumberInput />
            </p>
          </div>
          <div className="select-quantity pb-4">
            <h6 className="p-0 mt-0">
              <span className="mr-5 pb-3"> Grams :</span>
            </h6>
            <p>
              <RadioCard
                variants={product.variants}
                onChange={handleVariantSelection}
              />
            </p>
          </div>

          {/* button */}
          <div className="d-flex">
            <CartButton
              icon={<AddShoppingCartIcon />}
              label="Add To Cart"
              classNameIcon="pr-3"
              className="cart-btn-style"
            />
            <CartButton
              icon={<FavoriteBorderIcon />}
              classNameIcon="pr-3"
              label="Add to Wishlist"
              className="whishlist-btn-style"
            />
          </div>
        </div>
      </div>

      <div className='pt-6'>
          <ProductDetailsTab />
        </div>
    </div>
  );
}