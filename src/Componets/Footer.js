import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className=" col-lg-2 col-md-6 col-sm-6 col-12">
            <h5 className="footer-heading">MAIN MENU</h5>
            <ul className="footer-links">
              <li><Link to="">New Arrivals</Link></li>
              <li><Link to="">Sarees</Link></li>
              <li><Link to="">Collection</Link></li>
              <li><Link to="">Best Seller</Link></li>
              <li><Link to="">Sale</Link></li>
              <li><Link to="">Luxe</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-12">
            <h5 className="footer-heading">POLICIES</h5>
            <ul className="footer-links">
              <li><Link to="">Terms and Condition</Link></li>
              <li><Link to="">Shipping and Delivery</Link></li>
              <li><Link to="">Returns</Link></li>
              <li><Link to="">Privacy Policy</Link></li>
              <li><Link to="">Payment Policy</Link></li>
            </ul>
          </div>
          <div className=" col-lg-2 col-md-6 col-sm-6 col-12">
            <h5 className="footer-heading">TYPE</h5>
            <ul className="footer-links">
              <li><Link to="">Kanjivaram Sarees</Link></li>
              <li><Link to="">Banarasi Sarees</Link></li>
              <li><Link to="">Organza Sarees</Link></li>
              <li><Link to="">Kuberu Sarees</Link></li>
              <li><Link to="">Chiffon Saree</Link></li>
              <li><Link to="">Satin Saree</Link></li>
              <li><Link to="">Georgette Saree</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <h5 className="footer-heading">MY ACCOUNT</h5>
            <ul className="footer-links">
              <li><Link to="">Login</Link></li>
              <li><Link to="">Wishlist</Link></li>
              <li><Link to="">Order History</Link></li>
              <li><Link to="">Order Tracking</Link></li>
              <li><Link to="">Buying Guide</Link></li>
            </ul>
          </div>
          <div className=" col-lg-2 col-md-6 col-sm-6 col-12">
            <h5 className="footer-heading">GET IN TOUCH</h5>
            <Link to="" className=' text-decoration-none text-dark ms-4'>support@navdhaaga.com</Link>
            <div className="social-icons mt-4 ms-4">
              <Link to=""><i className="fab fa-pinterest"></i></Link>
              <Link to=""><i className="fab fa-instagram"></i></Link>
              <Link to=""><i className="fab fa-youtube"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
