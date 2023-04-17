import React, { useRef, useState } from 'react'

const ProductCard = ({ cartCount, setCartCount }) => {
    const homeRef = useRef(null)
    // function currentState(state) {
    //     return state + 3

    // }
    const handleCartDec = () => {
        // setCartCount(cartCount - 1)
        setCartCount(current => {

            if (current === 0) return current
            else {

                return current - 1
            }
        })

    }
    const handleCartInc = () => {
        // setCartCount(cartCount - 1)
        setCartCount(current => current + 1)
        if (homeRef) {
            console.log(homeRef.current);
            homeRef.current.innerText = "hello"
        }

    }
    function handleInputChange(e) {
        setCartCount(Number(e.target.value))

    }
    return (
        <div>ProductCard
            <p ref={homeRef} >product one</p>
            <div>
                <button onClick={handleCartDec}>dec</button>
                <input type="number" value={cartCount} onChange={handleInputChange} />
                <button onClick={handleCartInc}>inc</button>
            </div>

        </div>
    )
}

export default ProductCard