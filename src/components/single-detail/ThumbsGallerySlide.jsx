import { useState } from "react"
import PropTypes from 'prop-types';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './thumbGallery.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ThumbsGallerySlide = ({ thumbnails }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            {/* Slide 1 main */}
            <Swiper
                style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mainSwiper"
            >
                {thumbnails?.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img 
                                src={slide?.attributes?.url} 
                                alt="thumbnail images"
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            {/* thumbs */}
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="thumbSwiper"
            >
                {thumbnails?.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img 
                                src={slide?.attributes?.url} 
                                alt="thumbnail images"
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default ThumbsGallerySlide;

ThumbsGallerySlide.propTypes = {
    images : PropTypes.array,
    thumbnails : PropTypes.array
}