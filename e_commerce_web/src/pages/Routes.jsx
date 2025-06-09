import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

// Components
import Header from '../components/Header'
import Mininav from '../components/UI/Mininav'
import Footer from '../components/Footer'

// Pages
import Login from './Auth/Login'
import Home from './Home'
import Shop from './Shop'
import FruitandVeg from './FruitandVeg'
import Beverages from './Beverages'
import BLog from './BLog'
import Contact from './Contact'
import TrandingProducts from './TrendingProducts'
import AlmostFinished from './AlmostFinished'
import Cart from './Cart'
import Productdetail from './Productdetail'
import Nopage from './Nopage'

function CustomRoutes() {

const location = useLocation();
const isHomepage = location.pathname === '/';    


  return (
    <>
        <Header />
            <main>
        {!isHomepage && <Mininav customClass={'w-[85%] mx-auto'} />}
                <Routes>
                    <Route path='/' element={<Home />} />          
                    <Route path='/Shop' element={<Shop />} />          
                    <Route path='/FruitandVeg' element={<FruitandVeg />} />          
                    <Route path='/Beverages' element={<Beverages />} />          
                    <Route path='/BLog' element={<BLog />} />          
                    <Route path='/Contact' element={<Contact />} />          
                    <Route path='/TrandingProducts' element={<TrandingProducts />} />          
                    <Route path='/AlmostFinished' element={<AlmostFinished />} />
                    <Route path='/Cart' element={<Cart />} />
                    {/* Auth */}
                    <Route path='/Login' element={<Login />} />
                    {/* Product Detail */}
                    <Route path='/Productdetail/:id' element={<Productdetail />} />
                    
                    <Route path='*' element={<Nopage />} />          
                </Routes>
            </main>
        <Footer />
    </>
  )
}

export default CustomRoutes