import React from 'react'
import Paragraph from '../common/Paragraph'

function Paymentcard({product}) {
  return (
    <div className='flex w-[30%]'>
        <img className='mt-8' src={product.url} alt="" />
        <div className='pl-4'>
            <h3 className='font-bold'>{product.name}</h3>
            <Paragraph customClass={'leading-4'} text={product.text} />
        </div>
    </div>
  )
}

export default Paymentcard