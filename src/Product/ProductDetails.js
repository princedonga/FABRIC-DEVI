import React, { useState } from 'react';

function ProductDetails() {
    // State to keep track of the currently displayed main image
    const [mainImage, setMainImage] = useState("https://navdhaaga.com/cdn/shop/files/Pink-Banarasi-Saree-For-Women-With-Blouse.jpg?v=1725763227&width=720");

    // Function to handle thumbnail click
    const handleThumbnailClick = (imageSrc) => {
        setMainImage(imageSrc);
    };

    return (
        <div className="product-details">
            <div className="container">
                <div className="row">
                    {/* Left Side: Product Image and Thumbnails */}
                    <div className="col-lg-6 col-md-12 product-images">
                        <div className="main-image">
                            <img src={mainImage} alt="Product Main" className="img-fluid" />
                            <div className="ruler">
                                {/* You can add ruler or other elements here */}
                            </div>
                        </div>

                        <div className="thumbnail-images d-flex">
                            <img
                                src="https://navdhaaga.com/cdn/shop/files/Pink-Banarasi-Saree-For-Women-With-Blouse.jpg?v=1725763227&width=720"
                                alt="Thumbnail 1"
                                className="thumbnail"
                                onClick={() => handleThumbnailClick("https://navdhaaga.com/cdn/shop/files/Pink-Banarasi-Saree-For-Women-With-Blouse.jpg?v=1725763227&width=720")}
                            />
                            <img
                                src="https://navdhaaga.com/cdn/shop/files/Pink-Banarasi-Silk-Saree-at-Navdhaaga.jpg?v=1725763662&width=1296"
                                alt="Thumbnail 2"
                                className="thumbnail"
                                onClick={() => handleThumbnailClick("https://navdhaaga.com/cdn/shop/files/Pink-Banarasi-Silk-Saree-at-Navdhaaga.jpg?v=1725763662&width=1296")}
                            />
                            <img
                                src="https://navdhaaga.com/cdn/shop/files/Banarasi-Silk-Saree-With-Blouse.jpg?v=1725763008&width=720"
                                alt="Thumbnail 3"
                                className="thumbnail"
                                onClick={() => handleThumbnailClick("https://navdhaaga.com/cdn/shop/files/Banarasi-Silk-Saree-With-Blouse.jpg?v=1725763008&width=720")}
                            />
                        </div>
                    </div>

                    {/* Right Side: Product Information */}
                    <div className="col-lg-6 col-md-12 product-info px-5">
                        <h1>Quirky Fruits and Shapes Printed Muslin Fabric</h1>
                        <p>SKU: MU-0-AA152-110</p>
                        <p className="price py-4">Price: ₹278.00 / Meter</p>
                        <ul className="features">
                            <li><i className="fa-solid fa-truck"></i> Free domestic shipping</li>
                            <li><i className="fa-solid fa-box"></i> Pay on delivery available</li>
                            <li><i className="fa-solid fa-bag-shopping"></i> Secure payment by RazorPay</li>
                            <li><i className="fa-solid fa-truck"></i> Estimated Ship by Thu, Oct 24</li>
                        </ul>

                        <div className="quantity-section py-4">
                            <h5>Quantity</h5>
                            <div className="quantity-input">
                                <button className="btn">-</button>
                                <input type="number" min="1" defaultValue="1" />
                                <button className="btn">+</button>
                            </div>
                        </div>

                        <div className="add-to-cart">
                            <button className="btn btn-dark w-100 py-3">Add to Cart</button>
                            <button className="btn btn-outline-secondary w-100 mt-3 py-3">Add to Wishlist</button>
                        </div>
                        <div>
                            <img src='https://www.fabvoguestudio.com/cdn/shop/files/Screenshot_2024-02-12_at_10.58.47_PM.png?v=1707758945&width=700' className='img-fluid mt-4' alt='' />
                            <img src='https://www.fabvoguestudio.com/cdn/shop/files/pAYMENT_BANNER.png?v=1613690189&width=700' className='img-fluid mt-4' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
