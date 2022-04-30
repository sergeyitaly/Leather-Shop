import React from 'react';
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PageProductsTitle from "../components/PageProductsTitle"
import ProductSlider from "../components/ProductSlider"

function Products({products, onAddToCart, productItem}) {

    const {id} = useParams();

    let array = products.filter((obj) => obj.slug === id);

    return (

        <Container fluid style={{backgroundColor: "#110B09"}} className="py-5 my-5">
            <Container className="d-flex flex-column flex-md-row justify-content-center py-5 product-container">
                <div className="px-0 px-md-3 mb-4 product-slider-container">
                    {array.map((obj)=>(
                        <ProductSlider
                            key={obj.id}
                            image={obj.photo}
                            image2={obj.photo2}
                            image3={obj.photo2}
                        />
                    ))}
                </div>
                <div className="px-0 px-md-3 product-inf-container">
                    {array.map((obj)=>(
                        <PageProductsTitle
                            key={obj.id}
                            id={obj.id}
                            colorProduct={obj.color}
                            name={obj.name}
                            price={obj.price}
                            photo={obj.photo}
                            stock={obj.stock}
                            count={obj.count}
                            productItem={productItem}
                            onAddToCart = {onAddToCart}
                        />
                    ))}
                </div>
                
            </Container>
        </Container>
    )
}

export default Products