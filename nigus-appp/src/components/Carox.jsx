import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carox.css'

function Carox() {
  return (
    <div className='cxx1'>
    <div className='cp1'><h5 className='cp1'>OUR CLIENTS</h5></div>
    <div className="carousel-container">

      
      <Carousel fade controls={false} indicators={false} className="custom-carousel2">
  <Carousel.Item interval={100}>
    <img
      className="imx1"
      src="https://teamddm.com/wp-content/uploads/2022/12/1613664168_ddm_blog_HATcollective1.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={100}>
    <img
      className="imx1"
      src="https://www.405group.com/wp-content/uploads/2015/07/405logo-pagesNEW2BIG-39.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={100}>
    <img
      className="imx1"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAVAYekjlt5U5zqHX9WlkM6k4ieGI45RvdAQ&usqp=CAU"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    </div>
    </div>
  );
}

export default Carox;
