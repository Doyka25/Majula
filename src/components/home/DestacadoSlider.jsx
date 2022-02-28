import React from "react";
import Slider from "infinite-react-carousel";
import slider1 from "../../assets/slider/slider1.PNG";
import slider2 from "../../assets/slider/slider2.PNG";
import slider3 from "../../assets/slider/slider3.PNG";
import slider4 from "../../assets/slider/slider4.PNG";

const DestacadoSlider = () => {
  return (
    <article className="slider">
      <h1 className="sliderTitle">Lo + Top</h1>

      <Slider className="sldierContent">
        <div className="sldierContent-Item">
          <img className="sliderImg" src={slider1} alt="" />
        </div>
        <div className="sldierContent-Item">
          <img className="sliderImg" src={slider2} alt="" />
        </div>
        <div className="sldierContent-Item">
          <img className="sliderImg" src={slider3} alt="" />
        </div>
        <div className="sldierContent-Item">
          <img className="sliderImg" src={slider4} alt="" />
        </div>
      </Slider>
    </article>
  );
};

export default DestacadoSlider;
