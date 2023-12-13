import React, { useEffect, useState } from 'react';
import { jwt, login } from './cart';



function CartContent() {
    const [token, setToken] = useState("");



    return (
        <div>JWT: {token}</div>
    )
}

export default CartContent