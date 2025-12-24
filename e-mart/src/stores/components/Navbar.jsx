import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="navsection">
        <div className="title">
            <h2>E-mart</h2>
        </div>
        <div className="search">
            <input type="text" placeholder="Search for products, brands and more"/>
        </div>
        <div className="user">
            <div className="user-detail">
                signIN/signUP
            </div>
            <div className="cart">
                cart
            </div>
        </div>
    </div>
    <div className="subMenu">
        <ul>
            <Link to="/mobile">
                <li>Mobiles</li>
            </Link>
            <Link to="/computer">
                <li>Computers</li>
            </Link>
            <Link to="/ac">
                <li>ACs</li>
            </Link>
            <Link to="/watch">
                <li>Watches</li>
            </Link>

            <Link to="/men">
                <li>Men Fashion</li>
            </Link>
            <Link to="/women">
                <li>Women Dressing</li>
            </Link>
            <Link to="/books">
                <li>Books</li>
            </Link>
            <li>Furniture</li>
            
            <li>Speakers</li>
            <li>Tvs</li>
            <li>Kitchen</li>
            <li>Fridge</li>
        </ul>
    </div>
    </>
  )
}

export default Navbar
