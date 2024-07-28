import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.1,
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
          <img src="https://images.stockcake.com/public/8/d/d/8dd4e5f1-98c8-4aaf-ab01-8344e04186a1_large/serene-meditation-moment-stockcake.jpg" alt="Achievement 1" className="w-auto h-auto" />
        </div>
        <div className='w-1/4 h-auto'>
          <img src="https://images.stockcake.com/public/8/d/d/8dd4e5f1-98c8-4aaf-ab01-8344e04186a1_large/serene-meditation-moment-stockcake.jpg" alt="Achievement 2" className="w-auto h-auto" />
        </div>
        <div className='w-1/4 h-auto'>
          <img src="https://images.stockcake.com/public/e/1/9/e19a6ea2-db14-4a22-86ce-0c1303798f6f_large/serene-sunset-canoe-stockcake.jpg" alt="Achievement 3" className="w-auto h-auto" />
        </div>
        <div className='w-1/4 h-auto'>
          <img src="https://images.stockcake.com/public/e/1/9/e19a6ea2-db14-4a22-86ce-0c1303798f6f_large/serene-sunset-canoe-stockcake.jpg" alt="Achievement 4" className="w-auto h-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
