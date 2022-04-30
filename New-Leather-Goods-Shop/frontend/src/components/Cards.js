import React from "react";
import { Card, Col, CardImg} from "react-bootstrap";

function ConstructCards (props) {

    return (

        <Col>
            <Card className="overflow-hidden" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                <CardImg className="d-block" variant="center" src={props.image} alt="card"/>
                <Card.ImgOverlay style={{textAlign: "center"}}>
                    <div className="d-flex flex-column justify-content-between align-items-center card-overlay-container" style={{height: "100%"}}>
                        <div className="d-flex tag-container w-100">
                            <img className="tag-img" src={props.brandImage}/>
                        </div>
                        <div className="card-body-container">
                            <div className="card_subtitle">{props.colorProduct}</div>
                            <div className="py-1 py-sm-3 card_title">{props.nameProduct}</div>
                            <div className="card_text">$ {props.costProduct}</div> 
                        </div>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </Col>
        
    )

}

export default ConstructCards;