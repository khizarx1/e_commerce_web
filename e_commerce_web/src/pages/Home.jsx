import React from 'react'
import Asidebar from '../components/UI/Asidebar'
import Mininav from '../components/UI/Mininav'
import SimpleButton from '../components/common/Buttons/simplebutton'
import Paymentcard from '../components/UI/Paymentcard'
import Largecard from '../components/UI/Largecard'
import Smallcard from '../components/UI/Smallcard'

function Home() {

const paymentData = [
    { url: 'src/assets/images/payment.jpg',          name: 'Payment only online',  text: 'Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.' },
    { url: 'src/assets/images/newstock.jpg',         name: 'New Stocks and Sales', text: 'Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.' },
    { url: 'src/assets/images/qualityassurance.jpg', name: 'Quality Assurance',    text: 'Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.' },
    { url: 'src/assets/images/delivery.jpg',         name: 'Delivery from 1 Hour', text: 'Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.' },
]

const largeCardData1 = [
    { url: 'src/assets/images/eggs.jpg',   name: 'Quality eggs at an affordable price',     text: 'Eat one every day' },
    { url: 'src/assets/images/lemon.jpg',  name: 'Snacks that nourishes our body and mind', text: 'Sine the morning' },
    { url: 'src/assets/images/snacks.jpg', name: 'Unbeatable quality, unbeatable prices',   text: 'Only this week.Don\'t miss...' },
]

const newArrivalData = [
    { url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
    { url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
    { url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
    { url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
    { url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
    { url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
]

const largeCardData2 = [
    { url: 'src/assets/images/eggs.jpg',           name: 'Provides you experienced quality products',                   text: 'Feed your family the best' },
    { url: 'src/assets/images/alpro.jpg',          name: 'Shoping with us for the better quality and the best prices',  text: 'Sine the morning' },
    { url: 'src/assets/images/qualityproduct.jpg', name: 'Get the best quality product at lowest prices',               text: 'Only this week.Don\'t miss...' },
    { url: 'src/assets/images/oatbox.jpg',         name: 'Get the best quality product at lowest prices',               text: 'Only this week.Don\'t miss...' },
]

const featuredProducts = [
    { url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
    { url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
    { url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
    { url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
    { url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
    { url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
]

const largeCardData3 = [
    { url: 'src/assets/images/babyfood.jpg', name: 'Make your grocery shopping easy with us', text: 'Feed your family the best' },
    { url: 'src/assets/images/cuptava.jpg',  name: 'Get your everyday needs here with us',    text: 'Sine the morning' },
]

  return (
    <>
    {/* Hero Section */}
    <div className='flex'>
        <Asidebar />
        <div className='w-[78%]'>
            <Mininav />

            <div className='p-18 ml-6 mt-6 h-[81vh] bg-left bg-cover rounded-lg'
            style={{ backgroundImage: "url('src/assets/images/hero.jpg')"}}>

                <span className='px-2 py-1 text-xs bg-gradient-to-r from-[#16A34A80] rounded-[5px]'>Weekend Discount</span>
                <h1 className='w-[60%] my-4 text-[#39245F] text-[38px] font-bold leading-10'>Get the best quality products at the lowest prices</h1>
                <p className='w-[50%]'>We have prepared special discounts for you on grocery products. Don't miss these opportunities...</p>
                <SimpleButton customClass='mt-10 text-sm font-bold py-2 pl-2 pr-9 rounded-[8px]' text={'Shop Now'}/>
            </div>
        </div>
    </div>

    {/* Payment Section */}
    <div className='py-4 flex justify-between items-center border-b border-[#E5E7EB]'>
        {paymentData.map((item, idx) => {
            return (
                <Paymentcard key={idx} product={item} />
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
        <h2 className='text-[18px] font-bold'>New Arrivals <span className='pl-4 font-light text-[13px] text-[#6b7280]'>Dont miss this opportunity at a special discount just for this week.</span></h2>
        <div className=' py-4 grid grid-cols-6 rounded-lg'>
            {newArrivalData.map((item, idx) => {
                return (
                   <Smallcard key={idx} product={item} customClass={'flex-col'} />
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
    <div>
        <h2 className='text-[18px] font-bold'>Featured Products<span className='pl-4 font-light text-[13px] text-[#6b7280]'>Do not miss the current offers until the end of March.</span></h2>
        <div className='py-4 grid grid-cols-3 rounded-lg'>
            {featuredProducts.map((item, idx) => {
                return (
                   <Smallcard key={idx} product={item} />
                );
            })}
        </div> 
    </div>

    {/* largecards */}
    <div className='grid grid-cols-2 gap-4'>
        {largeCardData3.map((item, idx) => {
            return (
                <Largecard key={idx} product={item} customClass={'h-[210px]'} />
            );
        })}
    </div>    

    {/* large and small both card */}
    <div>
        <h2 className='text-[18px] font-bold'>Best Sellers<span className='pl-4 font-light text-[13px] text-[#6b7280]'>Some of the new products arriving this weeks</span></h2>
        <div className='py-4 flex flex-wrap rounded-lg'>
            
        </div> 
    </div>

    </>
  )
}

export default Home