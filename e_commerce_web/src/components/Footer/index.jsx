// import React from 'react'
// import { Link } from 'react-router-dom'

// function index() {

//     const footerLinks = [

//         {
//             head: "Do You Need Help ?",
//             para: "Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska.",
//         },

//         {
//             title: "Make Money with Us",
//             Links: [
//                 { name: "Sell on Grogin", url: "" },
//                 { name: "Sell your Services on Grogin", url: "" },
//                 { name: "Sell on Grogin Business", url: "" },
//                 { name: "Sell Your Apps on Grogin", url: "" },
//                 { name: "Become a Affilate", url: "" },
//                 { name: "Advertise Your Product", url: "" },
//                 { name: "Sell-Publish with Us", url: "" },
//                 { name: "Become a Blowwe Vendor", url: "" },
//             ]

//         }, {
//             title: "Let Us Help You",
//             Links: [
//                 { name: "Your Orders", url: "" },
//                 { name: "Returnn and Replacements", url: "" },
//                 { name: "Shipping Rates and Policies", url: "" },
//                 { name: "Refund and Return Policy", url: "" },
//                 { name: "Pricavy Policy", url: "" },
//                 { name: "erms and Conditions", url: "" },
//                 { name: "Cookie Setting", url: "" },
//                 { name: "Help Center", url: "" },
//             ],
//         },
//         {
//             title: "Get to Know Us",

//             Links: [
//                 { name: "About Grogin", url: "" },
//                 { name: "Careers for Grogin", url: "" },
//                 { name: "Investor Relations", url: "" },
//                 { name: "Grogin Devices", url: "" },
//                 { name: "Customer reviews", url: "" },
//                 { name: "Social Responsibility", url: "" },
//                 { name: "Store Location", url: "" },
//             ]
//         }





//     ];



//     return (
//         <footer className='px-32 bg-[#f3f4f6]'>

//             <div className='py-12 flex items-center justify-between border-b border-[#6b7280]'>
//                 <div>
//                     <h2 className="text-xl font-bold">Join our newsletter for £10 offs</h2>
//                     <p className="w-[300px] pt-2"> Register now to get latest updates on promotions &
//                     coupons.Don’t worry, we not spam!'</p>

//                 </div>
//                 <div>

//                     <div className='w-[418px] border border-[#D1D5DB] flex  justify-between rounded-lg overflow-hidden'>
//                         <div className='p-2 flex items-center'>
//                             <img src="src/assets/images/email.svg" alt="" />
//                             <input className='outline-0' type="email" placeholder='Enter your email address' />
//                         </div>
//                         <button className="px-4 bg-[#634C9F] text-white text-sm font-bold">Send</button>
//                     </div>
//                     <span className='pt-2 text-[11px] !text-[#6b7280]'>By subscribing you agree to our</span>
//                     <span className='text-[#634C9F] text-[11px] font-semibold'>Terms & Conditions and Privacy & Cookies Policy.</span>




//                 </div>
//             </div>

//             <div>





//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
//                     {footerLinks.map((item, index) => (
//                         <div key={index}>
//                             {item.head && (
//                                 <>
//                                     <h2 className='text-[#111827] font-bold'>{item.head}</h2>
//                                     <p className='pt-4 text-[#6b7280] text-[13px]'>{item.para}</p>
//                                 </>
//                             )}

//                             {item.title && (
//                                 <>
//                                     <h2 className='text-[#111827] font-bold'>{item.title}</h2>
//                                     <ul className='pt-4'>
//                                         {item.Links.map((link, idx) => (
//                                             <li key={idx} className='py-1 text-[#6b7280] text-[13px]'>
//                                                 <Link className='text-[#6b7280] text-[13px]' to={link.url}>
//                                                     {link.name}
//                                                 </Link>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </>
//                             )}
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </footer>
//      )
// }

// export default index