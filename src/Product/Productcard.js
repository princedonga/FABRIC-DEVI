import React from 'react';
// import './ProductCard.css'; // Add this if you are using external CSS

function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <span className="discount-badge">-46%</span>
        <img
          src="https://navdhaaga.com/cdn/shop/files/Banarasi-Kanjivaram-Silk-Saree-Dark-Green-Online-at-Navdhaga.jpg?v=1725717481&width=360" // Replace with actual image URL
          alt="Mahroon Banarasi Silk Blend Saree"
          className="product-image"
        />
        <div className="overlay-icons">
          <button className="wishlist-btn"><i className="fa-regular fa-heart "></i></button>
          <button className="compare-btn"><i className="fa-solid fa-eye"></i></button>
        </div>
        <div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
      <div className="product-details">
        <h2 className="product-title">
          Mahroon Banarasi Silk Blend Saree With Zari Weaving
        </h2>
        <div className="rating">
          <span className="stars"><i class="fa-solid fa-star"></i></span>
          <span className="stars"><i class="fa-solid fa-star"></i></span>
          <span className="stars"><i class="fa-solid fa-star"></i></span>
          <span className="stars"><i class="fa-solid fa-star"></i></span>
          <span className="stars"><i class="fa-solid fa-star"></i></span>

          <span className="reviews">(5)</span>
        </div>
        <div className="price">
          <span className="current-price">Rs. 1,499.00</span>
          <span className="original-price">Rs. 2,800.00</span>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;
