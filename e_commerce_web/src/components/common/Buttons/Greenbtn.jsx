import React from 'react'
import { Link } from 'react-router-dom'
// images
import addtocartImg from '../../../assets/icon/addtocart.svg'

function Greenbtn({path, text, customClass}) { 
  return (
    <Link to={path} className={`w-[160px] p-3 text-sm rounded-lg flex justify-center gap-1 cursor-pointer text-white font-bold ${customClass}`}><img className='w-4' src={addtocartImg} alt="" />{text}</Link>
  )
}

export default Greenbtn