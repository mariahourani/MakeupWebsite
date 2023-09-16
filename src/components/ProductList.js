import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import products from "./Productsdb";
import Product from './Product';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'; // Import the arrow icons
import "../Styles/Products.css";

export const ProductList = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:  <CustomPrevArrow/>, // Custom previous arrow component
    nextArrow: <CustomNextArrow />, // Custom next arrow component
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay interval to 2 seconds (2000 milliseconds)
  };
  

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Our products</h1>
      </div>

      <Slider {...settings} className="slider">
        {products.map((product, index) => (
          <div key={index}>
            <Product data={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Define custom previous arrow component
const CustomPrevArrow = (props) => (
  <div className="custom-arrow custom-prev-arrow" onClick={props.onClick}>
    <BsArrowLeft size={30} /> {/* Use the BsArrowLeft icon */}
  </div>
);

// Define custom next arrow component
const CustomNextArrow = (props) => (
  <div className="custom-arrow custom-next-arrow" onClick={props.onClick}>
    <BsArrowRight size={30} /> {/* Use the BsArrowRight icon */}
  </div>
);
