"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/Cart.css"

function Cart({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    setTotalPrice(total)
  }, [cart])

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <Link to="/" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image || "/placeholder.svg"} alt={item.name} />
            </div>
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p className="cart-item-price">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-total">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default Cart
