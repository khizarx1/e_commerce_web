import React from 'react'
import Asidebar from '../components/UI/Asidebar'
import Mininav from '../components/UI/Mininav'
import SimpleButton from '../components/common/Buttons/simplebutton'
import H2 from '../components/common/h2'
import Paragraph from '../components/common/Paragraph'
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

const companiesData = [
    {url: 'src/assets/images/profile.jpg', name: 'Machic', text: 'Featured', ratting: '⭐⭐⭐⭐', info: 'Good quality product can only be found in good stores'},
    {url: 'src/assets/images/profile.jpg', name: 'Blonwe', text: 'Featured', ratting: '⭐⭐⭐⭐', info: 'All kinds of grocery products are available in our store.'},
    {url: 'src/assets/images/profile.jpg', name: 'Bacola', text: 'Featured', ratting: '⭐⭐⭐⭐', info: 'Our work can definitely support the local economy.'},
]

const bestSellers = [
    {id: '1', url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
    {id: '2', url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
    {id: '3', url: 'src/assets/images/grocery.jpg', name: 'We are always here to help you with your grocery', text: 'A different kind of grocery store' },
    {id: '4', url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
    {id: '5', url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
    {id: '6', url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
    {id: '7', url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
    {id: '8', url: 'src/assets/images/caramel.jpg', name: 'With your favourite food,We will make your mood', text: 'A different kind of grocery store' },
    {id: '9', url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
    {id: '10', url: 'src/assets/images/newarrival.jpg', name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$0.50' },
]

  return (
    <div className='w-[85%] mx-auto'>
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
    <div className='py-4 '>
        <H2 title={'Featured Products'} subtitle={'Some of the new products arriving this weeks'} />
        <div className='grid grid-cols-3 rounded-lg'>
            {featuredProducts.map((item, idx) => {
                return (
                   <Smallcard key={idx} product={item} />
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
                <Smallcard key={idx} product={item} customClass={'w-[18%] flex-col'} />
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