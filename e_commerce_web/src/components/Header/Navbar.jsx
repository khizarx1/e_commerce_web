import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <div className='py-6 flex items-center gap-4'>
        {/* logo */}
        <img src="src/assets/logo/logo.jpg" alt="" />
        
        {/* location */}
        <img src="src/assets/images/logo.jpg" alt="" />
        <div>
            <p className='text-[11px]'>Deliver to</p>
            <p className='font-semibold text-[11px]'>All</p>
        </div>

        {/* search */}
        <div className='py-2 px-4 flex flex-1 bg-slate-100 rounded-lg'>
            <input className='flex-1 outline-0 truncate' type="search" placeholder='Search for products,cetagories or brands'/>
            <button className='cursor-pointer'><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>

        {/* profile */}
        <img src="src/assets/icon/profile.jpg" alt="" />
        <Link to='/Login'>
            <p className='text-[11px]'>Sign in</p>
            <p className='font-semibold text-[11px]'>Account</p>
        </Link>

        {/* Likes */}
        <img src="src/assets/icon/likes.jpg" alt="" />

        {/* cart */}
        <img src="src/assets/icon/cart.jpg" alt="" />


    </div>
  )
}

export default Navbar