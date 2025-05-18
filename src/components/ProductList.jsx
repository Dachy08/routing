"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { products } from "../data/products"
import "../styles/ProductList.css"

function ProductList() {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    setProductList(products)
  }, [])

  return (
    <div className="product-list-container">
      <h1>PRODUCT LIST</h1>
      <div className="product-grid">
        {productList.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <div className="product-rating">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductList
