import React, { useEffect, useState } from 'react';
import { jwt, login } from './cart';
import Login from './Login';
import MiniCart from './MiniCart';



function CartContent() {
    const [token, setToken] = useState("");

    useEffect(() => {
        return jwt.subscribe((val) => setToken(val ?? ""))
    }, [])

    return (
        <div>
            JWT: {token}
            <div>
                <Login />
                <MiniCart />
            </div>
        </div>
    )
}

export default CartContent