import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";
import { Breadcrumbs, Footer, LargeScreenNavbar, NavbarTop, TitleAndSubTitle } from "../../Components/SharedComponents";
import { products } from "../../Data/ProductData";

export function Category() {
  const name = "category";
  return (
    <>
      <NavbarTop />
      <LargeScreenNavbar />
      <Breadcrumbs name={name} />
      <ProductsCategorie />
      <Footer />
    </>
  );
}

export function ProductsCategorie() {
  const title = "Shop By Categories ~";
  const navigate = useNavigate();
  const uniqueCategories = [...new Set(products.map((product) => product.category))];

  const handleCategoryClick = (category) => {
    navigate(`/productList/${category}`);
  };

  return (
    <div className='categories-bg common-mt'>
      <div className='section-padding'>
        <TitleAndSubTitle title={title} />
        <div className='mt-1 grid grid-cols-3 gap-x-2 gap-y-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 xl:gap-x-8'>
          {uniqueCategories.map((category) => {
            const filteredProducts = products.filter((product) => product.category === category);
            const product = filteredProducts[0];

            return (
              <div
                key={product.id}
                className='cursor-pointer categories'
                onClick={() => handleCategoryClick(category)}
              >
                <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
                  <img
                    src={product.variants[0].mainImg}
                    alt={category}
                    className='category-img-hover w-full object-cover object-center'
                  />
                </div>
                <h6 className='lg:text-lg text-base lg:mt-2 mt-0 text-gray-900 md:d-flex'>{category}</h6>
                <p className='w-fit px-1 text-white rounded-lg border-0'>1 Item</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
