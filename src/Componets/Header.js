import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    return (
        <div className='  '>
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
            <header className="py-2 container-fluid px-lg-5 px-0 top-0 w-100  z-3 bg-white ">
                <div className="container-fluid">
                    <div className="row responsive-set align-items-center py-3">
                        {/* Left: Search Icon */}
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3 d-flex align-items-center">
                            <i className="fa-solid fa-bars icon d-lg-none  d-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"></i>
                            {/* offcanvas menu */}

                            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style={{ maxWidth: "75%" }}>
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title logo fs-2" id="offcanvasScrollingLabel">FABRIC DEVI</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className='offcanvas-menu mt-4'>
                                        <li><Link to="/NewArrivel">NEW ARRIVALS</Link></li>
                                        <li><Link>BEST SELLER</Link></li>
                                        <li><Link to="/printedfabric"> PRINTED FABRIC </Link>
                                        <i className="fa-solid fa-caret-down float-end" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></i>
                                            <div className="collapse" id="collapseExample">
                                                <div className='text-dark' >
                                                    <ul className='offcanvas-sub-menu'>
                                                        <li className='sub-menu-set'><Link><i className="fa-solid fa-angles-right  " style={{ letterSpacing: "8px" }}></i>Polyester Fabric</Link></li>
                                                        <li><Link> All</Link></li>
                                                        <li><Link> Japan Satin</Link></li>
                                                        <li><Link> Tusser Silk</Link></li>
                                                    </ul>
                                                    <ul className='offcanvas-sub-menu'>
                                                        <li className='sub-menu-set'><Link><i className="fa-solid fa-angles-right  " style={{ letterSpacing: "8px" }}></i>Polyester Fabric</Link></li>
                                                        <li><Link> All</Link></li>
                                                        <li><Link> Japan Satin</Link></li>
                                                        <li><Link> Tusser Silk</Link></li>
                                                    </ul>
                                                    <ul className='offcanvas-sub-menu'>
                                                        <li className='sub-menu-set'><Link><i className="fa-solid fa-angles-right  " style={{ letterSpacing: "8px" }}></i>Polyester Fabric</Link></li>
                                                        <li><Link> All</Link></li>
                                                        <li><Link> Japan Satin</Link></li>
                                                        <li><Link> Tusser Silk</Link></li>
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


                            <div className="offcanvas offcanvas-start" style={{ maxWidth: "85%" }} tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExamicon1pleLabel">
                                <div className="offcanvas-header">
                                    <h6 className="offcanvas-title" id="offcanvasExampleLabel" style={{ color: "#ccc" }}>WHAT ARE YOU LOOKIN FOR ?</h6>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <div className="search-container">
                                        <input type="text" placeholder="Search Products..." />
                                        <span className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></span>
                                    </div>
                                </div>
                            </div>

                            {/* SearchBar */}
                        </div>

                        {/* Center: Logo */}
                        <div className="col-lg-6 col-md-6 col-sm-6 col-5  text-center">
                            <h2 className="logo"><Link to="/" className=' text-decoration-none text-dark'>FABRIC DEVI</Link></h2>
                        </div>

                        {/* Right: User, Wishlist, Cart Icons */}
                        <div className="col-lg-3 col-md-3 col-sm-3 col-4  ">
                            <div className='d-flex align-items-center float-end me-lg-5 m-0'>
                                <svg className='icon' onClick={toggleModal} xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                    <circle cx="4" cy="4" r="4" transform="matrix(-1 0 0 1 12 1)" stroke="currentColor" stroke-width="1.5"></circle>
                                    <path d="M1 14.9347C1 14.0743 1.54085 13.3068 2.35109 13.0175V13.0175C6.00404 11.7128 9.99596 11.7128 13.6489 13.0175V13.0175C14.4591 13.3068 15 14.0743 15 14.9347V16.2502C15 17.4376 13.9483 18.3498 12.7728 18.1818L11.8184 18.0455C9.28565 17.6837 6.71435 17.6837 4.18162 18.0455L3.22721 18.1818C2.0517 18.3498 1 17.4376 1 16.2502V14.9347Z" stroke="currentColor" stroke-width="1.5"></path>
                                </svg>
                                {/* <i className="fa-regular fa-user icon" ></i> */}
                                <div className="wishlist">
                                    <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.993 2.26029C8.78149 0.116976 5.37769 -0.378576 2.76491 1.85384C0.0188138 4.20017 -0.375655 8.14129 1.79041 10.9286C2.64105 12.0232 4.3214 13.6896 5.96126 15.2374C7.61262 16.7961 9.26102 18.2698 10.0743 18.99L10.0865 19.0008C10.1665 19.0717 10.2505 19.1461 10.3286 19.2049C10.4177 19.272 10.5316 19.3446 10.6787 19.3885C10.883 19.4494 11.1033 19.4494 11.3076 19.3885C11.4546 19.3446 11.5686 19.272 11.6577 19.2049C11.7358 19.1461 11.8197 19.0717 11.8998 19.0008L11.912 18.99C12.7252 18.2698 14.3736 16.7961 16.025 15.2374C17.6648 13.6896 19.3452 12.0232 20.1958 10.9286C22.3566 8.14811 22.0185 4.17862 19.2151 1.84858C16.5677 -0.351826 13.2027 0.116079 10.993 2.26029ZM10.5372 3.52582C8.71439 1.39483 5.7546 0.877754 3.54443 2.76618C1.28042 4.70059 0.969534 7.91666 2.73793 10.1922C3.52291 11.2023 5.13535 12.8077 6.78495 14.3648C8.42306 15.9109 10.0608 17.3751 10.8699 18.0916C10.9162 18.1327 10.9522 18.1645 10.9836 18.1915C10.9869 18.1943 10.9901 18.197 10.9931 18.1996C10.9962 18.197 10.9993 18.1943 11.0026 18.1915C11.0341 18.1645 11.07 18.1327 11.1164 18.0916C11.9254 17.3751 13.5632 15.9109 15.2013 14.3648C16.8509 12.8077 18.4633 11.2023 19.2483 10.1922C21.022 7.90984 20.7409 4.67711 18.4481 2.77144C16.1887 0.893536 13.2673 1.40012 11.4491 3.52582C11.3351 3.65909 11.1685 3.73581 10.9931 3.73581C10.8178 3.73581 10.6512 3.65909 10.5372 3.52582Z" fill="currentColor"></path>
                                    </svg>
                                    {/* <i className="fa-regular fa-heart icon"></i> */}
                                    <span className="wishlist-count">0</span>
                                </div>
                                <div className="cart">
                                    <svg className="icon" width="23" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" aria-controls="cartOffcanvas">
                                        <g>
                                            <path d="M2 23.9843V6.25565L4.08696 6.26087V6.29217L21.8261 6.27756V23.9833H2V23.9843ZM19.7391 8.33217H4.08696V21.8974H19.7391V8.33217ZM14.5217 5.32487C14.5217 3.19617 14.0073 1.98261 11.913 1.98261C9.82609 1.98261 9.30435 3.19722 9.30435 5.32487V6.27652H7.21739V4.84904C7.21739 1.24174 9.59026 0 11.913 0C14.0177 0 16.6087 1.41287 16.6087 4.84904V6.27652H14.5217V5.32487Z" fill="currentColor"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4428_4093">
                                                <rect width="19.8261" height="24" fill="white" transform="translate(2)"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    {/* <i className="fa-solid fa-cart-shopping icon" ></i> */}
                                    <span className="ms-1 cart-count">(1)</span>


                                    <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel" style={{ maxWidth: "85%" }}>
                                        <div className="offcanvas-header">
                                            <h5 className="offcanvas-title" id="cartOffcanvasLabel">Cart</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">

                                            <div className="free-delivery">
                                                <i className="fa-solid fa-box"></i> <span className='ms-3 pb-2'> Your order is free delivery!</span>
                                            </div>


                                            <div className="cart-item">
                                                <div className="d-flex align-items-center">
                                                    <img src="https://cdn.shopify.com/s/files/1/0712/5014/9624/files/Forest-Green-Silk-Saree-For-Women-Floral-Print.jpg?v=1725715139" alt="Product Image" className="img-fluid me-3" />
                                                    <div>
                                                        <p className="product-title">Royal Blue Kanjivaram Silk Saree With Pure Gold Zari Weaving</p>
                                                        <p className="product-price">Rs. 1,799.00 x 1</p>

                                                        <div className="quantity-control d-flex align-items-center">
                                                            <div className=' quantity-set rounded-pill me-2'>
                                                                <button class="quantity-button btn">-</button>
                                                                <input type="text" class="quantity-input" value="1" />
                                                                <button class="quantity-button btn">+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="#" className="ms-auto text-dark">Remove</Link>
                                                </div>
                                            </div>
                                            <div className='cart-details' >
                                                <hr />
                                                <div className="order-note ">
                                                    <i className="fa-solid fa-sticky-note"></i> Order Note
                                                </div>
                                                <hr />

                                                <div className="total-section">
                                                    <p>Total: <span className="float-end">Rs. 1,799.00</span></p>
                                                    <p>Taxes and shipping calculated at checkout</p>
                                                </div>

                                                <div className="d-flex justify-content-between cart-btn">
                                                    <button className="btn border-dark rounded-pill my-4 py-3 "><Link to="/cart" className='text-dark text-decoration-none'>View Cart</Link></button>
                                                    <button className="btn border-dark rounded-pill my-4 py-3 ">Check Out</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className='header'>
                        <div className='d-lg-block d-none'>
                            <nav className="navbar navbar-expand-lg">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item"><Link to="/NewArrivel" className="nav-link">NEW ARRIVALS </Link></li>
                                    <li className="nav-item">
                                        <Link to="/printed-fabric" className="nav-link" >BEST SELLER</Link>
                                    </li>
                                    {/* PRINTED FABRIC with Dropdown */}
                                    <li className="nav-item dropdown">
                                        <Link to="/printedfabric" className="nav-link " >
                                            PRINTED FABRIC <i className="fa-solid fa-chevron-down hover-icon"></i>
                                        </Link>
                                        <div className="dropdown-menu">
                                            <div className="dropdown-column">
                                                <h6 className="dropdown-header text-dark">Polyester Fabric</h6>
                                                <Link className="dropdown-item" to="#">All</Link>
                                                <Link className="dropdown-item" to="#">Japan Satin</Link>
                                                <Link className="dropdown-item" to="#">Tusser Silk</Link>

                                            </div>
                                            <div className="dropdown-column">
                                                <h6 className="dropdown-header text-dark">Pure & Viscose Fabric</h6>
                                                <Link className="dropdown-item" to="#">All</Link>
                                                <Link className="dropdown-item" to="#">Pure Cotton</Link>
                                                <Link className="dropdown-item" to="#">Pure Chiffon</Link>

                                            </div>
                                            <div className="dropdown-column">
                                                <h6 className="dropdown-header text-dark">Fabric Quality</h6>
                                                <Link className="dropdown-item" to="#">Pure Fabric</Link>
                                                <Link className="dropdown-item" to="#">Viscose Fabric</Link>
                                                {/* Add more items here */}
                                            </div>
                                        </div>
                                        {/* Dropdown menu */}

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
                    <div className="modal-dialog modal-dialog-centered " role="document">
                        <div className="modal-content py-4">
                            <div className="modal-header border-bottom-0">
                                <h3 className="modal-title w-100 text-center">Login</h3>
                                <button type="button" className="btn-close" onClick={toggleModal}></button>
                            </div>
                            <div className="modal-body px-4">
                                <p className="text-center mb-4">Please enter your e-mail and password</p>
                                <form className='form px-3 py-3'>
                                    <div className="form__div mb-4">
                                        <input type="email" className="form__input " placeholder=" " />
                                        <label className="form__label">Email</label>
                                    </div>
                                    <div className="form__div mb-4">
                                        <input type="password" className="form__input " placeholder=" " />
                                        <label className="form__label">Password</label>
                                    </div>
                                    <div className='float-end py-3'>
                                        <p><Link className='text-dark'>Forget You Password</Link></p>
                                    </div>
                                    <button type="submit" className="btn border-dark w-100 rounded-pill my-4 py-3 login-btn d-block mx-auto">Register</button>
                                </form>
                            </div>
                            <div className="modal-footer border-top-0 justify-content-center">
                                <p>New customer? <Link to="/register" className=" text-dark">Register</Link></p>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;