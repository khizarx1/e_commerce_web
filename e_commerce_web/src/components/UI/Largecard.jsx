import React from 'react'
import {Link} from 'react-router-dom'
import Paragraph from '../common/Paragraph'

function Weeklyoffercard({customClass, product}) {
  return (
    <div className={`p-6 flex flex-col gap-2 bg-cover rounded-lg bg-center ${customClass}`}
    style={{ backgroundImage: `url(${product.url})`}}>
        <p className='text-xs text-[#EA580C]'>Only This Week</p>
        <h2 className='max-w-[250px] text-[22px] leading-6 font-bold '>{product.name}</h2>
        <Paragraph text={product.text}/>
        <Link to='/Cart' className='w-fit flex gap-2 py-1 px-2 text-xs bg-white rounded-[12px] font-semibold cursor-pointer'>Shop now<img className='pt-1' src="src/assets/icon/arrowright.svg" alt="" /></Link>
    </div>
  )
}

export default Weeklyoffercard