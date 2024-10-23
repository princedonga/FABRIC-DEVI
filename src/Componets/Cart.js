import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Productcard from '../Product/Productcard'

import Products from '../SatickData/Product';
import Slider from "react-slick";

function Cart() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="container-fluid px-5 my-5">
                {/* Cart Header */}
                <h2>Your Cart</h2>
                <div className="row mt-4">
                    {/* Product Section */}
                    <div className="col-md-8">
                        <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
                            <div className="d-flex">
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0712/5014/9624/files/Forest-Green-Silk-Saree-For-Women-Floral-Print.jpg?v=1725715139"
                                    alt="Product"
                                    className='me-4'
                                    style={{ width: '15%', height: '50%', objectFit: 'cover' }}
                                />
                                <div className="">
                                    <h5 className='fs-5'>Royal Blue Kanjivaram Silk Saree With Pure Gold Zari Weaving</h5>
                                    <Link to="#" className="text-dark">Remove</Link>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <button className="btn btn-light">-</button>
                                <input
                                    type="text"
                                    className="form-control mx-2 text-center"
                                    value="1"
                                    style={{ width: '50px' }}
                                    readOnly
                                />
                                <button className="btn btn-light">+</button>
                            </div>
                            <h5 className="text-right">₹1,799.00</h5>
                        </div>
                    </div>

                    {/* Order Summary Section */}
                    <div className="col-md-4">
                        <div className="card ">
                            <div className="mb-2" style={{ borderBottom: "4px solid #000" }}>
                                <i className="bi bi-box-seam"></i> Your order is free delivery!
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="special-instructions" className='mb-2'>Special instructions for seller</label>
                                <textarea
                                    className="form-control"
                                    id="special-instructions"
                                    rows="3"
                                ></textarea>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <h5>Total</h5>
                                <h5>₹1,799.00</h5>
                            </div>
                            <small>Taxes and shipping calculated at checkout</small>
                            <button className="btn btn-dark btn-block mt-3">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center py-3'>
                <h2>You May Also Like</h2>
            </div>
            <section className='container py-5 '>
                <Slider {...settings}>
                    {Products.map((product) => (
                        <div key={product.id}>
                            <Productcard product={product} />
                        </div>
                    ))}
                </Slider>
            </section>
        </div>
    );
}

export default Cart;
