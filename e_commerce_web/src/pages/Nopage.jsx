import React from 'react'
import { Link } from 'react-router-dom'
import Paragraph from '../components/common/Paragraph'

function Nopage() {
  return (
    <div className='py-14 flex flex-col justify-center items-center gap-4'>
        <img className='w-[600px]' src="src/assets/images/nopage.svg" alt="" />
        <p className='text-4xl font-bold'>That Page Can't Be Found</p>
        <Paragraph customClass={'!text-[18px]'} text={'It looks like nothing was found at this location. Maybe try to search for what you are looking for?'} />
        <Link to='/' className='p-3 text-sm rounded-lg bg-[#634C9F] cursor-pointer text-white font-bold'>Go to Homepage</Link>
    </div>
  )
}

export default Nopage