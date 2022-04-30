import React from "react";
import {Container} from "react-bootstrap";
import "../scss/main.scss"

function Purchase() {

    return (

        <Container fluid style={{backgroundColor: "#110B09"}} className="py-5 my-5">
            <Container className="d-flex justify-content-center py-5 contact-container">
                <div className="px-1 px-sm-5 mb-4 contact-inf">
                    <h2 style={{fontWeight: "bold"}} className="pb-3 text-center">Thank You.</h2>
                    <p style={{textTransform: "none"}} className="pb-3 text-center">Your order was completed succesfully.</p>
                    <p><b>Phone: </b><a style={{textDecoration: "none", color: "white"}} href="tel:+1(800)999-9999">1(800)999-9999</a></p>
                    <p><b>Email: </b><a style={{textDecoration: "none", textTransform: "none", color: "white"}} href="mailto:support@leathergoodsshop.com">support@leathergoodsshop.com</a></p>
                </div>
            </Container>
            
        </Container>
    )

}

export default Purchase