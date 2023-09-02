import React from "react";
import HeroSlider, { Slide } from 'hero-slider';
import foundation from '../Assets/foundation.jpg';
import lipstick from '../Assets/lipstick.jpg';

const NewItems = ({ prop }) => {
  const slideshowImages = [
    lipstick,
    foundation,
  ];

  return (
    <HeroSlider interval={1000}>
      {slideshowImages.map((image, index) => (
        <Slide
       
          key={index}
          background={{
            backgroundImage: `url(${image})`, // Set the image path
          }}
        />
      ))}
     
    </HeroSlider>
  );
}

export default NewItems;
