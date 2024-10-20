import React from "react";
import '../hojas de estilos/slider.css'


function Slider() {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="wrapper-holder">
                    <div id="slider-img-1"></div>
                    <div id="slider-img-2"></div>
                    <div id="slider-img-3"></div>
                    <div id="slider-img-4"></div>
                </div>
            </div>
            {/* <div className="button-holder">
                <a href="#slider-img-1" className="button"></a>
                <a href="#slider-img-2" className="button"></a>
                <a href="#slider-img-3" className="button"></a>
                <a href="#slider-img-4" className="button"></a>
            </div> */}
        </div>
    );
}
export default Slider;