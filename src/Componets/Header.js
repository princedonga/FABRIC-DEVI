import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='bg-dark py-3'>
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
                    <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <header className="py-2 container">
                <div className="container-fluid">
                    <div className="row align-items-center py-3">
                        {/* Left: Search Icon */}
                        <div className="col-2 d-flex align-items-center">
                            <i className="fa-solid fa-bars icon d-lg-none d-block"></i>
                            <i className="fa-solid fa-magnifying-glass icon"></i>
                        </div>

                        {/* Center: Logo */}
                        <div className="col-8 text-center">
                            <h1 className="logo">FABRIC DEVI</h1>
                        </div>

                        {/* Right: User, Wishlist, Cart Icons */}
                        <div className="col-2 d-flex justify-content-end align-items-center">
                            <i className="fa-regular fa-user icon"></i>
                            <div className="wishlist">
                                <i className="fa-regular fa-heart icon"></i>
                                <span className="wishlist-count">0</span>
                            </div>
                            <div className="cart">
                                <i className="fa-solid fa-cart-shopping icon"></i>
                                <span className="cart-count">0</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className='header'>
                        <div className='d-lg-block d-none'>
                            <nav className="navbar navbar-expand-lg">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item"><Link to="" className="nav-link">NEW ARRIVALS</Link></li>
                                    <li className="nav-item">
                                        <Link to="" className="nav-link" data-toggle="dropdown">BEST SELLER</Link>
                                    </li>
                                    {/* PRINTED FABRIC with Dropdown */}
                                    <li className="nav-item dropdown">
                                        <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                            PRINTED FABRIC
                                        </Link>
                                        {/* Dropdown menu */}
                                        <div className="dropdown-menu">
                                            <div className="dropdown-column">
                                                <h6 className="dropdown-header">Polyester Fabric</h6>
                                                <Link className="dropdown-item" to="#">All</Link>
                                                <Link className="dropdown-item" to="#">Japan Satin</Link>
                                                <Link className="dropdown-item" to="#">Tusser Silk</Link>
                                                {/* Add more items here */}
                                            </div>
                                            <div className="dropdown-column">
                                                <h6 className="dropdown-header">Pure & Viscose Fabric</h6>
                                                <Link className="dropdown-item" to="#">All</Link>
                                                <Link className="dropdown-item" to="#">Pure Cotton</Link>
                                                <Link className="dropdown-item" to="#">Pure Chiffon</Link>
                                                {/* Add more items here */}
                                            </div>
                                            <div className="dropdown-column">
                                                <h6 className="dropdown-header">Fabric Quality</h6>
                                                <Link className="dropdown-item" to="#">Pure Fabric</Link>
                                                <Link className="dropdown-item" to="#">Viscose Fabric</Link>
                                                {/* Add more items here */}
                                            </div>
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
        </div>
    );
};

export default Header;
