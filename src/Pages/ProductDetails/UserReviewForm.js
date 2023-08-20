import { CartButton, InputUi, TextAreaInput, UserRatings } from "../../Components/SharedComponents";
import React, { useState } from "react";
import "./ProductDetails.css";
//

export function UserReviewForm({ addReviews }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  const handleRatingChange = (value) => {
    setRating(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      fullName: fullName,
      email: email,
      comment: comment,
      rating: rating,
    };

    setReviews([...reviews, newReview]);

    setFullName("");
    setEmail("");
    setComment("");
    setRating(0);
  };
  return (
    <>
      <div className='mt-3'>
        <div className='row'>
          <h6>Add a review</h6>
          <div className='col-lg-8 col-12'>
            <div className='row'>
              <div className='col-6'>
                <InputUi
                  inputPlaceHolder='Enter Your FullName'
                  inputType='text'
                  handleInput={handleFullNameChange}
                  inputValue={fullName}
                />
              </div>
              <div className='col-6 '>
                <InputUi
                  inputPlaceHolder='Enter Your Email'
                  inputType='email'
                  handleInput={handleEmailChange}
                  inputValue={email}
                />
              </div>
            </div>
            <div className='col-12'>
              <TextAreaInput
                inputPlaceHolder='Your Comments'
                inputType='text'
                handleInput={handleCommentChange}
                inputValue={comment}
              />
            </div>
          </div>
          <div className='col-lg-4 col-12  product-details-rating'>
            <h6>Give Your Ratings Here</h6>
            <UserRatings
              classNameRatings='user-ratings'
              onClick={handleRatingChange}
            />
          </div>
          <CartButton
            className='review-form-submit-btn'
            label='submit'
            onClick={handleSubmit}
          />
        </div>
      </div>
      <div className='mt-10'>
        <UserReviews reviews={reviews} />
      </div>
    </>
  );
}

export function UserReviews({ reviews }) {
  return (
    <>
      <div className='user-reviews'>
        <h6 className='mb-6 mt-3'>User Reviews:</h6>
        {reviews.map((review, index) => (
          <div
            key={index}
            className=' reviews-bg'
          >
            <p>FullName: {review.fullName}</p>
            <p>Email: {review.email}</p>
            <p>Comment: {review.comment}</p>
            <p>Rating: {review.rating} Star</p> {/* Display the rating */}
          </div>
        ))}
      </div>
    </>
  );
}
