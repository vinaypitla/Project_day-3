import React from "react";
import "../Css/CarSliding.css"; 


const CarSlider = () => {
    return (
        <div className="slider-container">
            <video src="/videos/car-video.mp4" autoPlay loop muted className="slider-video" />
        </div>
    );
};

export default CarSlider;
