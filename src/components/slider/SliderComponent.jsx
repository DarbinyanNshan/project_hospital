import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import img1 from "../../assets/images/slider/slider_img_1.jpg";
import img2 from "../../assets/images/slider/slider_img_2.jpg";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const SliderComponent = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true, 
    afterChange: (current) => {
      setCurrentSlide(current);
      setTimeout(() => setIsAnimating(true), 50);
    }
  };
  const images = [img1, img2];

  const onService = () => {
    navigate('/services');
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
const onAbout = () => {
  navigate('/about');
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
};
  return (
    <div className="slider-container">
      <div className={`overlay ${currentSlide === 0 && isAnimating ? 'animate' : ''}`}>
        <h3>{t('slide1.company')} <span>{t('slide1.title')}</span></h3>
        <button className="btn_slider1" onClick={onAbout}>{t('about')}</button>
        <button className="btn_slider2" onClick={onService}>{t('services')}</button>
      </div>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
