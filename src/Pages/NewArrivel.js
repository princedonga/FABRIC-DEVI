import React, { useState } from 'react';
import Products from '../SatickData/Product'; // Assuming the product data is here
// import ProductCard from '../Product/Productcard';
import MainProductcard from '../Product/MainProductcard';
import FilteColor from '../Componets/FilteColor';

function NewArrivel() {
    const [columns, setColumns] = useState(4);

    // Function to update the number of columns
    const handleGridChange = (numColumns) => {
        setColumns(numColumns);
    };
    return (
        <div>
            <section className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div>
                            <img src='Assets/img/newArrivel-banner.jpg' className='main-baaner' alt='' />
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-fluid">
                <div className="row mx-2">
                    {/* Filter Section */}
                    <div className="col-lg-3 col-md-4 col-sm-12 filter-section ">
                        <h5>Filter:</h5>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Availability
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <label className='fs-6'>In Stock</label>
                                        <input type='checkbox' className='ms-2 '></input><br />
                                        <label className='fs-6'>Out Of Stock</label>
                                        <input type='checkbox' className=' ms-2'></input>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Price
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <div class="range-slider">
                                            <input type="range" min="0" max="1799" step="1" class="slider" id="myRange" />
                                        </div>
                                        <div className='row mt-4'>
                                            <div className='col-6'>
                                                <label className='form-label '>₹</label>
                                                <input type='number' className='form-control'></input>
                                            </div>
                                            <div className='col-6'>
                                                <label className='form-label '>₹</label>
                                                <input type='number' className='form-control '></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Color
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">

                                        <FilteColor></FilteColor>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Section */}
                    <div className="col-lg-9 col-md-8 col-sm-12">
                        <div className="sort-bar d-flex justify-content-between">
                            <div className='m-2'>
                                <button className='btn bg-light' onClick={() => handleGridChange(2)}>||</button>
                                <button className='btn bg-light ms-2' onClick={() => handleGridChange(3)}>|||</button>
                                <button className='btn bg-light ms-2' onClick={() => handleGridChange(4)}>||||</button>
                            </div>
                            <div className="sort-options">
                                <span>Sort By:</span>
                                <select className='form-select'>
                                    <option>Best Selling</option>
                                    <option>New Arrivals</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className='container-fluid'>
                            <div className="row p-2">
                                {Products.map((product) => (
                                    <div
                                        className={`col-lg-${12 / columns} col-md-4 col-sm-6 col-6 p-0`} // Adjust columns dynamically
                                        key={product.id}
                                    >
                                        <div className='w-100'>
                                            <MainProductcard product={product} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewArrivel;