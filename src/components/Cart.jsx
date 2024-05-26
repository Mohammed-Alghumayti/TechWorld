import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Calculate total price when cartItems changes
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += item.price;
        });
        setTotal(totalPrice);
    }, [cartItems]);

    return (
        <div className="container alert alert-secondary">
            <h2 className='mb-4 fw-bold'>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li className='badge bg-danger col-4 mt-4' key={index} style={{ display: 'block', marginBottom: '10px', padding: '10px' }}>
                                <div>{item.title}</div>
                                <div>${item.price}</div>
                            </li>
                        ))}
                    </ul>
                    <p className='mb-3 mt-5 badge bg-warning text-dark fs-5'>Total: ${total.toFixed(2)}</p>
                </>
            )}
        </div>
    );
};

export default Cart;
