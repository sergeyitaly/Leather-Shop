import React from "react";

import { Row, Card, Col , Container, CardImg} from "react-bootstrap";

import LeatherWallets from "../Img/CatalogImages/CatalogLeatherWallets.png"
import LeatherBags from "../Img/CatalogImages/CatalogLeatherBags.png"
import LeatherBelts from "../Img/CatalogImages/CatalogLeatherBelts.png"
import LeatherBracelets from "../Img/CatalogImages/CatalogLeatherBracelets.png"
import LeatherKedges from "../Img/CatalogImages/CatalogLeatherKedges.png"
import LeatherNotes from "../Img/CatalogImages/CatalogLeatherNotes.png"
import LeatherPhoneCases from "../Img/CatalogImages/CatalogLeatherPhoneCases.png"
import LeatherWatchStraps from "../Img/CatalogImages/CatalogLeatherWatchStraps.png"
import LeatherAccessories from "../Img/CatalogImages/CatalogLeatherAccessories.png"

import { Link } from "react-router-dom";

function CatalogPlates () {

    return (

        <Container fluid>
            <Container className="pb-5 w-100">
               <Row xs={1} md={2} xl={3}> 
                    <Col className="g-5">
                        <Link to={`/shop/wallets`}>
                            <Card className="overflow-hidden card-item" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                                <CardImg className="d-block w-100" variant="center" src={LeatherWallets}/>
                                <Card.ImgOverlay>
                                    <Card.Title className="text-center">Wallets</Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </Link>
                    </Col>
                    <Col className="g-5">
                      <Link to={`/shop/bags`}>
                          <Card className="overflow-hidden card-item" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                              <CardImg className="d-block w-100" variant="center" src={LeatherBags}/>
                              <Card.ImgOverlay>
                                  <Card.Title className="text-center">Bags</Card.Title>
                              </Card.ImgOverlay>
                          </Card>
                      </Link>
                    </Col>
                    <Col className="g-5">
                      <Link to={`/shop/belts`}>
                          <Card className="overflow-hidden card-item" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                              <CardImg className="d-block w-100" variant="center" src={LeatherBelts}/>
                              <Card.ImgOverlay>
                                  <Card.Title className="text-center">Belts</Card.Title>
                              </Card.ImgOverlay>
                          </Card>
                      </Link>
                    </Col>
                    <Col className="g-5">
                      <Link to={`/shop/key kedges`}>
                          <Card className="overflow-hidden card-item" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                              <CardImg className="d-block w-100" variant="center" src={LeatherKedges}/>
                              <Card.ImgOverlay>
                                  <Card.Title className="text-center">Key Kedges</Card.Title>
                              </Card.ImgOverlay>
                          </Card>
                      </Link>
                    </Col>
                    <Col className="g-5">
                      <Link to={`/shop/watch straps`}>
                          <Card className="overflow-hidden card-item" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                              <CardImg className="d-block w-100" variant="center" src={LeatherWatchStraps}/>
                              <Card.ImgOverlay>
                                  <Card.Title className="text-center">Watch Straps</Card.Title>
                              </Card.ImgOverlay>
                          </Card>
                      </Link>
                    </Col>
                    <Col className="g-5">
                      <Link to={`/shop/phone cases`}>
                          <Card className="overflow-hidden card-item" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                              <CardImg className="d-block w-100" variant="center" src={LeatherPhoneCases}/>
                              <Card.ImgOverlay>
                                  <Card.Title className="text-center">Phone Cases</Card.Title>
                              </Card.ImgOverlay>
                          </Card>
                      </Link>
                    </Col>
                    <Col className="g-5">
                      <Link to={`/shop/bracelets`}>
                          <Card className="overflow-hidden card-item" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                              <CardImg className="d-block w-100" variant="center" src={LeatherBracelets}/>
                              <Card.ImgOverlay>
                                  <Card.Title className="text-center">Leather Bracelets</Card.Title>
                              </Card.ImgOverlay>
                          </Card>
                      </Link>
                    </Col>
                    <Col className="g-5">
                      <Link to={`/shop/fields notes covers`}>
                          <Card className="overflow-hidden card-item" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                              <CardImg className="d-block w-100" variant="center" src={LeatherNotes}/>
                              <Card.ImgOverlay>
                                  <Card.Title className="text-center">Leather Field Notes</Card.Title>
                              </Card.ImgOverlay>
                          </Card>
                      </Link>
                    </Col>
                    <Col className="g-5">
                      <Link to={`/shop/accessories`}>
                          <Card className="overflow-hidden card-item" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                              <CardImg className="d-block w-100" variant="center" src={LeatherAccessories}/>
                              <Card.ImgOverlay>
                                  <Card.Title className="text-center">Accessories</Card.Title>
                              </Card.ImgOverlay>
                          </Card>
                      </Link>
                    </Col>
                  </Row>
              </Container>
          </Container>

    )

}

export default CatalogPlates;