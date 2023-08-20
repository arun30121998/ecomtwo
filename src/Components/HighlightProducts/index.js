import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import "./HighlightProduct.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { NewlyArrived } from "../../Data/DummyApi";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { StarRatings,TitleAndSubTitle, } from "../SharedComponents";
//
export  function Hightlightproduct() {
  const title = "This week’s highlights";
  const subTitle = "The liber tempor cum soluta nobis eleifend option congue doming quod mazim.";
  return (
    <div className='  section-padding common-mt'>
      <div className='mb-10 mt-3 col-lg-12 text-center'>
        <TitleAndSubTitle
          title={title}
          subTitle={subTitle}
        />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {NewlyArrived.map((product) => (
          <Card
            key={product.id}
            className='mb-2'
          >
            <div className='flex flex-row'>
              <div className=''>
                <CardHeader
                  shadow={false}
                  floated={false}
                  className='p-2 m-0'
                >
                  <img
                    src={product.img}
                    alt='dsfd'
                    className='w-48 h-48 rounded-xl object-cover'
                  />
                </CardHeader>
              </div>

              <div className='w-1/2'>
                <CardBody>
                  <Typography
                    variant='h6'
                    color='blue-gray'
                    className='mb-1'
                  >
                    {product.name}
                  </Typography>
                  <StarRatings
                    ratings={product.rating}
                    classNamePTwo='rating-name-size'
                  />
                  <div className='items-center'>
                    <div className='flex mt-2'>
                      <h4 className='realprize text-sm font-bold text-gray-900 dark:text-white'>
                        <CurrencyRupeeIcon className='realprize' /> {product.prize}
                      </h4>
                      <p className='currency pl-4 line-through'>
                        <CurrencyRupeeIcon className='currency' /> {product.mrp}
                      </p>
                    </div>
                  </div>
                  <div className='mt-3 flex justify-between'>
                    <a
                      href='./'
                      className='uppercase slider-btn w-fit text-white bg-blue-700 hover:bg-lime-600 focus:ring-4 focus:bg-lime-600 font-medium rounded-0 text-sm py-2 text-center dark:bg-lime-600 dark:hover:bg-lime-600 dark:focus:ring-blue-800 px-2'
                    >
                      <ShoppingCartIcon className='main-navigate-icons' />
                    </a>
                    <a
                      href='./'
                      className='uppercase slider-btn w-fit text-white bg-blue-700 hover:bg-lime-600 focus:ring-4 focus:bg-lime-600 font-medium rounded-0 text-sm py-2 text-center dark:bg-lime-600 dark:hover:bg-lime-600 dark:focus:ring-blue-800 px-2'
                    >
                      <FavoriteBorderIcon className='main-navigate-icons ' />
                    </a>
                    <a
                      href='./'
                      className='uppercase slider-btn w-fit text-white bg-blue-700 hover:bg-lime-600 focus:ring-4 focus:bg-lime-600 font-medium rounded-0 text-sm py-2 text-center dark:bg-lime-600 dark:hover:bg-lime-600 dark:focus:ring-blue-800 px-2'
                    >
                      <RemoveRedEyeIcon className='main-navigate-icons' />
                    </a>
                  </div>
                </CardBody>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
