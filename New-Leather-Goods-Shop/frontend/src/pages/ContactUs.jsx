import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "../scss/main.scss"

function ContactUs() {

    return (

        <Container fluid style={{backgroundColor: "#110B09"}} className="py-5 my-5">
            <Container className="d-flex justify-content-center py-5 contact-container">
                <div className="px-1 px-sm-5 mb-4 contact-inf">
                    <h2 style={{fontWeight: "bold"}} className="pb-3">Questions?</h2>
                    <p style={{textTransform: "none"}} className="pb-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <p><b>Phone: </b><a style={{textDecoration: "none", color: "white"}} href="tel:+1(800)999-9999">1(800)999-9999</a></p>
                    <p><b>Email: </b><a style={{textDecoration: "none", textTransform: "none", color: "white"}} href="mailto:support@leathergoodsshop.com">support@leathergoodsshop.com</a></p>
                </div>
                <div className="contact-form">
                    <Form className="d-flex flex-column align-items-center">
                        <Form.Group className="mb-3 form-style contact-input" controlId="formBasicText1">
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3 form-style contact-input" controlId="formBasicText2">
                            <Form.Control type="text" placeholder="Last name" />
                        </Form.Group>
                        <Form.Group className="mb-3 form-style contact-input" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3 form-style contact-input" controlId="exampleForm.ControlTextarea1">
                            <Form.Control style={{resize: "none", height: "150px"}} as="textarea" placeholder="Message" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check style={{textTransform: "none", fontWeight: "bold"}} type="checkbox" label="Subscribe to our newsletter" />
                        </Form.Group>
                        <Button className="common-btn contact-btn" type="submit">
                            Create Account
                        </Button>
                    </Form>
                </div>
            </Container>
            
        </Container>
    )

}

export default ContactUs