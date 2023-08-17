import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import "./VerticalCard.css";
import {  Prize, StarRatings,} from "../SharedComponents";
import {  FavoriteBorderIcon,  } from "../SharedIcons";
//
function VerticalCard({ handleCart, handleOnClick, name, category, prize, mrp, image, title, description, ratings }) {
  return (
    <Card className='flex-row w-full card-style position-relative'>
      <CardHeader
        shadow={false}
        floated={false}
        className='w-2/5 shrink-0 m-0 rounded-r-none'
      >
        <img
          onClick={handleOnClick}
          src={image}
          alt=''
          className='w-full h-full object-cover'
        ></img>
      </CardHeader>
      <CardBody className='p-2'>
        <h6>{name}</h6>
        <p
          color='gray'
          className='font-normal '
        >
          {description}
        </p>
        <StarRatings
          classNamePTwo=' text-xs mt-1 '
          ratings={ratings}
        />
        <Prize
          prize={prize}
          mrp={mrp}
        />
        <p>Free Delivery Avilable</p>
        <div className='d-flex  h-fit '>
         

          <FavoriteBorderIcon className='favorite-icon-style  ' />

          
        </div>
      </CardBody>
    </Card>
  );
}
export { VerticalCard };
