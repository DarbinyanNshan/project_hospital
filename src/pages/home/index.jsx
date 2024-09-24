import React, { useEffect } from "react";
import "./style.css";
import { useTranslation } from 'react-i18next';

import { FaHandHoldingMedical } from "react-icons/fa";
import { FaLaptopMedical, FaUserDoctor } from "react-icons/fa6";
import SliderComponent from "../../components/slider/SliderComponent";


import img_1 from "../../assets/images/home/image1.jpg";
import img_2 from "../../assets/images/home/image2.jpg";
import img_3 from "../../assets/images/home/image3.jpg";

import { useNavigate } from "react-router-dom";
import { ServiceContent } from "../../components/servicesContent";



export const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const sections = [
    {
      icon: <FaHandHoldingMedical />,
      title: t('qualitySafety'),
      description1: t('description1'),
    },
    {
      icon: <FaLaptopMedical />,
      title: t('leadingTechnology'),
      description2: t('description2'),
    },
    {
      icon: <FaUserDoctor />,
      title: t('expertsExperience'),
      description3: t('description3'),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
        const elements = document.querySelectorAll('.homeOne, .image-container, .image-content');
        elements.forEach(e => {
            const rect = e.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                if (e.classList.contains('homeOne')) {
                    e.classList.add('in_view1');
                }else if (e.classList.contains('image-container')) {
                  e.classList.add('in_view2');
              } else if (e.classList.contains('image-content')) {
                e.classList.add('in_view3');
            } 
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
}, []);



  const onClick = () => {
    navigate('/services');
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div className="slider-wrapper">
        <SliderComponent />
        <div className="home">
          <div className="homeOne">
            {sections.map((section, index) => (
              <div key={index}>
                <div className="homeOne_icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section[`description${index + 1}`]}</p> 
              </div>
            ))}
          </div>

          <div className="image-section">
            <div className="image-container">
              <img src={img_1} alt="Doctor " className="img-1" />
              <img src={img_2} alt="Doctor" className="img-2" />
              <img src={img_3} alt="Doctor" className="img-3" />
            </div>
            <div className="image-content">
              <h2>{t('home_content_subtitle')}</h2>
              <h1>{t('home_content_title')}</h1>
              <svg width="150" height="150" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="m293.26 184.14h-82.877l-12.692-76.138c-.546-3.287-3.396-5.701-6.718-5.701-.034 0-.061 0-.089 0-3.369.027-6.199 2.523-6.677 5.845l-12.507 87.602-14.874-148.69c-.355-3.43-3.205-6.056-6.643-6.138-.048 0-.096 0-.143 0-3.39 0-6.274 2.489-6.752 5.852l-19.621 137.368h-9.405l-12.221-42.782c-.866-3.028-3.812-5.149-6.8-4.944-3.13.109-5.777 2.332-6.431 5.395l-8.941 42.332h-73.049c-3.771 0-6.82 3.049-6.82 6.82 0 3.778 3.049 6.82 6.82 6.82h78.566c3.219 0 6.002-2.251 6.67-5.408l4.406-20.856 6.09 21.313c.839 2.939 3.526 4.951 6.568 4.951h20.46c3.396 0 6.274-2.489 6.752-5.845l12.508-87.596 14.874 148.683c.355 3.437 3.205 6.056 6.643 6.138h.143c3.39 0 6.274-2.489 6.752-5.845l14.227-99.599 6.397 38.362c.546 3.287 3.396 5.702 6.725 5.702h88.66c3.771 0 6.82-3.049 6.82-6.82-.001-3.772-3.05-6.821-6.821-6.821z" fill="currentColor" />
              </svg>
              <p>
                {t('home_content_text_one')}
              </p>
              <p>
                {t('home_content_text_two')}
              </p>
              <button onClick={onClick}>{t('home_content_button')}</button>
            </div>
          </div>
          <ServiceContent />
        </div>
      </div>
    </>
  );
};
