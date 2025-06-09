import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
// images

function Cart() {

    // cartItems ko context se le lein
    const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();

    return (
        <div className='w-[85%] min-h-[60vh] mx-auto'>
            {cartItems.length === 0 ? (
                <div className='py-16 flex flex-col items-center justify-center gap-4'>
                    <img src="src/assets/icon/emptycart.svg" alt="" />
                    <h2 className='text-lg text-[#F03E3E] font-bold'>YOUR CART IS CURRENTLY EMPTY</h2>
                    <Link to='/Shop' className='p-3 text-sm rounded-lg bg-[#212529] cursor-pointer text-white font-bold'>Return to shop</Link>

                </div>
            ) : (
                cartItems.map((item, idx) => {
                    return (
                        <div key={idx} className='py-8 px-4 flex items-center justify-between border-b-2 border-[#E5E7EB]'>

                            <img src={item.url} className='w-20 h-20 object-cover' />

                            <h2 className='text-lg font-bold'>{item.name}</h2>

                            <div className='p-3 border border-[#E5E7EB] text-sm flex items-center gap-6 rounded-lg'>
                                <button onClick={() => decreaseQty(item.id)} className='cursor-pointer'>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => increaseQty(item.id)} className='cursor-pointer'>+</button>
                            </div>
                            <p className='pt-2 text-lg font-bold'>${item.newPrice * item.quantity}</p>
                            {console.log(typeof item.quantity)}
                            <button onClick={() => removeFromCart(item.id)} className='p-2 bg-red-500 text-white rounded cursor-pointer'>Remove</button>
                        </div>)})
            )}
            
            < p className='py-4 text-lg text-green-500 text-end font-bold'>Total : <span className='text-black'>$12</span></p>
        </div >
  )
}

export default Cart