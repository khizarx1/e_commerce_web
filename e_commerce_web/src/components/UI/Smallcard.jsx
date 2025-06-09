import React from 'react'
import { useCart } from '../../context/CartContext'; // CortContext se useCart hook ko import krein 

function Smallcard({customClass, product}) {

// addToCart function le lein useContext se jo product ko cart mein add kre ga
const { addToCart } = useCart();

  return (
    <div className={`flex ${customClass}  p-3 border border-[#E5E7EB]`}>    
        <img src={product.url} alt="" />
        <div className='flex flex-col gap-2'>
            <p className='w-fit p-1 flex text-[10px] text-[#166534] font-extrabold bg-gradient-to-r from-[#D4FC79] to-[#96E6A1] rounded-[10px]'><img className='pr-1' src="src\assets\icon\organic.svg" alt="" />ORGANIC</p>
            <h3 className='pb-4 text-[14px] font-medium'>{product.name}</h3>
            <p className='text-[22px] font-bold text-[#DC2626]'>${product.newprice}</p>
            <button onClick={(e) => {
                e.preventDefault()
                addToCart(product);}} // ye product ko cart mein add kre ga
             className='p-1 text-[#634C9F] text-[13px] text-start border border-[#634C9F] rounded-[15px] cursor-pointer'> Add to cart</button>
        </div>
    </div>
  )
}

export default Smallcard