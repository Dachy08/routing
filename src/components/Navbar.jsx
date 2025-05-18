import { Link } from "react-router-dom"
import "../styles/Navbar.css"

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Furniture Store
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/cart" className="navbar-link cart-link">
            Cart
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
