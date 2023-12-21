
import React from 'react';

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";


// function Header({ app }) {
//     return (
//         <div className='p-5 bg-blue-500 text-white text-3xl font-bold'>
//             Header World || {app.name}
//         </div>
//     )
// }

function Header() {
    return (
        <div className='p-5 bg-blue-500 text-white text-3xl font-bold'>
            <div className="flex">
                <div className="flex-grow">
                    Header World
                </div>
                <div className="flex-end relative">
                    <MiniCart />
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default Header