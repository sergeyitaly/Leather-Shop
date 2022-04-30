import React, {useState} from 'react';
import { Container, Dropdown, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "../scss/main.scss";

import Cards from "../components/Cards";
import ProductBanner from "../components/Banners";

function Catalog({products, categories}) {

    const {link} = useParams();
    const [dropdown, setDropdown] = useState(["FEATURED"]);
    const option = ["FEATURED", "NEW PRODUCTS", "PRICE, HIGH TO LOW", "PRICE, LOW TO HIGH"];

    let array = products.filter((obj) => obj.category === link)
    let bannerArr = categories.filter((obj) => obj.name === link);

    const arraySort = (array) => {
        if (dropdown === "PRICE, HIGH TO LOW") {
            array.sort( (a , b) => a.price - b.price)
        } else if (dropdown === "PRICE, LOW TO HIGH") {
            array.sort( (a , b) => b.price - a.price)
        } else if (dropdown === "NEW PRODUCTS") {
           array.sort((item) => item.brandimage === null ? 1 : -1)
        }
    }

    arraySort(array)

    console.log(array, bannerArr, dropdown);

    return (

        <>
            <Container fluid style={{padding: "0px"}}>
                {bannerArr.map((item) => (
                    <ProductBanner
                        key={item.slug}
                        bannerImg={item.photo}
                        bannerTitle={item.name}
                    />
                ))}
            </Container>
            <Container fluid style={{paddingTop: "30px"}}>
                <div className="d-flex justify-content-end px-1 px-sm-5">
                    <Dropdown>
                        <Dropdown.Toggle
                            style={{background: "none", color: "#828C76"}}
                            id="dropdown-autoclose-true">{dropdown}</Dropdown.Toggle>
                        <Dropdown.Menu style={{backgroundColor: "#2A1D18", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)"}}>
                            {option.map((item) => (
                                <Dropdown.Item style={{color: "#828C76"}} key={item} onClick={() => setDropdown(item)}>{item}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>

                    </Dropdown>
                </div>
                <hr className="px-5" style={{height: "2px", width: "100%", color: "#828C76"}} />
            </Container>
            <Container fluid className="px-1 px-sm-5 d-flex">
                <Container>
                    <Container className="py-5">
                        <Row xs={1} md={2} xl={3}  className="g-5">
                        {array.map((item) => (
                            <Link key={item.slug} to={`/shop/${link}/${item.slug}`}>
                                <Cards
                                    image={item.photo}
                                    colorProduct={item.color}
                                    brandImage ={item.brandimage}
                                    nameProduct={item.name}
                                    costProduct={item.price}
                                />

                            </Link>
                        ))}
                        </Row>
                    </Container>
                </Container>
            </Container>

        </>

    )
}

export default Catalog