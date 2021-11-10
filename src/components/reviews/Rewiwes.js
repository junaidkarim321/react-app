import React from 'react'
import { Carousel, } from 'react-bootstrap';
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
function Rewiwes() {

    return (
        <div id ="Rewiwes">
            <Carousel>
                <Carousel.Item>
                    <div className="mg">
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption className="conten">
                        <div className="firstsiv">
                            <img src={img1} ></img>
                            <h2>mane developer </h2>
                            <p>sajdh</p>
                        </div>
                        <div className=" divcontainer">
                            <div className="patages">
                                <p>lorem sdadkjahdjahdjksah as dkhajskhdkjsahdkjahdsa<br></br>as dkhajskhdkjsahdkjahdsa sjdsahdjksahdkjsahd</p>
                            </div>
                            <div className="patages">
                                <p>lorem sdadkjahdjahdjksah as dkhajskhdkjsahdkjahdsa  <br></br>as dkhajskhdkjsahdkjahdsa sjdsahdjksahdkjsahd</p>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="mg">
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption className="conten">
                        <div className="firstsiv">
                            <img src={img1} ></img>
                            <h2>mane developer </h2>
                            <p>sajdh</p>
                        </div>
                        <div className=" divcontainer">
                            <div className="patages">
                                <p>lorem sdadkjahdjahdjksah as dkhajskhdkjsahdkjahdsa<br></br>as dkhajskhdkjsahdkjahdsa sjdsahdjksahdkjsahd</p>
                            </div>
                            <div className="patages">
                                <p>lorem sdadkjahdjahdjksah as dkhajskhdkjsahdkjahdsa<br></br>as dkhajskhdkjsahdkjahdsa sjdsahdjksahdkjsahd</p>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="mg">
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption className="conten">
                        <div className="firstsiv">
                            <img src={img1} ></img>
                            <h2>mane developer </h2>
                            <p>sajdh</p>
                        </div>
                        <div className=" divcontainer">
                            <div className="patages">
                                <p>lorem sdadkjahdjahdjksah as dkhajskhdkjsahdkjahdsa<br></br>as dkhajskhdkjsahdkjahdsa sjdsahdjksahdkjsahd</p>
                            </div>
                            <div className="patages">
                                <p>lorem sdadkjahdjahdjksah as dkhajskhdkjsahdkjahdsa<br></br>as dkhajskhdkjsahdkjahdsa sjdsahdjksahdkjsahd</p>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Rewiwes