import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Register from '../UserRegister/Register'
import NewArrivel from '../Pages/NewArrivel'
import ProductDetails from '../Product/ProductDetails'
import UserLogin from '../UserRegister/UserLogin'

function Router() {
    return (
        <div>

            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='/NewArrivel' element={<NewArrivel></NewArrivel>}></Route>
                <Route path='/Product' element={<ProductDetails></ProductDetails>}></Route>
                <Route path='/login' element={<UserLogin></UserLogin>}></Route>
            </Routes>
        </div>
    )
}

export default Router