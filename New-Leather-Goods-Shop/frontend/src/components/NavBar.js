import React, {useEffect, useState} from 'react';
import {Navbar, Nav, Container, Offcanvas, Form, Button} from "react-bootstrap";
import axios from "axios";
import Logo from "../Img/NavbarImages/Logo.svg";
import {MdOutlineArrowBackIos, MdOutlineClose} from "react-icons/md";
import {HiOutlinePlus, HiOutlineMinus} from "react-icons/hi";
import ContactUs from '../pages/ContactUs';


 function Navibar({productItem, onRemoveFromCart, onAddToCart, deleteFromCart}) {

    const [show, setShow] = useState(false);
    const [products, setProducts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchProducts = async () => {
        const result = await axios.get('http://localhost:8000/products/');
        console.log(result.data)
        setProducts(result.data)}
    useEffect(() => {fetchProducts()}, []);

    const totalPrice = productItem.reduce((sum, obj) => Number(obj.totalPrice) + sum, 0)
    const quantityItems = productItem.reduce((sum, obj) => obj.count + sum, 0)

    function truncated(num, decimalPlaces) {    
        let numPowerConverter = Math.pow(10, decimalPlaces); 
        return ~~(num * numPowerConverter) / numPowerConverter;
    }

    const onClickCheckout = () => {
        if(productItem.length > 0) {
            window.location.assign('../purchased')
        } else if(productItem.length === 0) {
            alert("There are no items in your cart")
        }
    }

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = products.filter((value) => {
          return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
    
        if (searchWord === "") {
          setFilteredData([]);
        } else {
          setFilteredData(newFilter);
        }
      };

    return (
        <Navbar expand="xxl" variant="dark">
            <Container className="">
                <Nav>
                    <Navbar.Brand>
                        <Nav.Link href="/"><img className="logo-img" src={Logo} alt="Logo"/></Nav.Link>
                    </Navbar.Brand>
                </Nav>
                <Navbar.Toggle style={{background: "none", boxShadow: "none"}} aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/" className="hover-txt ps-xl-4">Home</Nav.Link>
                        <Nav.Link href="/shop" className="hover-txt ps-xl-4">Shop</Nav.Link>
                        <Nav.Link href="/about" className="hover-txt ps-xl-4">About</Nav.Link>
                        <Nav.Link href="/lookbook" className="hover-txt ps-xl-4">LookBook</Nav.Link>
                        <Nav.Link href="/contact-us" className="hover-txt ps-xl-4">Contact Us</Nav.Link>
                    </Nav>
                    <Nav className="mr-2 ps-xl-2 flex-sm-row align-items-start align-items-md-center">
                        <div className="d-flex flex-column position-relative">
                            <Form className="d-flex search-block"> 
                                <input onChange={handleFilter} value={wordEntered} className="input-txt" placeholder="Search..."/>
                                <Nav.Link style={{position: "absolute", padding: "10px"}} className="search-btn" alt="search">
                                    <svg width="27" height="20" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.7915 6.92211C16.7915 9.97385 13.5044 12.8442 8.89575 12.8442C4.28708 12.8442 1 9.97385 1 6.92211C1 3.87037 4.28708 1 8.89575 1C13.5044 1 16.7915 3.87037 16.7915 6.92211Z" stroke="#828C76" strokeWidth="2"/>
                                        <rect width="8.02152" height="2.44181" transform="matrix(0.799482 0.600691 -0.778631 0.627482 15.587 10.6493)" fill="#828C76"/>
                                    </svg>
                                </Nav.Link>                            
                            </Form>  

                            {filteredData.length !== 0 && (
                                    <ul className="data-container">
                                        <hr className="px-5" style={{height: "1px", width: "100%", color: "#828C76", opacity: "initial"}} />
                                        {filteredData.slice(0, 15).map((item) => {
                                            return (
                                                <li key={item.id}>                               
                                                    <a className="data-item"  href={`/shop/${item.category}/${item.slug}`}>
                                                        <Container style={{backgroundColor: ""}} className="d-flex flex-row justify-content-center py-2 my-2">
                                                            <div style={{width: "50%", height: "100%"}} className="px-3">
                                                                <img className="w-100 rounded" src={item.photo} alt="Product"/>
                                                            </div>
                                                            <div style={{width: "50%"}} >
                                                                <div className="d-flex justify-content-between">
                                                                    <div>
                                                                        <p style={{fontSize: "12px", color: "#828C76"}} className="mb-1">{item.color}</p>
                                                                        <p style={{color: "white"}} className="mb-1 text-in-searching">{item.name}</p>
                                                                    </div>
                                                                </div>
                                                                <p style={{color: "white", fontSize: "15px"}} className="mb-0">$ {item.price}</p>
                                                            </div>
                                                        </Container>
                                                    </a>
                                                    <hr className="px-5" style={{height: "1px", width: "100%", color: "#828C76", opacity: "initial"}} />
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )} 
                                
                        </div>
                        
                        <Nav.Link className="ps-sm-3 ps-1" href="/login">
                            <svg width="27" height="20" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg" alt="profile">
                                <path d="M1.58032 16.9999C0.821129 16.9999 0.278098 16.2659 0.500165 15.54L1.66922 11.718C2.19471 10.0001 3.78052 8.82684 5.57703 8.82684H10.0536H14.0774C15.7622 8.82684 17.2743 9.86083 17.8855 11.4309L19.4761 15.5166C19.7539 16.2302 19.2276 16.9999 18.4618 16.9999C17.9358 16.9999 17.4851 16.6239 17.3909 16.1064L16.9286 13.5672L16.7881 13.0162C16.4839 11.8228 15.6239 10.8487 14.4774 10.3989C14.0321 10.2242 13.5581 10.1345 13.0798 10.1345H10.0536H6.95419C6.52341 10.1345 6.09558 10.2056 5.68794 10.3449C4.30287 10.8182 3.2973 12.0243 3.08093 13.4719L2.69747 16.0373C2.61478 16.5905 2.13967 16.9999 1.58032 16.9999Z" fill="#828C76"/>
                                <path d="M14.554 3.92307C14.554 5.70741 12.659 7.34615 10.054 7.34615C7.44891 7.34615 5.55396 5.70741 5.55396 3.92307C5.55396 2.13874 7.44891 0.5 10.054 0.5C12.659 0.5 14.554 2.13874 14.554 3.92307Z" stroke="#828C76"/>
                            </svg>
                        </Nav.Link>
                        <Nav.Link className="ps-sm-3 ps-1 pt-xxl-2 pt-1" onClick={handleShow}>
                            <svg width="40" height="30" viewBox="0 0 34 17" fill="none" xmlns="http://www.w3.org/2000/svg" alt="cart">
                                <path d="M18.7841 15.5862C18.7841 16.3298 18.0915 16.9327 17.2372 16.9327C16.3829 16.9327 15.6903 16.3298 15.6903 15.5862C15.6903 14.8425 16.3829 14.2396 17.2372 14.2396C18.0915 14.2396 18.7841 14.8425 18.7841 15.5862Z" fill="#828C76"/>
                                <path d="M0.63822 2.50551C0.408036 2.50551 0.221436 2.3189 0.221436 2.08872C0.221436 1.85854 0.408036 1.67194 0.63822 1.67194H1.82162C2.53857 1.67194 3.16802 2.14881 3.36208 2.83899L5.67068 11.0497C5.91323 11.9123 6.69994 12.5083 7.59602 12.5083H16.3719C17.2819 12.5083 18.0771 11.894 18.307 11.0136L19.0849 8.03399C19.2646 7.34572 18.7453 6.67335 18.0339 6.67335H4.07439C3.89333 6.67335 3.73298 6.55645 3.67759 6.38407C3.59114 6.11504 3.79181 5.83978 4.07439 5.83978H18.2851C19.5861 5.83978 20.5409 7.06246 20.2254 8.32472L19.3501 11.8268C19.1276 12.7172 18.3276 13.3419 17.4098 13.3419H6.92487C6.01381 13.3419 5.21788 12.7262 4.98901 11.8443L2.822 3.495C2.67077 2.91233 2.14488 2.50551 1.54291 2.50551H0.63822Z" fill="#828C76"/>
                                <ellipse cx="7.95581" cy="15.5862" rx="1.54688" ry="1.34653" fill="#828C76"/>
                            </svg>
                            <span style={{color: "#828C76", position: "relative", right: "10px"}}>{quantityItems}</span>
                        </Nav.Link>
                        <Offcanvas show={show} placement="end" onHide={handleClose} style={{backgroundColor: "#2A1D18"}}>
                            <Offcanvas.Header className="flex-column mt-3 p-0">
                                <div className="d-flex justify-content-start align-items-center mt-3">
                                    <Button style={{background: "none", padding: "0", marginRight: "10px"}} className="d-flex justify-content-center align-items-center" onClick={handleClose}>
                                        <MdOutlineArrowBackIos style={{width: "30px", height: "30px"}}/>
                                        <Offcanvas.Title style={{color: "white", fontSize: "25px"}}>Continue Shopping</Offcanvas.Title>
                                    </Button>
                                </div>
                                <hr className="px-5" style={{height: "2px", width: "100%", color: "#828C76", opacity: "initial"}} />
                                <h2 style={{color: "white"}} className="text-center my-4">MY PURCHASES</h2>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="p-0">

                                {productItem.map((item) => (
                                    <Container key={item.id} style={{backgroundColor: ""}} className="d-flex justify-content-center py-3 my-4">
                                        <div style={{width: "50%", height: "100%"}} className="px-3">
                                            <img className="w-100 rounded" src={item.photo} alt="Product"/>
                                        </div>
                                        <div style={{width: "50%"}} >
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <p style={{fontSize: "12px"}} className="mb-1">{item.color}</p>
                                                    <p style={{fontSize: "15px", color: "white"}} className="mb-1">{item.name}</p>
                                                </div>
                                                <Button onClick={() => deleteFromCart(item.id)} style={{background: "none", width: "30px", height: "30px", padding: "0"}}>
                                                    <MdOutlineClose style={{width: "30px", height: "30px"}} className="mb-3"/>
                                                </Button>
                                            </div>
                                            <p style={{fontSize: "15px"}} className="mb-1">Quantity:</p>
                                            <div className="d-flex justify-content-center align-items-center my-2" style={{width: "70px", height: "25px", border: "1px solid white", borderRadius: "30px"}}>
                                                <Button onClick={() => onRemoveFromCart(item.id)} style={{background: "none", width: "30px", height: "20px", padding: "0"}} className="d-flex justify-content-center align-items-center">
                                                    <HiOutlineMinus style={{width: "15px"}}/>
                                                </Button>
                                                <span style={{fontSize: "15px", color: "white"}}>{item.count}</span>
                                                <Button onClick={() => onAddToCart(item.id)} style={{background: "none", width: "30px", height: "20px", padding: "0"}} className="d-flex justify-content-center align-items-center">
                                                    <HiOutlinePlus style={{width: "15px"}}/>
                                                </Button>
                                            </div>
                                            <p style={{color: "white", fontSize: "15px"}} className="mb-0">$ {item.price}</p>
                                        </div>
                                    </Container>
                                ))}

                            </Offcanvas.Body>
                            <Container fluid className="mb-4">
                                <hr className="px-5" style={{height: "2px", width: "100%", color: "#828C76", opacity: "initial"}} />
                                <Container className="d-flex flex-column">
                                    <div className="d-flex justify-content-between py-3">
                                        <p style={{fontWeight: "bold"}}>Subtotal:</p>
                                        <p style={{color: "white"}}>$ {truncated(totalPrice, 2)}</p>
                                    </div>
                                    <Button onClick={onClickCheckout} className="common-btn" style={{width: "100%", height: "50px", borderRadius: "30px", fontSize: "22px"}}>
                                        Checkout
                                    </Button>
                                </Container>
                            </Container>
                        </Offcanvas>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navibar;