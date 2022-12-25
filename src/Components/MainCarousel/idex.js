import React from "react";
import Carousel from 'react-material-ui-carousel';
import './index.css';

function MainCarousel () {
 const colors = ['orange', 'limegreen', 'violet', 'deepskyblue'];
 return (
  <div className="carousel-wrap">
   <Carousel height={"445px"}>
    {
     colors.map(color => <div
      style={{ backgroundColor: color }}
      className="carousel-elem"></div>)
    }
   </Carousel>
  </div>
 );
}

export default MainCarousel;