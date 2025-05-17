import React, { useState } from 'react';

function Asidebar() {
    
  const asideData = [
    { url: 'src/assets/icon/apple.svg.svg', name: 'Fruits and Vegetables' },
    { url: 'src/assets/icon/meat.svg.svg', name: 'Meats and Sea Foods' },
    { url: 'src/assets/icon/boiled-egg.svg.svg', name: 'Breakfast and Dairy' },
    { url: 'src/assets/icon/toast-bread.svg fill.svg', name: 'Breads and Bakery' },
    { url: 'src/assets/icon/cup.svg fill.svg', name: 'Beverages' },
    { url: 'src/assets/icon/snowflake.svg.svg', name: 'Frozen Foods' },
    { url: 'src/assets/icon/bar.svg fill.svg', name: 'Biscuits and Snacks' },
    { url: 'src/assets/icon/wheat.svg fill.svg', name: 'Grocery and Staples' },
    { url: 'src/assets/icon/scoop.svg.svg', name: 'Household Needs' },
    { url: 'src/assets/icon/toilet-paper.svg fill.svg', name: 'Healthcare' },
    { url: 'src/assets/icon/baby-boy.svg.svg', name: 'Baby and Pregnancy' },
  ];

  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <aside className='w-[22%] rounded-lg border border-[#E5E7EB] overflow-hidden'>
      {/* Header */}
      <div onClick={handleClick} className='px-3 py-3 flex items-center gap-2 border-b border-[#E5E7EB] relative cursor-pointer'>
        <img src='src/assets/icon/grid.svg' alt='' />
        <p className='text-[14px] font-bold'>All Categories</p>
        <img className={`absolute right-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} src='src/assets/icon/drop.svg' alt=''/>
      </div>

      {/* Conditionally render the whole content block */}
      {isOpen && (
        <div>
          {asideData.map((item, idx) => (
            <div key={idx} className='px-3 py-3 flex items-center gap-2 border-b border-[#E5E7EB] cursor-pointer'>
              <img src={item.url} alt={item.name} />
              <p className='text-[14px] font-medium'>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

export default Asidebar;
