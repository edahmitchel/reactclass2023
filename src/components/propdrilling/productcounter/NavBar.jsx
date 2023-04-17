import React from 'react'
import CartCounter from './CartCounter'

const NavBar = ({ cartCount }) => {
    return (
        <div style={{ border: "1px solid red" }}>NavBar
            <CartCounter cartCount={cartCount} />
        </div>

    )
}

export default NavBar