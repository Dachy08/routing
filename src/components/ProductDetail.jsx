"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { products } from "../data/products"
import "../styles/ProductDetail.css"

function ProductDetail({ addToCart }) {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [similarProducts, setSimilarProducts] = useState([])

  useEffect(() => {
    // Find the current product
    const currentProduct = products.find((p) => p.id === id)
    setProduct(currentProduct)

    // Find similar products (excluding current product)
    if (currentProduct) {
      const similar = products.filter((p) => p.category === currentProduct.category && p.id !== id).slice(0, 4)
      setSimilarProducts(similar)
    }
  }, [id])

  if (!product) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div className="product-detail-left">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-detail-image" />
        </div>
        <div className="product-detail-right">
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-price">${product.price}</p>
          <div className="product-detail-rating">
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)}
          </div>
          <p className="product-detail-description">{product.description}</p>
          <div className="product-detail-actions">
            <button className="btn-checkout">Check Out</button>
            <button className="btn-add-to-cart" onClick={() => addToCart(product)}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <div className="similar-products">
        <h2>Similar products</h2>
        <div className="similar-products-grid">
          {similarProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="similar-product-card">
              <div className="similar-product-image-container">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="similar-product-image" />
              </div>
              <div className="similar-product-info">
                <h3 className="similar-product-name">{product.name}</h3>
                <p className="similar-product-price">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
