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
                        <div className="col-3 d-flex align-items-center">
                            <i className="fa-solid fa-bars icon d-lg-none  d-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"></i>
                            {/* offcanvas menu */}

                            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title logo fs-2" id="offcanvasScrollingLabel">FABRIC DEVI</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className='offcanvas-menu mt-4'>
                                        <li><Link>NEW ARRIVALS</Link></li>
                                        <li><Link>BEST SELLER</Link></li>
                                        <li><Link data-bs-toggle="collapse" to="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"> PRINTED FABRIC <i className="fa-solid fa-caret-down float-end"></i></Link>
                                            <div className="collapse" id="collapseExample">
                                                <div className='text-dark' >
                                                    <ul className='offcanvas-sub-menu'>
                                                        <li className='sub-menu-set'><Link><i className="fa-solid fa-angles-right  " style={{ letterSpacing: "8px" }}></i>Polyester Fabric</Link></li>
                                                        <li><Link>- All</Link></li>
                                                        <li><Link>- Japan Satin</Link></li>
                                                        <li><Link>- Tusser Silk</Link></li>
                                                    </ul>
                                                    <ul className='offcanvas-sub-menu'>
                                                        <li className='sub-menu-set'><Link><i className="fa-solid fa-angles-right  " style={{ letterSpacing: "8px" }}></i>Polyester Fabric</Link></li>
                                                        <li><Link>- All</Link></li>
                                                        <li><Link>- Japan Satin</Link></li>
                                                        <li><Link>- Tusser Silk</Link></li>
                                                    </ul>
                                                    <ul className='offcanvas-sub-menu'>
                                                        <li className='sub-menu-set'><Link><i className="fa-solid fa-angles-right  " style={{ letterSpacing: "8px" }}></i>Polyester Fabric</Link></li>
                                                        <li><Link>- All</Link></li>
                                                        <li><Link>- Japan Satin</Link></li>
                                                        <li><Link>- Tusser Silk</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li><Link>FABRIC SET</Link></li>
                                        <li><Link>SALE</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* offcanvas menu */}

                            <i className="fa-solid fa-magnifying-glass icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i>

                            {/* SearchBar */}


                            <div className="offcanvas offcanvas-end" style={{minWidth:"37%"}} tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExamicon1pleLabel">
                                <div className="offcanvas-header">
                                    <h6 className="offcanvas-title" id="offcanvasExampleLabel" style={{color:"#ccc"}}>WHAT ARE YOU LOOKIN FOR ?</h6>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <div class="search-container">
                                        <input type="text" placeholder="Search Products..." />
                                        <span class="search-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
                                    </div>
                                </div>
                            </div>

                            {/* SearchBar */}
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
                                    <li className="nav-item">
                                        <Link to="" className="nav-link" >BEST SELLER</Link>
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
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header border-bottom-0">
                                <h3 className="modal-title w-100 text-center">Login</h3>
                                <button type="button" className="btn-close" onClick={toggleModal}></button>
                            </div>
                            <div className="modal-body">
                                <p className="text-center mb-4">Please enter your e-mail and password:</p>
                                <form className='mx-4'>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control  py-3" id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control  py-3" id="password" placeholder="Enter your password" />
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <Link to="#" className=" text-dark">Forgot your password?</Link>
                                    </div>
                                    <button type="submit" className="btn border-dark w-100 rounded-pill mt-3 py-3">LOGIN</button>
                                </form>
                            </div>
                            <div className="modal-footer border-top-0 justify-content-center">
                                <p>New customer? <Link href="#" className="text-decoration-none">Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;