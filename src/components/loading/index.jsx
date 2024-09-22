import React from 'react';
import './style.css';
import gif from "../../assets/gif/page-loader.gif";

const LoadingComponent = () => {
  const loadingText = "Loading...";
  
  return (
    <div className='loading'>
      <div>
        <img src={gif} alt="" />
      </div>
      <div>
        <p>
          {loadingText.split('').map((char, index) => (
            <span key={index} className="loading-letter" style={{animationDelay: `${index * 0.1}s`}}>
              {char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default LoadingComponent;
