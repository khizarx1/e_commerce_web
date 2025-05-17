import React from 'react'

function Paragraph({text,customClass}) {
  return (
        <p className={`text-[13px] text-[#6b7280] ${customClass}`}>{text}</p>
  )
}

export default Paragraph