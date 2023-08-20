import React from "react";
import { StarRatings, Prize, } from "../SharedComponents";
import "./ProductCard.css";

const ProductCard = ({handleCard, id,name,subname, grams, price, mrp, availability, mainImg, subImg, description, ratings, onClick }) => {
  return (
    <div key={id} className="  w-full" >
      <div className="product-card-style   bg-gray-50 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <img
          onClick={onClick}
          className="rounded-t-lg  w-full object-cover object-center"
          src={mainImg}
          alt="product"
        />
        <div className="top-products-content">
          <div className="items-center">
            <h6 className="capitalize text-gray-800 font-semibold mb-2 tracking-tight">
              {name}
            </h6>
            <p className="m-0">{description}</p>
            <StarRatings ratings={ratings} classNamePTwo="rating-name-size" />
            <Prize prize={price} mrp={mrp} />
          </div>

          
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
