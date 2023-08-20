import { Rating } from "@material-tailwind/react";
import React, { useState } from "react";

export function UserRatings(props) {
  const { classNameHead, classNameRatings, classNameP, onClick } = props;

  const names = {
    1: "Poor",
    2: "Fair",
    3: "Good",
    4: "Very Good",
    5: "Excellent",
  };

  const [ratings, setRatings] = useState(0);
  const ratingName = names[ratings] || ""; // Provide a default value if rating is not found

  const handleRatings = (value) => {
    setRatings(value);

    // Invoke the onClick prop if it is provided
    if (onClick) {
      onClick(value);
    }
  };

  return (
    <div className={classNameHead}>
      <Rating
        className={classNameRatings}
        onChange={handleRatings}
        value={ratings}
        readonly={false}
      />
      <p className={classNameP}>{ratingName}</p>
    </div>
  );
}
