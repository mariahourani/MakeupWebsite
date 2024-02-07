import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import products from "./Productsdb";
import Product from './Product';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import "../Styles/Products.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const ProductList = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />, 
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="shopTitle">
            <h1 className="text-center">Our products</h1>
          </div>
        </div>
      </div>

      <Slider {...settings} className="slider">
        {products.map((product, index) => (
          <div key={index} className="col-md-3">
            <Product data={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomPrevArrow = (props) => (
  <div className="custom-arrow custom-prev-arrow" onClick={props.onClick}>
    <BsArrowLeft size={30} /> {}
  </div>
);

const CustomNextArrow = (props) => (
  <div className="custom-arrow custom-next-arrow" onClick={props.onClick}>
    <BsArrowRight size={30} /> {}
  </div>
);
