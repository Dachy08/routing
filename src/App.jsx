"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import ProductDetail from "./components/ProductDetail"
import Cart from "./components/Cart"
import "./App.css"

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <Router>
      <div className="app">
        <Navbar cartCount={cart.length} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
