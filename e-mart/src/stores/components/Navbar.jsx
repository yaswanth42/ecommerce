import React from 'react'

const Navbar = () => {
  return (
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
  )
}

export default Navbar
