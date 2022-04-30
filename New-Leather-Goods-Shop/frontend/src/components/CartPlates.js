import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import {MdOutlineClose} from "react-icons/md"
import {HiOutlinePlus, HiOutlineMinus} from "react-icons/hi"

function CartPlates ({array = []}) {

    const [items, setArray] = useState(array)

    let deleteObject = () => {
        console.log(items)
    }

    let onAddToCart = (obj) => {
        setArray([...items, obj])
        console.log(items)
    }



    return (

        <>

        {array.map((item) => (
            <Container key={item.id} style={{backgroundColor: ""}} className="d-flex justify-content-center py-3 my-4">
                <div style={{width: "50%", height: "100%"}} className="px-3">
                    <img className="w-100 rounded" src={item.photo}/>
                </div>
                <div style={{width: "50%"}} >
                    <div className="d-flex justify-content-between">
                        <div>
                            <p style={{fontSize: "12px"}} className="mb-1">Saddle Tan</p>
                            <p style={{fontSize: "15px", color: "white"}} className="mb-1">{item.name}</p>
                        </div>
                        <Button onClick={deleteObject} style={{background: "none", width: "30px", height: "30px", padding: "0"}}>
                            <MdOutlineClose style={{width: "30px", height: "30px"}} className="mb-3"/>
                        </Button>
                    </div>
                    <p style={{fontSize: "15px"}} className="mb-1">Quantity:</p>
                    <div className="d-flex justify-content-center align-items-center my-2" style={{width: "70px", height: "25px", border: "1px solid white", borderRadius: "30px"}}>
                        <Button style={{background: "none", width: "30px", height: "20px", padding: "0"}} className="d-flex justify-content-center align-items-center">
                            <HiOutlineMinus style={{width: "15px"}}/>
                        </Button>
                        <span style={{fontSize: "15px", color: "white"}}>1</span>
                        <Button style={{background: "none", width: "30px", height: "20px", padding: "0"}} className="d-flex justify-content-center align-items-center">
                            <HiOutlinePlus style={{width: "15px"}}/>
                        </Button>
                    </div>
                    <p style={{color: "white", fontSize: "15px"}} className="mb-0">$ {item.price}</p>
                </div>
            </Container>
        ))}
        
        </>
    
    )

}

export default CartPlates;