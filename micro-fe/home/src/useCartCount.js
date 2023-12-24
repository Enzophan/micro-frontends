import React, { useEffect, useState } from 'react'
import { cart } from "cart/cart";

function useCartCount() {
    const [count, setCount] = useState(cart.cartItems.length);

    useEffect(() => {
        cart.subscribe(({ cartItems }) => setCount(cartItems.length))
    }, []);

    return count
}


export default useCartCount
