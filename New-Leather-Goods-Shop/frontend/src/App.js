import React, { useEffect, useState } from "react";
import axios from "axios";

import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/NavBar";
import Footer from "./components/Footer"

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop"
import ContactUs from "./pages/ContactUs"
import LookBook from "./pages/LookBook"

import CatalogPage from "./pages/CatalogPage"
import PageProduct from "./pages/PageProduct"

import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ActivateAccount from "./pages/ActivateAccount";
import Account from "./pages/Account";
import Resetpass from "./pages/Resetpass";
import Reset from "./pages/Reset";
import NewProducts from "./pages/NewProducts";
import Purchased from "./pages/Purhased";

const App = () => {

  const [items, setItems] = useState([])
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchProducts = async () => {
    const result = await axios.get('https://sergeyitaly.pythonanywhere.com/products/');
    console.log(result.data)
    setProducts(result.data)}

  useEffect(() => {fetchProducts()}, [])

  const fetchCategories = async () => {
    const result = await axios.get('https://sergeyitaly.pythonanywhere.com/categories/');
    console.log(result.data);
    setCategories(result.data)};
  useEffect(() => {fetchCategories()}, []);

  const onAddToCart = (id) => {

    const index = items.findIndex((index) => index.id === id)
    const arr = products.find((item) => item.id === id)
    const array = items.find((item) => item.id === arr.id)

    if (array) {

      if(array.stock > 0) {

        setItems([...items.slice(0, index), {...arr, count: array.count + 1, stock: array.stock - 1, totalPrice: array.totalPrice + Number(array.price) }, ...items.slice(index + 1, items.length)])

      } else {
        return array
      }
    } else {
      setItems((prev) => [...prev, {...arr, count: 1, stock: arr.stock - 1, totalPrice: Number(arr.price)}])
    }

  }

  const onRemoveFromCart = (id) => {

    const index = items.findIndex((index) => index.id === id)
    const arr = products.find((item) => item.id === id)
    const array = items.find((item) => item.id === arr.id)

    if (array.count > 1) {
        setItems([...items.slice(0, index), {...arr, count: array.count - 1, stock: array.stock + 1, totalPrice: array.totalPrice - Number(array.price)} , ...items.slice(index + 1, items.length)])

      } else {
        setItems((prev) => prev.filter((item) => item.id !== id))
    }

  }

  const deleteFromCart = (id) => {

    setItems((prev) => prev.filter((item) => item.id !== id))

  }

    return (

      <div className="wrapper">
        <NavBar productItem={items} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} deleteFromCart={deleteFromCart}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />}/>
          <Route path="/about" element={<About />} />
          <Route path="/lookbook" element={<LookBook />}/>
          <Route path="/contact-us" element={<ContactUs />}/>
          <Route path="shop/:link" element={<CatalogPage products={products} categories={categories}/>}/>
          <Route path="shop/:link/:id" element={<PageProduct products={products} productItem={items} onAddToCart={onAddToCart}/>}/>
          <Route path="shop/purchased" element={<Purchased/>}/>
          <Route path="shop/newproducts" element={<NewProducts />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/login/create-account" element={<CreateAccount />}/>
          <Route path="/activate/:uid/:token" element={<ActivateAccount />}/>
          <Route path="/login/account" element={<Account />}/>
          <Route path="/login/account/reset" element={<Resetpass />}/>
          <Route path="/password-reset/:uid/:token" element={<Reset />}/>
        </Routes>
        <Footer/>
      </div>

    )
}

export default App;