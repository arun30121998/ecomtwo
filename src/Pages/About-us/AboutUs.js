import React from "react";
import "./AboutUs.css";
import { CheckCircleIcon } from "../../Components/SharedIcons";
import { AboutUsData } from "../../Data/DummyApi";
import WhyChooseUs from "./WhyChooseUs";
import { Footer,NavbarTop,Breadcrumbs,LargeScreenNavbar } from "../../Components/SharedComponents";

export default function AboutUs() {
  const name = "About Us";
  return (
    <>
      <NavbarTop />
      <LargeScreenNavbar />
      <Breadcrumbs name={name} />
      <AboutSection />
      <WhyChooseUs />
      <Footer />
    </>
  );
}

export function AboutSection() {
  return (
    <section className='flex section-padding common-mt  dark:bg-gray-800'>
      {AboutUsData.map((data) => (
        <div
          className='justify-center '
          key={data.id}
        >
          <div className='flex flex-wrap   '>
            <div className='about-img relative w-full  mb-0 md:w-1/2 lg:mb-0'>
              <img
                src={data.img}
                alt=''
                className='relative z-40 object-cover  w-full rounded-md'
              />
            </div>
            <div className='about-content w-full px-4 mb-0 md:w-1/2 lg:mb-0'>
              <h5 className='mb-0'>About Us</h5>
              <h2 className=' mb-2 mt-1  text-2xl font-bold text-black-700 dark:text-gray-300'>{data.heading}</h2>
              <p className='mb-4 text-base leading-7 text-gray-800 dark:text-gray-800'>{data.description}</p>
              <ul className='mb-10 text-left pl-0'>
                {Object.values(data.points).map((point, index) => (
                  <li
                    className='flex  mb-4 text-base text-gray-800 dark:text-gray-300'
                    key={index}
                  >
                    <CheckCircleIcon
                      style={{ color: "#96ae00" }}
                      className='mr-3'
                    />

                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
