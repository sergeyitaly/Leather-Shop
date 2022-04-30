import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutBanner from "../Img/Banners/AboutBanner.png"

export default function About() {
    return (
        <>
          <Container fluid style={{padding: "0px"}}>
            <div className="banner-style">
                <div className="img-container">
                    <img className="img-banner" src={AboutBanner}/> 
                </div>
                <div className="overlay-container">
                    <div className="txt-container">
                        <h1 className="txt-overlay">About</h1>
                    </div>
                </div>
            </div> 
          </Container>
          <Container className="py-5">
            <Row xs={1} lg={2} className="px-1 px-sm-5 d-flex">
              <Col className="py-sm-5">
                <h2 className="about-title">
                  What is Lorem Ipsum?
                </h2>
                <p className="about-text" style={{textTransform: "none"}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Col>
              <Col className="py-sm-5">
                <h2 className="about-title">
                  Why do we use it?
                </h2>
                <p className="about-text" style={{textTransform: "none"}}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                  Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                  Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
              </Col>
            </Row>
            <Row className="px-1 px-sm-5 d-flex">
              <Col>
                <h2 className="about-title">
                  Where does it come from?
                </h2>
                <p className="about-text" style={{textTransform: "none"}}>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
              </Col>
            </Row>
          </Container>
        </>
    );
  }