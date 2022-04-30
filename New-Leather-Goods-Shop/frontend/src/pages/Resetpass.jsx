import React, {useState, useEffect} from "react";
import Axios from "axios";
import "../scss/main.scss"
import { Button, Container, Form } from "react-bootstrap";
import { Link, useParams, useNavigate  } from "react-router-dom";

const Resetpass = () => {

    const [formEmail, setFormEmail] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()

    const Passwordreset = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch('https://sergeyitaly.pythonanywhere.com/auth/users/reset_password/',
            {method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
                email: formEmail})})
   .then(response => {
       if (response.ok) {
                window.location.replace('https://sergeyitaly.pythonanywhere.com/shop')
                return response.json()
            }
            else {throw Error(`Maybe here: code ${response.status}`)}
        })
    .catch(error => {console.log(error)
                    setError('Ошибка, подробности в консоли')})
    .finally(setLoading(false))}


    return (
        <Container fluid style={{backgroundColor: "#110B09"}} className="my-5 contact-container">
            <Container className="d-flex justify-content-center py-5 flex-column contact-form">
                <div className="d-flex flex-column align-items-center">
                    <h2 className="text-center" style={{fontWeight: "bold"}}>Reset password</h2>
                    <p className="text-center" style={{textTransform: "none"}}>Please enter your email:</p>
                </div>
                <Form className="d-flex flex-column align-items-center">
                <Form.Group className="mb-3 form-style contact-input" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Email"  value={formEmail} onChange={e => setFormEmail(e.target.value)} />
                </Form.Group>
                <Button className="common-btn contact-btn" onClick={Passwordreset}>
                    Reset
                </Button>
                </Form>
            </Container>
        </Container>
            )
    }

    export default Resetpass;