import React, { useState } from 'react';
import Products from '../SatickData/Product'; // Assuming the product data is here
import MainProductcard from '../Product/MainProductcard';
import FilteColor from '../Componets/FilteColor';
import CustomSelect from '../Componets/CustomSelect';

function PrintedFabric() {
  const [columns, setColumns] = useState(4);

  // Define an array of images and labels for the round images
  const roundImages = [
    { src: 'Assets/img/SubCatory-1.webp', label: 'Polyester Fabric' },
    { src: 'Assets/img/SubCatory-2.webp', label: 'Pure & Viscose Fabric' },
    { src: 'Assets/img/SubCatory-1.webp', label: 'Fabric Quality' },
  ];

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
              <img src='Assets/img/newArrivel-banner.jpg' className='main-baaner' alt='New Arrivals' />
            </div>
          </div>
        </div>
      </section>

      {/* Round Images Section */}

      <div className="container-fluid  px-0">
        <div className="row mx-2">
          {/* Filter Section */}
          <div className="col-lg-3 col-md-4 col-sm-12 filter-section">
            <div className='d-flex align-items-center' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="svg-set d-lg-none d-md-none d-block" fill="none" viewBox="0 11 20 20">
                <line x1="16.5" y1="17.5" x2="3.5" y2="17.5" stroke="#3F7972" strokeLinecap="round"></line>
                <line x1="16.5" y1="24.5" x2="3.5" y2="24.5" stroke="#3F7972" strokeLinecap="round"></line>
                <circle cx="13" cy="24.5" r="2" fill="white" stroke="#3F7972"></circle>
                <circle cx="7" cy="17.5" r="2" fill="white" stroke="#3F7972"></circle>
              </svg>
              <h5 className='ms-lg-4 ms-md-0 ms-3 mt-2 d-lg-block d-md-block d-none'>Filter:</h5>
              <span className='d-lg-none d-md-none d-block ms-3'>Filter and Sort</span>

              {/* Offcanvas Filter */}
              <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ maxWidth: "75%" }}>
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasRightLabel">Filter and Sort</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body">
                  <div className='py-3'>
                    <h5>Availability</h5>
                    <div className='border-set pb-3'>
                      <label className='fs-6'>In Stock</label>
                      <input type='checkbox' className='ms-2'></input><br />
                      <label className='fs-6'>Out Of Stock</label>
                      <input type='checkbox' className='ms-2'></input>
                    </div>
                    <div className='py-4 border-set'>
                      <h5 className='py-3'>Price</h5>
                      <div className="range-slider">
                        <input type="range" min="0" max="1799" step="1" className="slider" id="myRange" />
                      </div>
                      <div className='row mt-4'>
                        <div className='col-6'>
                          <label className='form-label'>₹</label>
                          <input type='number' className='form-control'></input>
                        </div>
                        <div className='col-6'>
                          <label className='form-label'>₹</label>
                          <input type='number' className='form-control'></input>
                        </div>
                      </div>
                    </div>
                    <div className='py-4'>
                      <h5>Color</h5>
                      <FilteColor />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='py-3 d-lg-block d-md-block d-none px-lg-4 px-0'>
              <h5>Availability</h5>
              <div className='border-set pb-3'>
                <label className='fs-6'>In Stock</label>
                <input type='checkbox' className='ms-2'></input><br />
                <label className='fs-6'>Out Of Stock</label>
                <input type='checkbox' className='ms-2'></input>
              </div>
              <div className='py-4 border-set'>
                <h5 className='py-3'>Price</h5>
                <div className="range-slider">
                  <input type="range" min="0" max="1799" step="1" className="slider" id="myRange" />
                </div>
                <div className='row mt-4'>
                  <div className='col-6'>
                    <label className='form-label'>₹</label>
                    <input type='number' className='form-control'></input>
                  </div>
                  <div className='col-6'>
                    <label className='form-label'>₹</label>
                    <input type='number' className='form-control'></input>
                  </div>
                </div>
              </div>
              <div className='py-4'>
                <h5>Color</h5>
                <FilteColor />
              </div>
            </div>
          </div>



          {/* Product Section */}
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="container-fluid mt-4 px-lg-3 px-1 text-center">
              <div className="row justify-content-center">
                {roundImages.map((image, index) => (
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4 mb-4" key={index}>
                    <img src={image.src} className="w-100 rounded-pill" style={{cursor:"pointer"}} alt={image.label} />
                    <p>{image.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="row">
              <div className='col-6 d-lg-block d-none'>
                <button className='btn bg-light' onClick={() => handleGridChange(2)}>||</button>
                <button className='btn bg-light ms-2' onClick={() => handleGridChange(3)}>|||</button>
                <button className='btn bg-light ms-2' onClick={() => handleGridChange(4)}>||||</button>
              </div>
              <div className="col-6 d-lg-block d-none">
                <CustomSelect />
              </div>
            </div>

            {/* Products Grid */}
            <div className='container-fluid mt-4 px-lg-3 px-1'>
              <div className="row">
                {Products.map((product) => (
                  <div
                    className={`col-lg-${12 / columns} col-md-4 col-sm-6 col-6 p-0`}
                    key={product.id}
                  >
                    <div>
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

export default PrintedFabric;
