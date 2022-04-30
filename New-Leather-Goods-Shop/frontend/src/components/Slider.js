import React from "react";

import { Carousel, Container, Button } from "react-bootstrap";

import MensLeatherBag from "../Img/SlidesImages/MensLeatherBagSlide.png"
import LeatherWalletSlide from "../Img/SlidesImages/LeatherWalletSlide.png"
import LeatherBag from "../Img/SlidesImages/LeatherBagSlide.png"

function Slider () {

    return (

        <Container className="my-5 slider-container">
            <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-slide"
                    src={MensLeatherBag}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="slide-title">Lorem Ipsum is simply dummy</h3>
                    <p className="slide-text">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <a href="shop"><Button className="common-btn">Shop Now</Button></a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-slide"
                    src={LeatherBag}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className="slide-title">Lorem Ipsum is simply dummy</h3>
                    <p className="slide-text">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <a href="shop"><Button className="common-btn">Shop Now</Button></a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-slide"
                    src={LeatherWalletSlide}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className="slide-title">Lorem Ipsum is simply dummy</h3>
                    <p className="slide-text">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <a href="shop"><Button className="common-btn">Shop Now</Button></a>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Slider