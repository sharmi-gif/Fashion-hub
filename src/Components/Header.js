import React from 'react'
import {Link }  from "react-router-dom"

const Header = () => {

  return (

    <div>

      <h1>Fashion Hub</h1>

      <ul>

        <li>
          <Link to="/login" className="login-btn">
            Login
          </Link>
        </li>

        <li>
          <Link to="/" className="Home-btn">
            Home
          </Link>
        </li>

        <li>
          <Link to="/men" className="Men-btn">
            Men
          </Link>
        </li>

        <li>
          <Link to="/women" className="Women-btn">
            Women
          </Link>
        </li>

        <li>
          <Link to="/cart" className="Cart-btn">
            Add to cart
          </Link>
        </li>

 <li>
          <Link to="/signup" className="SignUp-btn">
         SignUp
          </Link>
        </li>
      </ul>

    </div>

  )
}

export default Header