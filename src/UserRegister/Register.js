import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div>

            <div className='py-4'>
                <h4 className='text-center fs-3'>Register</h4>
                <p className='text-center py-3'>Please fill in the fields below</p>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <form className=' '>
                            <div class="form__div">
                                <input type="text" class="form__input" placeholder=" " />
                                <label for="" class="form__label">First Name</label>
                            </div>
                            <div class="form__div">
                                <input type="text" class="form__input" placeholder=" " />
                                <label for="" class="form__label">Last Name</label>
                            </div>
                            <div class="form__div">
                                <input type="email" class="form__input" placeholder=" " />
                                <label for="" class="form__label">Email</label>
                            </div>
                            <div class="form__div">
                                <input type="password" class="form__input" placeholder=" " />
                                <label for="" class="form__label">Password</label>
                            </div>
                            <button type="submit" className="btn border-dark w-50 rounded-pill my-4 py-3 login-btn d-block mx-auto">Register</button>
                            <div className='text-center py-4'>
                                <p>Alredy a Member ?<Link to="" className='ms-2 text-dark'>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register