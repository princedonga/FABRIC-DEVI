import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <span className="discount-badge">-{product.discount}%</span>
        <img
          src={product.image01}
          alt={product.title}
          className="product-image"
        />
        <div className="overlay-icons">
          <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
          <button className="compare-btn"><i className="fa-solid fa-eye"></i></button>
        </div>
        <div>
          <button className="add-to-cart-btn">Add to Cart</button>
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
    </div>
  );
}

export default ProductCard;
