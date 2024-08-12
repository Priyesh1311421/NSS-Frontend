import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import anujsir from '../assets/anujsir.jpg'
import award1 from '../assets/award1.jpg'
import award2 from '../assets/award2.jpg'
import award3 from '../assets/award3.jpg'
import award4 from '../assets/award4.jpg'

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className='w-1/4 h-auto'>
          <img src={anujsir} alt="Achievement 1" className="w-[26rem] h-[30rem] object-cover" />
        </div>
        <div className='w-1/4 h-auto'>
          <img src={award4} alt="Achievement 3" className="w-[26rem] h-[30rem] object-contain" />
        </div>
        <div className='w-1/4 h-auto'>
          <img src={award1} alt="Achievement 4" className="w-[26rem] h-[30rem] object-cover" />
        </div>
        <div className='w-1/4 h-auto'>
          <img src={award2} alt="Achievement 5" className="w-[26rem] h-[30rem] object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
