import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ChevronRightIcon } from "../../SharedIcons";
import { BannerContents } from "../../../Data/DummyApi";
import "./TopOffers.css";
//

const TopOffers = () => {
  return (
    <>
      <section className='banner-area mt-3'>
        <div className='container-fluid p-0 '>
          <div className='row p-0 m-0'>
            {BannerContents.map((content) => (
              <div
                className='col-lg-3 col-6 pl-0 ml-0'
                key={content.id}
              >
                <div className='relative top-offers mb-2 rounded-lg'>
                  <div className='image-overlay'></div>
                  <img
                    className='rounded-lg '
                    src={content.img}
                    alt=''
                  />
                  <div className='absolute top-offers-content  tpbanner-content'>
                    <span className='tpbanner-sub-title'>{content.offers}</span>
                    <h6>{content.title}</h6>
                    <button className='shop-btn'>
                      {content.btn}
                      <ChevronRightIcon className='right-icon' />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export { TopOffers };
