import './App.css'

import {  Routes, Route } from 'react-router-dom'

import Header from './Components/Header'

import Home from './Pages/Home'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
function App() {
const [cart,setcart]=useState([]);
const item={
  id:1,
  name:"Laptop",
  price:5000
};
const addToCart =(product)=>{
  console.log("App.js - Product added:", product);
  setcart([...cart,product]);
};
  return (
<div>


      <Header />
 <Routes>
  <Route path="/" element={<Navigate to="/signup" />} />
   <Route path="/signup" element={<SignUp />}/>
     <Route path="/login" element={<Login />}/>
    <Route path="/Home" element={
    <Home item={item} addToCart={addToCart} />
  } />

  <Route path="/men" element={<Men addToCart={addToCart} />} />
<Route path="/women" element={<Women addToCart={addToCart} />} />
<Route path="/cart" element={<Cart cart={cart} />} />
 

</Routes>

      </div>

  )
}

export default App