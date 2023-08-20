import React from "react";
import Rating from "@mui/material/Rating";
import './Design.css'
export function StarRatings(props) {
  const STAR_RATINGS = {
    1: "Poor",
    2: "Fair",
    3: "Good",
    4: "Very Good",
    5: "Excellent",
  };

  
  const { ratings, classNamePOne, classNamePTwo } = props;
  const ratingName = STAR_RATINGS[ratings];

  return (
    <div className="d-flex">
      <div className={`m-0 ${classNamePOne}`}>
        <Rating
          name="half-rating"
          value={ratings}
          precision={0.5}
          readOnly
         className="star-ratings"
        />
      </div>
      <p className={`star-rating-content  pl-3 ${classNamePTwo}`}> {ratingName}</p>
    </div>
  );
}
