import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Sec.css'
function Sec() {
  return (
    <div className='mainx'>
        <div className='left'>
            <p>Revolutionizing Enterprise with Innovative Solutions</p>
            <p>Modernize the organization with innovative software solutions,<br></br> applications and integrations</p>
            <p>Integrate any business application with new or existing systems</p>
            <p>Transforming Your Business With Innovative Software</p>
        </div>
        <div className='right'>
            
            <div className="carousel-container">
            <Carousel fade controls={false} indicators={false} className="custom-carousel">
  <Carousel.Item interval={150}>
    <img
      className="d-block w-100 animated fadeIn"
      src="https://applover.com/wp-content/uploads/2022/09/Featured-image-%E2%80%93-Guide-to-developing-green-software-in-2022.svg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={150}>
    <img
      className="d-block w-100 animated fadeIn"
      src="https://blogs.microsoft.com/wp-content/uploads/prod/2021/05/5-25-image-Green-Software_Sc_3.png"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={150}>
    <img
      className="d-block w-100 animated fadeIn"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/24ed9392232693.5e45b4885aef5.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    </div>
        </div>

    </div>
  )
}

export default Sec