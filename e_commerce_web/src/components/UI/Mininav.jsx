import React from 'react'
import {Link} from 'react-router-dom'


function Mininav({customClass}) {

const leftLinks = [
    {to: '/', name: 'Home'},
    {to: '/Shop', name: 'Shop'},
    {to: '/FruitandVeg', name: 'Fruits and Vegitables'},
    {to: '/Beverages', name: 'Beverages'},
    {to: '/Blog', name: 'Blog'},
    {to: '/Contact', name: 'Contact'},
]    

const rightLinks = [
    {id: '1', to: '/TrendingProducts', name: 'Trending Products' },
    {id: '2', to: '/AlmostFinished', name: 'Almost Finished' }
  ];

  return (
    <div className={`py-3 font-semibold flex items-center justify-between border-y border-[#E5E7EB] ${customClass}`}>
        {/* left */}
        <div className='flex items-center gap-4'>
            {leftLinks.map((item, idx) => {
            return (
                <Link key={idx} to={item.to} className=' text-[14px] hover:underline cursor-pointer hover:text-[#634C9F]'>{item.name}</Link>                    
            );
        })}
        </div>
        {/* right */}
        <div className='flex items-center gap-4'>
            {rightLinks.map((item, idx) => {
                return (
                    <Link key={idx} to={item.to} className={`text-[14px] hover:underline cursor-pointer
                    ${item.id === '1' && 'hover:text-[#634C9F]'}
                    ${item.id === '2' && 'text-[#DC2626]'}`}>
                    {item.name}
                    {item.id === '2' && <span className='ml-2 text-[10px] bg-[#DC2626] text-white px-1 rounded-[4px]'>SALE</span>}
                    </Link>                    
                ); 
            })}    
        </div> 
    </div>
  )
}

export default Mininav 