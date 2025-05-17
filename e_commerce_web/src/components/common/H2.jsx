import React from 'react'

function h2({title, subtitle}) {
  return (
        <h2 className='text-[18px] font-bold'>{title}<span className='pl-4 font-light text-[13px] text-[#6b7280]'>{subtitle}</span></h2>

  )
}

export default h2