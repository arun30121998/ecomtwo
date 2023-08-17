import React,{useState} from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RecentProduct.css";
import { StarRatings, TitleAndSubTitle, Prize, PopUpButton } from "../SharedComponents";
import { products,wishlistProducts } from "../../Data/ProductData";
import { useNavigate } from "react-router-dom";
//

const RecentProducts = () => {
    // State to manage the wishlist data
  const [wishlist, setWishlist] = useState(wishlistProducts);
  const [toastMessage, setToastMessage] = useState('')
  const navigate = useNavigate();
  const title = "Recently Sold Items ~";

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
       
      },
    ],
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 30000,
  };
  const handleNavigation = (category, productId) => {
    navigate(`/productList/${category}/${productId}`);
  };


// Function to add a product to the wishlist
const addToWishlist = (product) => {
  // Check if the product is already in the wishlist
  const isInWishlist = wishlist.some((item) => item.id === product.id);
  if (!isInWishlist) {
    setToastMessage("added to wishlist")
    wishlistProducts.push(product);
    setWishlist((prevWishlist) => [...prevWishlist, product]);
    console.log("Product added to wishlist:", product);
  } else {
    setToastMessage("product already in wishlist")
    console.log("Product is already in the wishlist.");
  }
};

  
  return (
    <>
      <div className='recent-product-bg-img mt-10'></div>
      <div className='mt-16 recent-product mx-auto max-w-2xl  py-4 sm:px-0 sm:py-24 lg:max-w-7xl lg:px-0'>
        <TitleAndSubTitle
          className="ml-2"
          title={title}
        />

        <Slider
          {...sliderSettings}
          className='gap-4'
        >
          {products.map((product) => {
            const { id, name, category, variants } = product; // Destructure variants array
            const variant = variants[0]; // Get the first variant

            return (
              <div
                key={id}
                className='w-full'
              >
                <div className='slider-card mb-5 bg-gray-50 rounded-lg dark:bg-gray-800 dark:border-gray-700'>
                  <img
                    onClick={() => handleNavigation(category, id)}
                    className='rounded-t-lg h-48 w-full object-cover object-center'
                    src={variant.mainImg}
                    alt='product'
                  />
                  <div className='top-products-content '>
                    <p className=' mb-0'>{variant.subname}</p>
                    <div className='items-center'>
                      <h6 className='capitalize mb-0 text-gray-800  mb-2  tracking-tight'> {name}</h6>
                      <StarRatings
                        ratings={variant.ratings}
                        classNamePTwo='rating-name-size'
                      />
                      <Prize
                        prize={variant.price}
                        mrp={variant.mrp}
                      />
                    </div>
                    <div className='wishlist-icon'>
                      
                      <PopUpButton 
                        toastMessage={toastMessage}
                        icon={<FavoriteBorderIcon className='mt-1 wishlist-icon-style' />}
                        onClick={() => addToWishlist(product)}
                        className="wishlist-btn-style"
                      />
                     
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export { RecentProducts };
