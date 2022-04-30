import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Dropdown, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"
import "../scss/main.scss"

import Cards from "../components/Cards"
import ProductBanner from "../components/Banners"

function NewProducts() {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const result = await axios.get('https://sergeyitaly.pythonanywhere.com/products/');
        console.log(result.data)
        setProducts(result.data)}

    useEffect(() => {fetchProducts();}, [])

    const [categories, setCategories] = useState([])

    const fetchCategories = async () => {
        const result = await axios.get('https://sergeyitaly.pythonanywhere.com/categories/');
        console.log(result.data)
        setCategories(result.data)}

    useEffect(() => {fetchCategories();}, [])

    const {link} = useParams();
    let array = products.filter((obj) => obj.brandimage !== null);
    let bannerArr = categories.filter((obj) => obj.slug === "");
    console.log(array, bannerArr)

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
                <div className="d-flex justify-content-end">
                    <Dropdown>
                        <Dropdown.Toggle style={{background: "none", color: "#828C76"}} id="dropdown-autoclose-true">
                            Featured
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{backgroundColor: "#2A1D18", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)"}}>
                            <Dropdown.Item style={{color: "#828C76"}}>BEST SELLING</Dropdown.Item>
                            <Dropdown.Item style={{color: "#828C76"}}>PRICE, HIGH TO LOW</Dropdown.Item>
                            <Dropdown.Item style={{color: "#828C76"}}>PRICE, LOW TO HIGH</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <hr className="px-5" style={{height: "2px", width: "100%", color: "#828C76"}} />
            </Container>
            <Container fluid className="px-2 px-sm-5 d-flex">
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

export default NewProducts