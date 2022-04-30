import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ConstructCards ({colorProduct, name, price, id, onAddToCart, }) {

    return (

        <div className="px-3">
            <h5>{colorProduct}</h5>
            <h2 style={{color: "white"}} className="py-2">{name}</h2>
            <p style={{color: "white", fontSize: "30px"}}>$ {price}</p>
            <Button style={{borderRadius: "50px", height: "50px"}} onClick={() => onAddToCart(id)} className="my-4 common-btn product-btn">Add to Cart</Button>
            <p className="py-4">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Minima quae placeat sit
                eveniet nemo harum illo, quasi molestias error 
                tempora doloribus distinctio nam. 
            </p>
        </div>

    )

}

export default ConstructCards; 