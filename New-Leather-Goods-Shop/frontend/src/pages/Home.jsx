import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Parallax from "../components/Parallax/Parallax"
import { Button, Container } from "react-bootstrap";
import "../scss/main.scss"

import LeatherWallet from "../Img/ParallaxImages/LeatherWallet.svg";
import MenLeatherBag from "../Img/ParallaxImages/banner_man_leather_bag.svg"

import QuickCatalogPlates from "../components/QuickCatalogPlates"
import Slider from "../components/Slider";
import CatalogProductPlates from "../components/CatalogProductPlates";
import Partners from "../components/OurPartners"

const Home = () => {
  return (
    
    <ParallaxProvider>
      <Parallax imgsrc={LeatherWallet} height="500px">
          <div style={{position: "absolute"}} className="content-style">
              <h1 className="text-center mb-5 overlay-title">BEST LEATHER GOODS FOR YOU</h1>
              <a href="shop"><Button className="btn btn-default common-btn "><span style={{fontSize: "24px"}}>Shop Now</span></Button></a>
          </div>
      </Parallax>
      <Container fluid className="banner-navbar">
          <div className="banner-style">
              <div className="img-container">
                  <img className="img-banner" src={LeatherWallet}/> 
              </div>
              <div className="overlay-container">
                <div className="txt-container">
                  <h1 className="text-center mb-3 mb-lg-5 overlay-title">BEST LEATHER GOODS FOR YOU</h1>
                  <a href="shop"><Button className="common-btn overlay-btn">Shop Now</Button></a>
                </div>
              </div>
          </div> 
      </Container>
      <QuickCatalogPlates/>
      <Slider/>
      <Container fluid style={{backgroundColor: "#110B09"}}>
        <h1 className="d-flex text-center justify-content-center catalog-title pt-5">Catalog Products</h1>
        <CatalogProductPlates/>
      </Container>
      <Parallax imgsrc={MenLeatherBag} height="600px">
          <div style={{position: "absolute", background: "none"}} className="content-style">
            <div className="background-shadow">
              <h1 className="text-center mb-5 px-1 parallax-title" >FOR THE LOVE OF SIMPLE UNASSUMING THINGS</h1>
              <a href="shop"><Button className="common-btn">Shop Now</Button></a>
            </div>
          </div>
      </Parallax>
      <Container fluid className="banner-navbar">
          <div className="banner-style">
              <div className="img-container">
                  <img className="img-banner" src={MenLeatherBag}/> 
              </div>
              <div className="overlay-container">
                <div className="txt-container">
                  <h1 className="text-center mb-3 mb-lg-5 px-1 overlay-title">FOR THE LOVE OF SIMPLE UNASSUMING THINGS</h1>
                  <a href="shop"><Button className="common-btn overlay-btn">Shop Now</Button></a>
                </div>
              </div>
          </div> 
      </Container>
      <Partners/>
    </ParallaxProvider>

  );
}
  
export default Home;