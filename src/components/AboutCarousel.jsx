// CarouselComponent.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image12 from '../assets/award1.jpg';
import image23 from '../assets/image23.jpg';
import image9 from '../assets/image9.jpg';

const AboutCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    <div className="h-[55vh] md:h-[35vh] lg:h-[65vh] ">
      <Slider {...settings}>
        <div>
        <img src={image12} alt="Image 1" className="w-96 h-96 object-cover" />
        </div>
        <div>
          <img src={image23} alt="Image 2" className="w-96 h-96 object-cover" />
        </div>
        <div>
          <img src={image9} alt="Image 3" className="w-96 h-96 object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default AboutCarousel;
