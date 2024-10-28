import React from 'react'
import { Link } from 'react-router-dom'


function UserLogin() {
    return (
        <div>
            <div className='py-4'>
                <h4 className='text-center fs-3'>Login</h4>
                <p className='text-center py-3'>Please Enter Email password</p>
            </div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-6'> {/* Adjust the width of the form container */}
                        <form className='form'>
                            <div className="form__div mb-4">
                                <input type="email" className="form__input " placeholder=" " />
                                <label className="form__label">Email</label>
                            </div>
                            <div className="form__div mb-4">
                                <input type="password" className="form__input " placeholder=" " />
                                <label className="form__label">Password</label>
                            </div>
                            <div>
                                <p><Link className='text-dark'>Forget You Password</Link></p>
                            </div>
                            <button type="submit" className="btn border-dark w-100 rounded-pill my-4 py-3 login-btn d-block mx-auto">Register</button>
                            <div className='text-center py-4'>
                                <p>New Member?<Link to="/register" className='ms-2 text-dark'>Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLogin