import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../Components/PrivateRoute'
import AddOrder from '../Pages/AddOrder'
import AllOrders from '../Pages/AllOrders'
import SignIn from '../Pages/Login'
import SignUp from '../Pages/Signup'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<PrivateRoute><AddOrder /></PrivateRoute>}></Route>
            <Route path='/orders' element={<PrivateRoute> <AllOrders /></PrivateRoute>}></Route>
            <Route path='/login' element={<SignIn />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
        </Routes>
    )
}

export default AllRoutes