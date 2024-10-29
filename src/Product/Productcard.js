import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleShowModal = () => setShowModal(!showModal); // Toggle modal
  const handleCloseModal = () => setShowModal(false); // Close modal

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <span className="discount-badge">-{product.discount}%</span>
        <Link to="/Product">
          <img
            src={product.image01}
            alt={product.title}
            className="product-image"
          />
        </Link>

        <div className="overlay-icons">
          <button className="wishlist-btn">
            <i className="fa-regular fa-heart"></i>
          </button>
          <button className="compare-btn" onClick={handleShowModal}>
            <i className="fa-solid fa-eye"></i>
          </button>
        </div>
        <div>
          <button className="add-to-cart-btn d-lg-block d-none">Add to Cart</button>
        </div>
      </div>

      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <div className="rating">
          <span className="stars">
            <i className="fa-solid fa-star"></i>
          </span>
          <span className="stars">
            <i className="fa-solid fa-star"></i>
          </span>
          <span className="stars">
            <i className="fa-solid fa-star"></i>
          </span>
          <span className="stars">
            <i className="fa-solid fa-star"></i>
          </span>
          <span className="stars">
            <i className="fa-solid fa-star"></i>
          </span>
          <span className="reviews">(5)</span>
        </div>
        <div className="price">
          <span className="current-price">Rs. {product.price}</span>
          <span className="original-price">
            Rs. {product.price + product.discount * 10}
          </span>
        </div>
      </div>

      {/* Modal for detailed product view */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-6'>
              <div className="">
                <img
                  src={product.image01}
                  alt={product.title}
                  className=" "
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            <div className='col-6'>
              <div class="product-listing ">
                <h2 class="product-title">Peach Pink Kanjivaram Silk Blend Pure Zari Weaving Saree</h2>
                <div class="price-container">
                  <span class="price-current">Rs. 1,799.00</span>
                  <span class="price-original">Rs. 3,600.00</span>
                </div>
                <div class="discount-code">
                  <p>Document BUY FOR MIN ₹2999, GET EXTRA 15% OFF</p>
                  <p>CODE: SALE15 EXTRA...</p>
                </div>
                <div class="quantity-container">
                  <div className=' quantity-set rounded-pill me-2'>
                    <button class="quantity-button btn">-</button>
                    <input type="text" class="quantity-input" value="1" />
                    <button class="quantity-button btn">+</button>
                  </div>
                  <button class="add-to-carts rounded-pill">ADD
                    TO CART</button>
                </div>

                <div class="free-delivery">
                  <svg
                    className=""
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    viewBox="0 0 64 64"
                    style={{ width: "8%" }}
                  >
                    <defs>
                      <style>{".a{fill:none;stroke:#000;stroke-width:2px}"}</style>
                    </defs>
                    <path
                      className="a"
                      d="M32 54.52L10 41.95v-19.9L32 9.48l22 12.57v19.9L32 54.52z"
                    />
                    <path
                      className="a"
                      d="M32 54.52v-19.9l22-12.57M32 34.62L10 22.05M41.7 15.02L21 28.33v8.38"
                    />
                  </svg>
                  <p className='mt-3 ms-2'>Your order is free delivery!</p>
                </div>
                <div class="product-details">
                  <p>SKU:</p>
                  <p>TYPE:</p>
                </div>
                <Link to="" className='view-details text-dark'>View details</Link>

              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProductCard;
