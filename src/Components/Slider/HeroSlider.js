import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './Slider.css'
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper";
import { SliderContent } from "../../Data/DummyApi";
import "swiper/css/effect-fade";
import { CartButton } from "../SharedComponents";
//

export  function HeroSlider() {
  return (
    <>
      <Swiper 
        effect={"fade"}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, EffectFade]}
        className='mySwiper'
      >
        {SliderContent.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div className='slider-img'>
              <img
                className='object-cover'
                src={slider.img}
                alt=''
              />
            </div>
            <div className='slider-content'>
              <h5 className='uppercase primary-color pb-2'>{slider.addline}</h5>
              <h1 className='capitalize  pb-3'>{slider.title}</h1>
              <p className='pb-2'>{slider.subtitle}</p>
              <div className='slider-btn '>

                <CartButton className="shop-button-text" label={slider.btn} />
               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
