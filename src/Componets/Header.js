import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <div className='bg-dark py-3'>
                {/* Carousel */}
                <div id="carouselExample" className="carousel slide text-center text-white" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <span>Free shipping</span>
                        </div>
                        <div className="carousel-item">
                            <span>24 Hours return</span>
                        </div>
                        <div className="carousel-item">
                            <span>More Than 500+ customers</span>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* Main Header */}
            <header className="py-2 container">
                <div className="container-fluid">
                    <div className="row align-items-center py-3">
                        {/* Left: Search Icon */}
                        <div className="col-3 d-flex align-items-center">
                            <i className="fa-solid fa-bars icon d-lg-none d-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"></i>

                            {/* Search Icon */}
                            <i className="fa-solid fa-magnifying-glass icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i>
                        </div>

                        {/* Center: Logo */}
                        <div className="col-6 text-center">
                            <h2 className="logo">FABRIC DEVI</h2>
                        </div>

                        {/* Right: User, Wishlist, Cart Icons */}
                        <div className="col-3 d-flex justify-content-end align-items-center">
                            <i className="fa-regular fa-user icon" onClick={toggleModal}></i>
                            <div className="wishlist">
                                <i className="fa-regular fa-heart icon"></i>
                                <span className="wishlist-count">0</span>
                            </div>
                            <div className="cart">
                                <i className="fa-solid fa-cart-shopping icon"></i>
                                <span className="ms-1 cart-count">(0)</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className='header'>
                        <div className='d-lg-block d-none'>
                            <nav className="navbar navbar-expand-lg">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item"><Link to="" className="nav-link">NEW ARRIVALS</Link></li>
                                    <li className="nav-item"><Link to="" className="nav-link">BEST SELLER</Link></li>
                                    <li className="nav-item dropdown">
                                        <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                            PRINTED FABRIC
                                        </Link>
                                        <div className="dropdown-menu">
                                            {/* Dropdown columns */}
                                        </div>
                                    </li>
                                    <li className="nav-item"><Link to="" className="nav-link">FABRIC SET</Link></li>
                                    <li className="nav-item"><Link to="" className="nav-link">SALE</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            {/* Modal for login */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header border-bottom-0">
                                <h5 className="modal-title w-100 text-center">Login</h5>
                                <button type="button" className="btn-close" onClick={toggleModal}></button>
                            </div>
                            <div className="modal-body">
                                <p className="text-center mb-4">Please enter your e-mail and password:</p>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control rounded-pill py-3" id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control rounded-pill py-3" id="password" placeholder="Enter your password" />
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <a href="#" className="text-decoration-none">Forgot your password?</a>
                                    </div>
                                    <button type="submit" className="btn btn-dark w-100 rounded-pill mt-3 py-3">LOGIN</button>
                                </form>
                            </div>
                            <div className="modal-footer border-top-0 justify-content-center">
                                <p>New customer? <a href="#" className="text-decoration-none">Register</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
