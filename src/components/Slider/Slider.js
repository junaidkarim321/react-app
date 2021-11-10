import React from 'react'
import { Carousel, Button } from 'react-bootstrap';
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
function Slider() {

    return (
        <div id ="Slider">
            <Carousel>
                <Carousel.Item>
                    <div className="img">
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption className="content">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button>LEARN MORE</button>
                        <button>LEARN MORE</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div className="img">
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption  className="content">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button>LEARN MORE</button>
                        <button>LEARN MORE</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div className="img">
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption  className="content">
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <button>LEARN MORE</button>
                        <button>LEARN MORE</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
