import React, {useState, useEffect} from "react";
import Axios from "axios";
import "../scss/main.scss"
import { Button, Container, Form } from "react-bootstrap";
import { Link, useParams, useNavigate  } from "react-router-dom";

const ActivateAccount = () => {

    const { uid, token } = useParams();

    const history = useNavigate ();

    const activeClick = (e) => {
        Axios.post('https://sergeyitaly.pythonanywhere.com/auth/users/activation/', { uid: uid, token: token})
            .then(() => {history.push('/login')})};
    useEffect(() => {activeClick();}, [])
    return (
        <Container fluid style={{backgroundColor: "#110B09"}} className="py-5 my-5">
            <div className="d-flex flex-column align-items-center">
                <h2 style={{fontWeight: "bold"}}>Account</h2>
                <p style={{textTransform: "none"}}>Your account is activated</p>
            </div>
            <Form className="d-flex flex-column align-items-center">
                    <Link to="/shop" >
                    <Button className="common-btn" style={{width: "350px", height: "50px", borderRadius: "30px", fontSize: "22px"}} type="submit">
                            Go for the shopping
                    </Button>
                    </Link>

             </Form>
        </Container>
            )
    }

    export default ActivateAccount;