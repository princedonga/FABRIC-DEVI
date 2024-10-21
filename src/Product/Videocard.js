import React from 'react';
// import './Videocard.css'; // Import the CSS for the styles

function Videocard({ video, title, price, discount }) {
  return (
    <div className="card-video">
      <div className="discount-tag">{discount}% OFF</div>
      <div className="video-container">
        <video width="100%" height="auto" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img src="https://cdn.shopify.com/s/files/1/0712/5014/9624/files/Pink-Banarasi-Saree-For-Women-With-Blouse_100x.jpg?v=1725763227" alt=''></img>
      </div>
      <div className="card-content">
        <h4 className="product-name">{title}</h4>
        <div className="price-section">
          <span className="new-price">Rs. {price}</span>
          <span className="old-price">Rs. {price + 500}</span> {/* Just an example for old price */}
        </div>
      </div>
    </div>
  );
}

export default Videocard;
