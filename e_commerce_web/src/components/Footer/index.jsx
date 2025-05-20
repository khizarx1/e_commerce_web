import React from 'react'
import Paragraph from '../common/Paragraph'
import Button from '../common/Buttons/simplebutton'
import { Link } from 'react-router-dom'
function index() {
    const footerLinks = [
        {
            head: "Do You Need Help ?",
            para: "Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska.",
            img: "/images/phne.svg",
            para2: "Monday-Friday: 08am-9pm",
            phone: "0 800 300-353",
            img2: "/images/largemail.svg",
            para3: "Need help with your order?",
            mail: "info@example.com"
        },
        {
            title: "Make Money with Us",
            Links: [
                { name: "Sell on Grogin", url: "" },
                { name: "Sell your Services on Grogin", url: "" },
                { name: "Sell on Grogin Business", url: "" },
                { name: "Sell Your Apps on Grogin", url: "" },
                { name: "Become a Affilate", url: "" },
                { name: "Advertise Your Product", url: "" },
                { name: "Sell-Publish with Us", url: "" },
                { name: "Become a Blowwe Vendor", url: "" },
            ]
        }, {
            title: "Let Us Help You",
            Links: [
                { name: "Your Orders", url: "" },
                { name: "Returnn and Replacements", url: "" },
                { name: "Shipping Rates and Policies", url: "" },
                { name: "Refund and Return Policy", url: "" },
                { name: "Pricavy Policy", url: "" },
                { name: "erms and Conditions", url: "" },
                { name: "Cookie Setting", url: "" },
                { name: "Help Center", url: "" },
            ],
        },
        {
            title: "Get to Know Us",
            Links: [
                { name: "About Grogin", url: "" },
                { name: "Careers for Grogin", url: "" },
                { name: "Investor Relations", url: "" },
                { name: "Grogin Devices", url: "" },
                { name: "Customer reviews", url: "" },
                { name: "Social Responsibility", url: "" },
                { name: "Store Location", url: "" },
            ]
        },
        {
            head: "Download Our App",
            img: "/images/playstore.svg",
            para2: "Download App Get-20% Discount",
            img2: "/images/appstore.svg",
            para3: "Download App Get-30% Discount",
            // img3

        }
    ];
    return (
        <footer className='px-30 bg-[#f3f4f6] pb-20'>
            <div className='py-12 flex items-center justify-between border-b border-[#6b7280]'>
                <div>
                    <h2 className="text-xl font-bold">Join our newsletter for £10 offs</h2>
                    <Paragraph text=' Register now to get latest updates on promotions &
                        coupons.Don’t worry, we not spam!' customClass={"w-[300px] pt-2 text-[13px]"} />
                </div>
                <div>
                    <div className='w-[418px] border border-[#D1D5DB] flex  justify-between rounded-lg overflow-hidden'>
                        <div className='p-2 flex items-center gap-2'>
                            <img src="/images/email.svg" alt="" />
                            <input className='outline-0' type="email" placeholder='Enter your email address' />
                        </div>
                        <Button text={'Send'} customClass={"!px-4 text-sm font-bold"} />
                    </div>
                    <span className='pt-2 text-[11px] !text-[#6b7280]'>By subscribing you agree to our</span>
                    <span className='!text-[#634C9F] text-[11px] font-semibold'>Terms & Conditions and Privacy & Cookies Policy.</span>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
                {footerLinks.map((item, index) => (
                    <div key={index}>
                        {item.head && (
                            <>
                                <h2 className="text-[#111827] font-bold">{item.head}</h2>
                                <Paragraph customClass="pt-4 text-[#6b7280] text-[13px] pb-5" text={item.para}/>

                                <div className="flex gap-2 pb-5">
                                    <img src={item.img} alt="" className='cursor-pointer' />
                                    <div>
                                        <span className="text-[13px] text-[#6b7280]">{item.para2}</span>
                                        <Paragraph customClass="font-bold !text-xl cursor-pointer" text={item.phone}/>
                                    </div>
                                </div>

                                <div className="flex pb-5 gap-2">
                                    <img src={item.img2} alt="" className='cursor-pointer' />
                                    <div>
                                        <span className="text-[13px] text-[#6b7280] ">{item.para3}</span>
                                        <Paragraph customClass="font-bold text-sm cursor-pointer" text={item.mail}/>
                                    </div>
                                </div>
                            </>
                        )}

                        {item.title && (
                            <>
                                <h2 className="text-[#111827] font-bold">{item.title}</h2>
                                <ul className="pt-4">
                                    {item.Links.map((link, idx) => (
                                        <li key={idx} className="py-1 text-[#6b7280] text-[13px]">
                                            <Link className="text-[#6b7280] text-[13px] cursor-pointer hover:text-[#000000] hover:scale-110
                                             transition-transform duration-200" to={link.url}>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                ))}
            </div>



        </footer>
    )
}
export default index