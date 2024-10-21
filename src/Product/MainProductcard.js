import React from 'react'

function MainProductcard({ product }) {
    return (
        <div><div className="product-card-main">
            <div className="product-image-container">
                <span className="discount-badge">-{product.discount}%</span>
                <img
                    src={product.image01}
                    alt={product.title}
                    className="product-image"
                />
                <div className="overlay-icons">
                    <button className="wishlist-btn "><i className="fa-regular fa-heart"></i></button>
                    <button className="compare-btn d-lg-block d-none"><i className="fa-solid fa-eye"></i></button>
                </div>
                <div>
                    <button className="add-to-cart-btn-main d-lg-block d-none">Add to Cart</button>
                </div>
            </div>
            <div className="product-details">
                <h2 className="product-title">{product.title}</h2>
                <div className="rating">
                    <span className="stars"><i className="fa-solid fa-star"></i></span>
                    <span className="stars"><i className="fa-solid fa-star"></i></span>
                    <span className="stars"><i className="fa-solid fa-star"></i></span>
                    <span className="stars"><i className="fa-solid fa-star"></i></span>
                    <span className="stars"><i className="fa-solid fa-star"></i></span>
                    <span className="reviews">(5)</span>
                </div>
                <div className="price">
                    <span className="current-price">Rs. {product.price}</span>
                    <span className="original-price">Rs. {product.price + product.discount * 10}</span>
                </div>
            </div>
        </div></div>
    )
}

export default MainProductcard