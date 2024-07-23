import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { heroData } from '../../data';

const Hero = () => {
    return (
        <section className='pt-20 lg:pt-28'>
            <Swiper>
                {heroData.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>   
                            <div
                                style={{ backgroundImage: `url(${item.image})` }}
                                className="relative min-h-[500px] w-full overflow-hidden bg-no-repeat bg-cover bg-center md:bg-right lg:bg-center lg:h-[700px]"
                            >
                                <div className="md:hidden bg-primary/25 w-full h-full"></div>
                                <div className="container">
                                    <div className="absolute top-[50%] -translate-y-[50%] left-0 md:left-auto">
                                    
                                        <div className="text-center md:max-w-sm md:text-left lg:max-w-2xl">
                                            <h3 className="text-xl md:text-2xl lg:text-[28px]">{item.subTitle}</h3>
                                            <h1 className="h1 pt-2 pb-4 md:pt-4 md:pb-4">
                                                {item.title}
                                            </h1>
                                            <p className="leading-relaxed px-4 md:px-0 bg-red-0 md:max-w-xs lg:max-w-md">
                                                {item.description}
                                            </p>
                                            <div className="flex justify-center pt-8 md:justify-start">
                                                <Link 
                                                    to='/shop'
                                                    className="btn"
                                                >
                                                    shop now
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Hero;