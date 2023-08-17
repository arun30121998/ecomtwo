import React from "react";
import { TitleAndSubTitle, VerticalCard } from "../SharedComponents";
import { products } from "../../Data/ProductData";
import { useNavigate } from "react-router-dom";
import { cartProducts } from "../../Data/ProductData";
// 
export function Hightlightproducts() {
  const navigate = useNavigate();
  const title = "Highlights of Products";

  const handleClick = (category, productId) => {
    navigate(`/productList/${category}/${productId}`);
  };

  const handleCart = (productId) => {
    const clickedProduct = products.find((product) => product.id === productId);
    if (clickedProduct) {
      // Update cartProducts array
      cartProducts.push(clickedProduct);
    }
  };

  return (
    <div className="section-padding common-mt">
      <TitleAndSubTitle title={title} />
      <div className="row pt-1">
        {products.map((product) => {
          const { id, name, variants, category } = product;
          const firstVariant = variants[0];

          return (
            <div className="col-lg-4 col-md-2 col-sm-1" key={id}>
              <VerticalCard
                handleOnClick={() => handleClick(category, id)}
                name={name}
                ratings={firstVariant.ratings}
                image={firstVariant.mainImg}
                mrp={firstVariant.mrp}
                prize={firstVariant.price}
                handleCart={() => handleCart(id)} // Pass productId to handleCart function
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
