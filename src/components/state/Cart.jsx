import React, { useState } from "react";
import { products as data } from "../../data/dataset";
import "./Cart.css";

export default function Cart() {
    const [products, setProducts] = useState(data);
    const [totalNoOfProducts, setTotalNoOfProducts] = useState(data.length);

    const handleDelete = (id) => {
        const updatedProducts = products.filter((x) => x.id !== id);
        setProducts(updatedProducts);
        setTotalNoOfProducts(updatedProducts.length);
    };

    const handleDeleteAll = () => {
        setProducts([]);
        setTotalNoOfProducts(0);
    };

    const handleReset = () => {
        setProducts(data);
        setTotalNoOfProducts(data.length);
    };

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h1 className="cart-title">Products in Cart: {totalNoOfProducts}</h1>
            </div>
            {products.length === 0 ? (
                <div className="cart-empty">No products in cart.</div>
            ) : (
                products.map((product) => (
                    <div key={product.id} className="cart-product">
                        <span className="cart-product-name">{product.name}</span>
                        <span className="cart-product-price">${product.price}</span>
                        <button className="cart-delete-btn" onClick={() => handleDelete(product.id)}>
                            Delete
                        </button>
                    </div>
                ))
            )}
            <div className="cart-actions">
                {products.length > 0 && (
                    <button className="cart-delete-all-btn" onClick={handleDeleteAll}>
                        Delete All
                    </button>
                )}
                {products.length !== data.length && (
                    <button className="cart-reset-btn" onClick={handleReset}>
                        Reset
                    </button>
                )}
            </div>
        </div>
    );
}
