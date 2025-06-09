import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'; // Import useCart hook to access cart context

// Import images from src/assets
import logoImg from '../../assets/images/logo.jpg'
import profileImg from '../../assets/icon/profile.jpg'
import likesImg from '../../assets/icon/likes.jpg'
import cartImg from '../../assets/icon/cart.jpg'

function Navbar() {

const { cartCount } = useCart(); // Get cart count from context    

  return (
    <nav className='w-[85%] mx-auto py-6 flex items-center justify-between sticky top-0 bg-white'>
        {/* logo */}
        <img src={logoImg} alt="Logo" />

        {/* location */}
        <div className='cursor-pointer'>
            <p className='text-[11px]'>Deliver to</p>
            <p className='font-semibold text-[11px]'>All</p>
        </div>

        {/* search */}
        <div className='py-2 px-4 bg-slate-100 rounded-lg'>
            <input className='w-[45vw] outline-0 truncate' type="search" placeholder='Search for products,cetagories or brands'/>
            <button className='cursor-pointer'><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>

        {/* profile */}
        <img className='cursor-pointer' src={profileImg} alt="Profile" />
        <Link to='/Login'>
            <p className='text-[11px]'>Sign in</p>
            <p className='font-semibold text-[11px]'>Account</p>
        </Link>

        {/* Likes */}
        <img className='cursor-pointer' src={likesImg} alt="Likes" />

        {/* cart */}
        <Link to='/cart' className='cursor-pointer relative'>
            <p className='py-1 px-2 bg-red-600 text-white text-[10px] font-bold absolute -right-2 -top-2 rounded-full'>{cartCount}</p>
            <img src={cartImg} alt="Cart" />
        </Link>
    </nav>
  )
}

export default Navbar