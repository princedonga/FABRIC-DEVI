import React, { useState } from 'react';
import Products from '../SatickData/Product'; // Assuming the product data is here
// import ProductCard from '../Product/Productcard';
import MainProductcard from '../Product/MainProductcard';
import FilteColor from '../Componets/FilteColor';
import CustomSelect from '../Componets/CustomSelect';

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
                        <div className='py-3 '>
                            <h5>Availability</h5>
                            <div className='border-set pb-3'>
                                <label className='fs-6'>In Stock</label>
                                <input type='checkbox' className='ms-2 '></input><br />
                                <label className='fs-6'>Out Of Stock</label>
                                <input type='checkbox' className=' ms-2'></input>
                            </div>
                            <div className='py-4 border-set'>
                                <h5 className='py-3'>Price</h5>
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
                            <div className='py-4 ' >
                                <h5>Color</h5>
                                <FilteColor></FilteColor>
                            </div>
                        </div>

                    </div>

                    {/* Product Section */}
                    <div className="col-lg-9 col-md-8 col-sm-12">
                        <div className=" row ">
                            <div className=' col-6 d-lg-block d-none'>
                                <button className='btn bg-light' onClick={() => handleGridChange(2)}>||</button>
                                <button className='btn bg-light ms-2' onClick={() => handleGridChange(3)}>|||</button>
                                <button className='btn bg-light ms-2' onClick={() => handleGridChange(4)}>||||</button>
                            </div>
                            <div className="col-6 col-6 d-lg-block d-none ">
                                <CustomSelect></CustomSelect>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className='container-fluid mt-4'>
                            <div className="row ">
                                {Products.map((product) => (
                                    <div
                                        className={`col-lg-${12 / columns} col-md-4 col-sm-6 col-6 p-0`} // Adjust columns dynamically
                                        key={product.id}
                                    >
                                        <div className=''>
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
