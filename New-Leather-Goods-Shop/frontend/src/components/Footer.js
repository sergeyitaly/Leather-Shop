import React from "react";
import { Container, Row, Form, FormControl, Button, Col} from "react-bootstrap";
import "../scss/footer.scss"

import FooterLogo from "../Img/NavbarImages/Logo.svg"
import {FaInstagram, FaTwitter, FaFacebookSquare, FaPinterest, FaYoutube} from "react-icons/fa"

function Footer () {

    return (
        <Container fluid style={{backgroundColor: "#110B09"}}>
            <Container className="">
                <Row sm={1} md={2} lg={3} className="flex-column flex-md-row justify-content-between pt-5 pb-3">
                    <Col className="footer-logo">
                        <img className="mb-3 logo-img-footer" src={FooterLogo} alt="logo"/>
                        <div className="soc-network-container mt-5">
                            <h4>Follow us:</h4>
                            <div className="pt-3">
                                <ul className="d-flex list-unstyled p-2">
                                    <li className="px-sm-2 px-1">
                                        <a href="https://www.instagram.com"><FaInstagram className="contact-img" alt="instagram"/></a>
                                    </li>
                                    <li className="px-2">
                                        <a href="https://twitter.com"><FaTwitter className="contact-img" alt="twitter"/></a>
                                    </li>
                                    <li className="px-2">
                                        <a href="https://www.facebook.com"><FaFacebookSquare className="contact-img" alt="facebook"/></a>
                                    </li>
                                    <li className="px-2">
                                        <a href="https://www.pinterest.com"><FaPinterest className="contact-img" alt="pinterest"/></a>
                                    </li>
                                    <li className="px-2">
                                        <a href="https://www.youtube.com"><FaYoutube className="contact-img" alt="youtube"/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>    
                    </Col>
                    <Col className="footer-navigation">
                        <ul>
                            <li><a href="/" className="navigation-txt footer-link">CUSTOMER SERVICE</a></li>
                            <li><a href="/" className="navigation-txt footer-link">SHIPPING</a></li>
                            <li><a href="/" className="navigation-txt footer-link">RETURN, ECHANGE, ISSUES</a></li>
                            <li><a href="/" className="navigation-txt footer-link">WHOLESALE &amp; BULK ORDERS</a></li>
                            <li><a href="/" className="navigation-txt footer-link">CONTACT</a></li>
                            <li><a href="/" className="navigation-txt footer-link">JOURNAL</a></li>
                            <li><a href="/" className="navigation-txt footer-link">Home</a></li>
                            <li><a href="shop" className="navigation-txt footer-link">SHOP</a></li>
                        </ul>
                    </Col>
                    <Col className="footer-coupon">
                        <div className="coupon-container">
                            <h3 style={{justifyContent: "flex-start"}}>JOIN OUR MAILING LIST</h3>
                            <p style={{width: "90%"}} className="text-coupon mt-3">Always contains coupons. Privacy is protected.</p>
                        </div>
                        <Form className="d-flex mt-4 input-block input-style">
                            <FormControl
                                className="email-input"
                                type="email"
                                placeholder="YOUR@EMAIL.COM"
                                />
                            <Button className="subscribe-btn"><span>Subscribe</span></Button>
                        </Form>
                    </Col>
                    <div className="copyright-container">
                        <p className="copyright-txt mt-2 text-center">Copyright 2021 © Leather Shop. All rights reserved.</p>
                    </div>
                </Row>
            </Container>
        </Container>
        
    )
}

export default Footer;