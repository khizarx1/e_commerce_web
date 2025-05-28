import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
// Navbar
import Login from './Auth/Login'
// Mininav
import Header from '../components/Header'
import Home from './Home'
import Shop from './Shop'
import FruitandVeg from './FruitandVeg'
import Beverages from './Beverages'
import BLog from './BLog'
import Contact from './Contact'
import TrandingProducts from './TrendingProducts'
import AlmostFinished from './AlmostFinished'
import Cart from './Cart'
import Footer from '../components/Footer'

import Nopage from './NoPage'

function customRoutes() {


  return (
    <BrowserRouter>
        <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />          
                    <Route path='/Shop' element={<Shop />} />          
                    <Route path='/FruitandVeg' element={<FruitandVeg />} />          
                    <Route path='/Beverages' element={<Beverages />} />          
                    <Route path='/BLog' element={<BLog />} />          
                    <Route path='/Contact' element={<Contact />} />          
                    <Route path='/TrandingProducts' element={<TrandingProducts />} />          
                    <Route path='/AlmostFinished' element={<AlmostFinished />} />
                    {/* Auth */}
                    <Route path='/Login' element={<Login />} />
                    {/* Add to cart */}
                    <Route path='/Cart' element={<Cart />} />
                    
                    <Route path='*' element={<Nopage />} />          
                </Routes>
            </main>
        <Footer />
    </BrowserRouter>
  )
}

export default customRoutes