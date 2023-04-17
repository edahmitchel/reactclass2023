import React, { useState } from 'react'
import NavBar from './NavBar'
import ProductCard from './ProductCard'

const MainApp = () => {

    const [cartCount, setCartCount] = useState(0)
    return (
        <div>
            <h1>
                products
            </h1>
            <NavBar cartCount={cartCount} />
            <ProductCard cartCount={cartCount} setCartCount={setCartCount} />

        </div>
    )
}

export default MainApp
