import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import lipstick from '../Assets/lipstick.jpg';
import foundation from '../Assets/foundation.jpg';
import loosepowder from '../Assets/loosepowder.jpg';
import '../Styles/Products.css';

const NewItems = ({ prop }) => {
  const slideshowImages = [lipstick, foundation, loosepowder];

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slideshowImages.map((image, index) => (
          <div key={index} className='newitemimage-wrapper'>
            <img className='newitemimage custom-image-class' src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomPrevArrow = (props) => (
  <div className="custom-arrow custom-prev-arrow" onClick={props.onClick}>
    <BsArrowLeft size={30} />
  </div>
);

const CustomNextArrow = (props) => (
  <div className="custom-arrow custom-next-arrow" onClick={props.onClick}>
    <BsArrowRight size={30} />
  </div>
);

export default NewItems;
