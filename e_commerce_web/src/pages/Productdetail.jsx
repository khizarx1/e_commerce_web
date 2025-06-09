import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import { paymentData, largeCardData1, newArrivalData, largeCardData2, featuredProducts, largeCardData3, bestSellers, companiesData } from '../Data/Allproducts'
import Paragraph from '../components/common/Paragraph'
import Greenbtn from '../components/common/Buttons/greenbtn';

// Import icons/images
import likeImg from '../assets/icon/like.svg';
import shareImg from '../assets/icon/share.svg';
import compareImg from '../assets/icon/compare.svg';
import paymentIcon from '../assets/icon/payment.svg';
import warrantyIcon from '../assets/icon/warranty.svg';

const allProducts = [...paymentData, ...largeCardData1, ...newArrivalData, ...largeCardData2, ...featuredProducts, ...largeCardData3, ...bestSellers, ...companiesData];

function Productdetail() {
    const {id} = useParams();
    const product = allProducts.find(item => String(item.id) === id);    
    if (!product) {
      return <div className="w-[85%] mx-auto p-4 text-red-500 font-semibold">Product not found.</div>;
    }

    const wishList = [
        { name: 'Add to wish list', url: likeImg },
        { name: 'Share', url: shareImg },
        { name: 'Compare', url: compareImg }
    ];

    const [count, setCount] = useState(1);
    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => { if (count > 1) setCount(count - 1); };

    return (
        <div className='w-[85%] mx-auto'>
            <div className='flex'>
                <img className='w-[450px]' src={product.url} alt="" />
                <div className='p-4 flex flex-col gap-4'> 
                    <h1 className='text-4xl font-bold'>{product.name}</h1>
                    <div className='flex gap-2 items-center'>
                        <p className='text-xs'>{product.ratting}</p>
                        <p className='px-1 text-sm font-semibold rounded-[5px] border border-[#E5E7EB]'>3.00</p>
                    </div>
                    <Paragraph text={'Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent Vivamus adipiscing nisl ut dolor dignissim semper.'} />
                    <h2 className='text-3xl font-bold text-[#DC2626]'>${product.newPrice}<span className='pl-2 text-xl font-semibold line-through text-black'>${product.oldPrice}</span></h2>
                    {/* whatsapp */}
                    <a className='w-fit p-3 text-sm rounded-lg cursor-pointer text-white bg-[#16A34A] font-bold' href="https://wa.me/1234567890">Order on WhatsApp</a>
                    
                    {/* buttons */}
                    <div className='flex gap-2'>
                        <div className='p-3 border border-[#E5E7EB] text-sm flex items-center gap-6 rounded-lg'>
                            <button className='cursor-pointer' onClick={handleDecrement}>-</button>
                            <span>{count}</span>
                            <button className='cursor-pointer' onClick={handleIncrement}>+</button>
                        </div>
                        <Greenbtn customClass={'bg-[#16A34A]'} text={'Add to cart'} />
                        <Greenbtn customClass={'bg-[#212529]'} text={'Buy now'} />
                    </div>
                    {/* payment */}
                    <div className='border border-[#E5E7EB] rounded-lg'>
                        <div className='p-3 flex gap-4 border-b border-[#E5E7EB]'>
                            <img src={paymentIcon} alt="" />
                            <p className='text-[13px] text-[#6b7280]'><span className='font-bold'>Payment.</span>Payment upon receipt of goods, Payment by card in the department, Google Pay,Online card, -5% discount in case of payment</p>
                        </div>
                        <div className='p-3 flex gap-4'>
                            <img src={warrantyIcon} alt="" />
                            <p className='text-[13px] text-[#6b7280]'><span className='font-bold'>Warranty.</span>The Consumer Protection Act does not provide for the return of this product of proper quality.</p>
                        </div>
                    </div> 
                    {/* add to wish list */}
                    <div className='flex gap-10 items-center'>
                        {wishList.map((item, idx) => (
                            <p key={idx} className='text-[13px] font-semibold flex items-center gap-2'>
                                <img src={item.url} alt="" />
                                {item.name}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productdetail