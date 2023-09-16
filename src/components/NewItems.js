import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'; // Import the arrow icons
import lipstick from '../Assets/lipstick.jpg';
import foundation from '../Assets/foundation.jpg';
import loosepowder from '../Assets/loosepowder.jpg';
import "../Styles/Products.css";


const NewItems = ({ prop }) => {
  const slideshowImages = [lipstick, foundation, loosepowder];

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1, // Show one image at a time for a slideshow effect
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />, // Custom previous arrow component
    nextArrow: <CustomNextArrow />, // Custom next arrow component
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay interval to 2 seconds (2000 milliseconds)
  };

  return (
    <Slider {...settings}>
      {slideshowImages.map((image, index) => (
        <div key={index} className='newitemimage-wrapper'>
          <img className='newitemimage' src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

const CustomPrevArrow = (props) => (
  <div className="custom-arrow custom-prev-arrow" onClick={props.onClick}>
    <BsArrowLeft size={30} /> {/* Use the BsArrowLeft icon */}
  </div>
);

const CustomNextArrow = (props) => (
  <div className="custom-arrow custom-next-arrow" onClick={props.onClick}>
    <BsArrowRight size={30} /> {/* Use the BsArrowRight icon */}
  </div>
);

export default NewItems;
