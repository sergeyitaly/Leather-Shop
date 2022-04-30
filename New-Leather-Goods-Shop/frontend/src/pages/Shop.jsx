import React from "react";
import { Container } from "react-bootstrap";
import { ParallaxProvider } from "react-scroll-parallax";
import Parallax from "../components/Parallax/Parallax"
import "../scss/main.scss"

import ShopBanner from "../Img/Banners/ShopBanner.png"

import CatalogProductPlates from "../components/CatalogProductPlates";

const Shop = () => {

    return(

        <ParallaxProvider>
            <Parallax imgsrc={ShopBanner} height="500px">
            <div style={{position: "absolute"}} className="content-style">
                <h1 style={{width: "30%"}} className="text-center mb-5">Catalog Products</h1>
            </div>
            </Parallax>
            <Container fluid className="banner-navbar">
                <div className="banner-style">
                    <div className="img-container">
                        <img className="img-banner" src={ShopBanner}/> 
                    </div>
                    <div className="overlay-container">
                        <div className="txt-container">
                        <h1 className="text-center mb-3 mb-lg-5 overlay-title">Catalog Products</h1>
                        </div>
                    </div>
                </div> 
            </Container>
            <Container fluid style={{backgroundColor: "#110B09"}} className="py-3 mb-4">
                <CatalogProductPlates />
            </Container>
        </ParallaxProvider>

    )

}

export default Shop