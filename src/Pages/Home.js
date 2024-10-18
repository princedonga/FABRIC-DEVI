import React from 'react'
import Productcard from '../Product/Productcard'
// import ProductCard from '../Product/ProductCard';
import Products from '../SatickData/Product';
import Slider from "react-slick";
import Videocard from '../Product/Videocard';
import Vedios from '../SatickData/ProductVideo';
function Home() {
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
        <div className=' overflow-hidden'>
            <div className='offer-set'>
                <marquee>ADDITIONAL 5% OFF ON PREPAID ORDERS AT THE PAYMENT PAGE <span>BUY 2 AT ₹1999 | BUY 3 AT ₹2799  </span>  <span>BUY FOR MIN ₹2999, GET EXTRA 15% OFF | CODE: SALE15</span>  <span>BUY 2 AT ₹1999 | BUY 3 AT ₹2799</span> </marquee>
            </div>
            <section className='container-fluid p-0 overflow-hidden '>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active carousel-button" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" className='carousel-button' data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" className='carousel-button' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="500">
                                    <img src="Assets/img/main-baner.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="Assets/img/main-baner-1.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="Assets/img/main-baner.jpg" class="d-block w-100" alt="..." />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className='row'>
                    <div className='col-lg-12 py-4'>
                        <div className='text-center '>
                            <h3>SPECIAL OFFERS</h3>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-6 py-4'>
                        <div className=' overflow-hidden m-lg-0 m-1'>
                            <img src='Assets/img/bestselller-1.png' className='img-fluid rounded offers-img' alt='special-offer'></img>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-6 py-4'>
                        <div className=' overflow-hidden m-lg-0 m-1'>
                            <img src='Assets/img/bestselller-2.png' className='img-fluid rounded offers-img' alt='special-offer'></img>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-6 py-4'>
                        <div className=' overflow-hidden m-lg-0 m-1'>
                            <img src='Assets/img/bestselller-3.png' className='img-fluid rounded offers-img' alt='special-offer'></img>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-6 py-4'>
                        <div className=' overflow-hidden m-lg-0 m-1'>
                            <img src='Assets/img/bestselller-4.png' className='img-fluid rounded offers-img' alt='special-offer'></img>
                        </div>
                    </div>
                </div>
            </section>
            <div className='text-center '>
                <h3>BESTSELLER</h3>
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
            <div className='text-center '>
                <h3>SHOP NOW</h3>
            </div>
            <section className='container py-5'>
                <Slider {...settings}>
                    {Vedios.map((videoItem) => (
                        <div key={videoItem.id} style={{ width: "50%" }}>
                            <Videocard
                                video={videoItem.Viedo01}
                                title={videoItem.title}
                                price={videoItem.price}
                                discount={videoItem.discount}
                            />
                        </div>
                    ))}
                </Slider>
            </section>
            <div className='text-center '>
                <h3>NEW ARRIVELS</h3>
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
            <div className='text-center py-4'>
                <h3>SHOP BY CATEGORY</h3>
            </div>
            <section className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-6 py-4'>
                        <div className=' overflow-hidden m-lg-0 m-1'>
                            <img src='Assets/img/bestselller-1.png' className='img-fluid rounded offers-img' alt='special-offer'></img>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-6 py-4'>
                        <div className=' overflow-hidden m-lg-0 m-1'>
                            <img src='Assets/img/bestselller-2.png' className='img-fluid rounded offers-img' alt='special-offer'></img>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-6 py-4'>
                        <div className=' overflow-hidden m-lg-0 m-1'>
                            <img src='Assets/img/bestselller-3.png' className='img-fluid rounded offers-img' alt='special-offer'></img>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-6 py-4'>
                        <div className=' overflow-hidden m-lg-0 m-1'>
                            <img src='Assets/img/bestselller-4.png' className='img-fluid rounded offers-img' alt='special-offer'></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-4 overflow-hidden'>
                <div className="banner-container">
                    {/* Background image */}
                    <div className="banner-content">
                        {/* Heading */}
                        <h4>Dive Into Our Instagram Stories</h4>
                        {/* Subheading */}
                        <p>FOLLOW TO KNOW MORE</p>
                        {/* Button */}
                        <button className="follow-button">FOLLOW US</button>
                    </div>
                </div>
            </section>
            <div className='text-center py-4'>
                <h3>COLLECTIONS</h3>
            </div>
            <section className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-6 py-4'>
                        <div className=' overflow-hidden m-lg-0 m-1'>
                            <img src='Assets/img/bestselller-1.png' className='img-fluid rounded offers-img' alt='special-offer'></img>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-6 py-4'>
                        <div className=' overflow-hidden m-lg-0 m-1'>
                            <img src='Assets/img/bestselller-2.png' className='img-fluid rounded offers-img' alt='special-offer'></img>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-6 py-4'>
                        <div className=' overflow-hidden m-lg-0 m-1'>
                            <img src='Assets/img/bestselller-3.png' className='img-fluid rounded offers-img' alt='special-offer'></img>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-6 py-4'>
                        <div className=' overflow-hidden m-lg-0 m-1'>
                            <img src='Assets/img/bestselller-4.png' className='img-fluid rounded offers-img' alt='special-offer'></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-4 overflow-hidden'>
                <div className="banner-2-container ">
                    {/* Background image */}
                    <div className="banner-content text-start container">
                        {/* Heading */}
                        <h4>STEPPING OUT OF STEREOTYPESs</h4>
                        {/* Subheading */}
                        <p>At Navdhaaga, we hold a profound respect for the saree, an emblem of rich Indian heritage that has gracefully adorned generations. Our mission is to intertwine the age-old art of saree weaving with contemporary aesthetics, ensuring that this traditional attire continues to allure the fashion sensibilities of the new generation</p>
                        {/* Button */}
                        {/* <button className="follow-button">FOLLOW US</button> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home