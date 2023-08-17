import React from "react";
import { WhyChooseUsData } from "../../Data/DummyApi";
import "./AboutUs.css";
import { TitleDesign,TitleAndSubTitle } from "../../Components/SharedComponents";
import { KeyboardDoubleArrowRightIcon } from "../../Components/SharedIcons";

//
export default function WhyChooseUs() {
  const mainTitle = "What makes us different";
  const subTitle = "The liber tempor cum soluta nobis eleifend option congue doming quod mazim.";
  const title = "Why Choose Us";
  return (
    <>
      <div className=' section-padding mt-4  text-center'>
        <div className='content'>
          <div className='title-design'>
            <TitleDesign title={title} />
          </div>
          <TitleAndSubTitle
            className=''
            title={mainTitle}
            subTitle={subTitle}
          />
        </div>
        <div className=' mt-5 grid  gap-4 lg:grid-cols-4 md:grid-cols-2'>
          {WhyChooseUsData.map((data) => (
            <div
              className='text-center mb-4 '
              key={data.id}
            >
              <div className='m-auto max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50'>
                <img
                  src={data.img}
                  alt=''
                  className='object-contain object-center w-full m-auto h-32 w-32 dark:bg-gray-500'
                />
                <div className='mt-6 mb-2'>
                  <h2 className='text-xl font-semibold tracking-wide'>{data.title}</h2>
                </div>
                <p className='text-gray-800 dark:text-gray-800'>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='col-12 help-center'>
          <p>
            The liber tempor cum soluta nobis eleifend option congue doming quod mazim.{" "}
            <span>
              {" "}
              Help Center <KeyboardDoubleArrowRightIcon className='icon-size' />
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
