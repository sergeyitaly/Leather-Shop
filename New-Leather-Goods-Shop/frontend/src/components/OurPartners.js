import React from "react";
import { Row, Col, Container } from"react-bootstrap";

import CraftLore from "../Img/PartnersImages/Craft&Lore.svg";
import GoForthGoods from "../Img/PartnersImages/GoForthGoods.svg";
import BuffaloJackson from "../Img/PartnersImages/BuffaloJackson.svg";
import Orox from "../Img/PartnersImages/Orox.svg"
import OdinLeatherGoods from "../Img/PartnersImages/OdinLeatherGoods.svg"


function OurPartners () {

    return (
        <Container style={{padding: "40px"}} className="py-5">
            <h2 style={{textAlign: "center"}} className="pb-4">Our Partners</h2>
            <Row xs={1} md={3} xxl={5} style={{alignItems: "center"}} className="partners-container">
                <Col className="text-center py-3">
                    <a href="https://craftandlore.com">
                        <img className="partner-img" src={CraftLore} alt="Craft and Lore"/>
                    </a> 
                </Col>
                <Col className="text-center py-3">
                    <a href="https://www.goforthgoods.com">
                        <img className="partner-img" src={GoForthGoods} alt="GoForthGoods"/>
                    </a>
                </Col>
                <Col className="text-center py-3">
                    <a href="https://buffalojackson.com">
                        <img className="partner-img" src={BuffaloJackson} alt="BuffaloJacksone"/>
                    </a>
                </Col>
                <Col className="text-center py-3 partners">
                    <a href="https://www.oroxleather.com">
                        <img className="partner-img" src={Orox} alt="Orox"/>
                    </a>
                </Col>
                <Col className="text-center py-3 partners">
                    <a href="https://odinleathergoods.com">
                        <img className="partner-img" src={OdinLeatherGoods} alt="OdinLeatherGoods"/>
                    </a>
                </Col>
            </Row>
        </Container>
    )

}

export default OurPartners;