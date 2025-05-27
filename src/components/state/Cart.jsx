import React, { useState } from 'react';
import './Cart.css';

function Cart() {
    const [cart, setCart] = useState([]);
    const products = [
        { id: 1, name: 'Product A', price: 10 },
        { id: 2, name: 'Product B', price: 20 },
        { id: 3, name: 'Product C', price: 30 },
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (id) => {
        // Remove only one instance of the product with the given id
        const index = cart.findIndex(item => item.id === id);
        if (index !== -1) {
            setCart(cart.filter((item, i) => i !== index));
        }
    };

    return (
        <div className="cart-container">
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} (${product.price}){' '}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, idx) => (
                        <li key={idx}>
                            {item.name} (${item.price}){' '}
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;