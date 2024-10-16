import React from 'react'
import Productcard from '../Product/Productcard'
function Home() {
    return (
        <div>
            <div className='offer-set'>
                <marquee>ADDITIONAL 5% OFF ON PREPAID ORDERS AT THE PAYMENT PAGE <span>BUY 2 AT ₹1999 | BUY 3 AT ₹2799  </span>  <span>BUY FOR MIN ₹2999, GET EXTRA 15% OFF | CODE: SALE15</span>  <span>BUY 2 AT ₹1999 | BUY 3 AT ₹2799</span> </marquee>
            </div>
            <section className='container-fluid p-0 overflow-hidden '>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div id="carouselExampleIndicators" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active carousel-button" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" className='carousel-button' data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" className='carousel-button' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="Assets/img/main-baner.jpg" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src="Assets/img/main-baner-1.jpg" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src="Assets/img/main-baner.jpg" class="d-block w-100" alt="..."/>
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
            <section className='container'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div>
                            
                            <Productcard></Productcard>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home