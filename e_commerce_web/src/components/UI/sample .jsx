import React from 'react'

function sample () {
  return (
    <div className='flex mb-10 mt-10 flex-wrap'>
                {seller.map((item, index) => (
                    <React.Fragment key={index}>
                        <MiniAddcat product={item} />
                        {index === 1 && (
                            <Largeddcart
                                customstyle={"!rounded-none"}
                                product={{
                                    img: "/images/banner-10.jpg.svg",
                                    redtitle: "Only This Week",
                                    title: "Special Deal: Extra Savings!",
                                    para: "Don't miss this offer.",
                                    btn: "Shop Now",
                                    img2: "/images/Vector (1).svg",
                                }}
                            />

                        )}
                        {index === 5 && (
                            <Largeddcart
                                customstyle={"!rounded-none"}
                                product={{

                                    img: "/images/banner-10.jpg.svg",
                                    redtitle: "Only This Week",
                                    title: "Special Deal: Extra Savings!",
                                    para: "Don't miss this offer.",
                                    btn: "Shop Now",
                                    img2: "/images/Vector (1).svg",
                                }}
                            />

                        )}
                    </React.Fragment>
                ))}
            </div>
  )
}

export default sample 