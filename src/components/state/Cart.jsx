import React, { useState } from "react";
import "./Cart.css";
import { products } from "../../data/dataset"; // Assuming dataset.jsx contains the product data

function Cart() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const handleDelete = (id) => {
        const updatedProducts = cart.filter((item) => item.id !== id);
        setCart(updatedProducts);
    };

    const handleDeleteAll = () => {
        setCart([]);
    };

    return (
        <div className="cart-container">
            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} (${product.price}){" "}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
            <h2>Products in Your Cart: {cart.length}</h2>
            {cart.length === 0 ? (
                <p>Cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, idx) => (
                        <li key={idx}>
                            {item.name} (${item.price}){" "}
                            <button onClick={() => handleDelete(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={handleDeleteAll}>Delete All</button>
        </div>
    );
}

export default Cart;
