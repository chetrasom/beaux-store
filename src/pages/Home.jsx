import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getUserLocalStorage } from '../features/auth/authSlice';

import { 
    Hero, Collections, ProductsType, BestSellers, Newsletter, Brands
    // Banner, Why, SpecialOffer,  Services, 
} from '../components';
import ServiceCollection from '../components/services/ServiceCollection';
import WideBanner from '../components/banner/WideBanner';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserLocalStorage());
    }, [dispatch]);
    
    return (
        <>
            <Hero />
            <ServiceCollection />
            <Collections />
            <BestSellers />
            <WideBanner />
            <ProductsType />
            <Brands />
            <Newsletter />

            {/* <Banner /> */}
            {/* <Why /> */}
            {/* <SpecialOffer /> */}
            {/* <Services /> */}
            
        </>
    )
}

export default Home;