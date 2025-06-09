import React from 'react'

function Footerbtn({ text, customClass }) {
  return (
    <button className={`bg-[#634C9F] ${customClass}`}>{text}</button>
  )
}

export default Footerbtn