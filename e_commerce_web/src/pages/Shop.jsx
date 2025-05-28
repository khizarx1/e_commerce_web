import React from 'react'
import Mininav from '../components/UI/Mininav'
import Heading2 from '../components/common/Heading2'

function Shop() {
  return (
    <div className='w-[85%] mx-auto'>
        <Mininav />
        <div>
            {/* Widget */}
            <div className='w-[22%]'>
                <Heading2 text={'Widget price filter'} />
            </div>
        </div>
    </div>
  )
}

export default Shop