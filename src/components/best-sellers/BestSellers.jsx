import { useSelector } from "react-redux";
import { selectorProducts } from "../../features/products/productsSlice";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';

// Import Swiper styles
import "swiper/css";
import "./bestsellersStyle.css"

// Import required modules
import { Navigation } from 'swiper/modules';

import { Heading } from '../../components';
import BestSellersCard from './BestSellersCard';
import { InfinitySpin } from 'react-loader-spinner'

const BestSellers = () => {
    const { products, products_status: status, products_error:error } = useSelector(selectorProducts);

    const bestSellersProducts = products.filter((product) => product?.attributes?.collections === true);

    let contentToDisplay;

    if (status === 'loading') {
        contentToDisplay = (
            <div className='text-xl md:text-2xl text-center h-[380px] flex items-center justify-center'>
                <div>
                    <InfinitySpin
                        visible={true}
                        width="200"
                        color="#4fa94d"
                        ariaLabel="infinity-spin-loading"
                    />
                    <span className='text-xl text-stone-500'>Please wait...</span>
                </div>
            </div>
        )
    } else if (status === 'succeeded') {
        contentToDisplay = bestSellersProducts.map((product) => {
            return (
                <SwiperSlide key={product.id}>
                    <BestSellersCard product={product} />
                </SwiperSlide>
            )
        })
    } else if (status === 'failed') {
        contentToDisplay = (
            <div className='bg-secondary text-xl md:text-2xl text-center h-[380px] flex items-center justify-center'>
                <h4>{error}</h4>
            </div>
        )
    }

    return (
        <section className='pb-10 lg:pb-[60px]'>
            <div className="container">
                <Heading 
                    subTitle={'Divine beauty'}
                    title={`best sellers`}
                />

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 28,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 32,
                        },
                    }}
                    className='bestSeller'
                >
                    {contentToDisplay}
                </Swiper>
            </div>
        </section>
    )
}

export default BestSellers;