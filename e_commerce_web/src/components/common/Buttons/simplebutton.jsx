import React from 'react'

function SimpleButton ({text, customClass}) {

  return (
    <button className={`bg-[#634C9F] p-1 text-white cursor-pointer ${customClass}`}>{text}</button>

  )
}

export default SimpleButton

