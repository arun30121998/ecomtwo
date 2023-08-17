import React, { useState, useEffect } from "react";
import "./DealsOfTheDay.css";
import imgadd from "../../../images/banner/banner-4.png";
// import imgtwo from '../images/add/3.png'

const DealsBannerAdd = ({ imageUrl, subtitle, title, description }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className='col-lg-12 text-left'>
      <div className='relative add-banner mb-2'>
        <img
          className='w-full object-cover rounded-md'
          src={imageUrl}
          alt=''
        />
       
        {/* <div className="deals-ofthe-day-img">
            <img   className=' h-60 w-60 object-cover rounded-md'
              src={imgtwo}
              alt=''  /> */}
        <div className='addbanner-content'>
          <span>{subtitle}</span>
          <h1 className=' mb-3 mt-3'>{title}</h1>
          <p className='w-2/3'>{description}</p>
          <div className='offers'>
            <p>
              Offer Ends On <span>{time.toLocaleString()}</span>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

const TodayDealsBanner = () => {
  const bannerTwoData = {
    imageUrl: imgadd,
    subtitle: "Deals Of The Day",
    title: "Indian Sweets Fresh Farm Product",
    description: "The liber tempor cum soluta nobis eleifend option  congue doming quod mazim placerat facere possum assam going through.",
  };

  return (
    <div>
      <DealsBannerAdd {...bannerTwoData} />
    </div>
  );
};

export  {TodayDealsBanner};
