import React from 'react'
// Data
import { paymentData, largeCardData1, newArrivalData, largeCardData2, featuredProducts, largeCardData3, bestSellers, companiesData } from '../data/Allproducts'

import { Link } from 'react-router-dom'
import Asidebar from '../components/UI/Asidebar'
import Mininav from '../components/UI/Mininav'
import H2 from '../components/common/h2'
import Paragraph from '../components/common/Paragraph'
import Largecard from '../components/UI/Largecard'
import Smallcard from '../components/UI/smallcard'

function Home() {

  return (
    <div className='w-[85%] mx-auto'>
    {/* Hero Section */}
    <div className='flex'>
        <Asidebar />
        <div className='w-[78%]'>
            <Mininav customClass={'ml-6'} />

            <div className='pl-18 ml-6 mt-6 h-[81vh] flex flex-col justify-center gap-4 bg-left bg-cover rounded-lg'
            style={{ backgroundImage: "url('src/assets/images/hero.jpg')"}}>

                <span className='w-fit px-2 py-1 text-xs bg-gradient-to-r from-[#16A34A80] rounded-[5px]'>Weekend Discount</span>
                <h1 className='w-[60%] text-[#39245F] text-[38px] font-bold leading-10'>Get the best quality products at the lowest prices</h1>
                <p className='w-[50%]'>We have prepared special discounts for you on grocery products. Don't miss these opportunities...</p>
                <Link to='/Shop' className='w-fit mt-4 text-sm font-bold py-2 pl-2 pr-9 rounded-[8px] bg-[#634C9F] p-1 text-white cursor-pointer'>Shop Now</Link>
            </div>
        </div>
    </div>

    {/* Payment Section */}
    <div className='py-4 flex justify-between items-center border-b border-[#E5E7EB]'>
        {paymentData.map((item, idx) => {
            return (
                <div key={idx} className='flex w-[30%]'>
                    <img className='mt-8' src={item.url} alt="" />
                    <div className='pl-4'>
                        <h3 className='font-bold'>{item.name}</h3>
                        <Paragraph customClass={'leading-4'} text={item.text} />
                    </div>
                </div>
            )
        })}
    </div>

    {/* Weekly Offers */}
    <div className='py-8 grid grid-cols-3 gap-4'>
        {largeCardData1.map((item, idx) => {
            return (
                <Largecard key={idx} product={item} customClass={'h-[210px]'} />
            );
        })}
    </div>    

    {/* New Arrivals */}
    <div>
        <H2 title={'New Arrivals'} subtitle={'Dont miss this opportunity at a special discount just for this week.'} />
        <div className=' py-4 grid grid-cols-6 rounded-lg overflow-hidden'>
            {newArrivalData.map((item, idx) => {
                return (
                   <Link to={`/Productdetail/${item.id}`} key={idx}>
                        <Smallcard product={item} customClass={'flex-col'} />
                   </Link>
                );
            })}
        </div> 
    </div>

    {/* Weekly offers 2 */}
    <div className='py-8 grid grid-cols-4 gap-4'>
        {largeCardData2.map((item, idx) => {
            return (
                <Largecard key={idx} product={item} customClass={'h-[380px]'} />
            );
        })}
    </div>

    {/* Featured products */}
    <div className='py-4 '>
        <H2 title={'Featured Products'} subtitle={'Some of the new products arriving this weeks'} />
        <div className='grid grid-cols-3 rounded-lg'>
            {featuredProducts.map((item, idx) => {
                return (
                   <Link to={`/Productdetail/${item.id}`} key={idx}>
                        <Smallcard product={item} />
                   </Link>
                );
            })}
        </div> 
        
        <div className='grid grid-cols-2 gap-4'>
        {largeCardData3.map((item, idx) => {
            return (
                <Largecard key={idx} product={item} customClass={'h-[210px]'} />
            );
        })}
        </div>
    </div>

    {/*Best sellers  */}
    <div className='py-4'>
        <H2 title={'Featured Products'} subtitle={'Some of the best products arriving this weeks'} />
        <div className='flex flex-wrap rounded-lg'>
            {bestSellers.map((item, idx) => 
                (idx === 2 || idx === 7) ?
                <Largecard key={idx} product={item} customClass={'w-[28%] h-[380px]'} /> :
                <Link to={`/Productdetail/${item.id}`} key={idx} className='w-[18%]'>
                    <Smallcard product={item} customClass={'flex-col'} />
                </Link>
            )}
        </div>
    </div>    

    {/* popular companies */}
    <div className='py-8'>
        <H2 title={'Popular Companies'} subtitle={'Some of the new products arriving this weeks'} />
        <div className='py-4 grid grid-cols-3 rounded-lg overflow-hidden'>
            {companiesData.map((item, idx) => {
                return (
                    <div key={idx} className='p-4 border border-[#E5E7EB]'>
                        <div className='pb-4 flex gap-4 border-b border-[#E5E7EB]'>
                            <img src={item.url} alt="" />
                            <div>
                                <h3 className='font-bold'>{item.name}</h3>
                                <Paragraph customClass={'pb-2'} text={item.text} />
                                <p className='text-[12px]'>{item.ratting}</p>
                            </div>
                        </div>
                        <p className='py-6 text-[12px] font-semibold'>{item.info}</p>
                    </div>
                );
            })}
        </div> 
    </div>

    </div>
  )
}

export default Home