import { useState, useEffect } from "react"
import { BsArrowBarUp } from 'react-icons/bs';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className='fixed bottom-10 right-7 z-30 md:bottom-14 md:right-14'>
            {isVisible && (
                <button 
                    type='button' 
                    aria-label='scroll-to-top'
                    onClick={scrollToTop}
                    className='bg-secondary text-white rounded-full p-2 hover:bg-primary transition-all'
                >
                    <BsArrowBarUp className='text-2xl md:text-[28px]' />
                </button>
                
            )}
        </div>
    )
}

export default ScrollToTop