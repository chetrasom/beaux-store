import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { toggleAmount, removeItem } from '../../features/cart/cartSlice';

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

import { formatPrice } from '../../utils/helpers';

const ProductItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    const id = cartItem?.id;

    const increaseAmount = () => {
        dispatch(toggleAmount({ id: id, type: 'INC' }))
    }

    const decreaseAmount = () => {
        dispatch(toggleAmount({ id: id, type: 'DEC' }))
    }
    
    return (
        <div className='grid grid-cols-4 font-primary capitalize text-lg py-2 p-0 md:px-4'>
            <div className='col-span-3 md:col-span-2 flex items-start gap-3'>
                <figure className='max-w-[80px] w-full border-2 rounded-lg overflow-hidden'>
                    <img
                        src={cartItem?.image}
                        alt={cartItem?.name}
                        className='w-full h-full object-cover'
                    />
                </figure>
                <div className='flex flex-col'>
                    <span className='text-xs text-gray-500 font-secondary'>{cartItem.category}</span>
                    <Link 
                        to={`/shop/${cartItem?.id}`} 
                        className='font-secondary text-base hover:text-primary hover:underline hover:underline-offset-2 transition-all'
                    >
                        {cartItem?.name}
                    </Link>

                    <p className='font-secondary text-xs font-semibold py-2'>
                        {formatPrice(cartItem?.price)}
                    </p>

                    {/* add to cart button */}
                    <div className='flex items-center gap-x-2 md:hidden'>
                        <div className='w-[120px] h-9 md:h-12 border-2 rounded-lg flex items-center justify-between overflow-hidden'>
                            <button 
                                type='button'
                                aria-label='increase toggle amount'
                                onClick={decreaseAmount}
                                className='h-full w-[35%] flex justify-center items-center hover:text-primary transition-all'>
                                <AiOutlineMinus />
                            </button>

                            <button className='font-primary flex justify-center items-center w-[30%] h-full text-[20px]'>
                                {cartItem?.amount}
                            </button>
                                
                            <button 
                                type='button'
                                aria-label='decrease toggle amount'
                                onClick={increaseAmount}
                                className='h-full w-[35%] flex justify-center items-center hover:text-primary transition-all'>
                                <AiOutlinePlus />
                            </button>
                        </div>
                    
                    <div>
                        <button 
                            aria-label='delete item'
                            onClick={() => dispatch(removeItem(id))}
                            className='flex items-center gap-x-1 text-red-500 hover:text-primary transition-all'
                        >
                            <MdDeleteForever className='w-7 h-7' />
                        </button>
                    </div>
                </div>
                </div>
            </div>

            <div className='md:col-span-1 hidden md:block'>
                <div className='flex items-center gap-x-2'>
                    <div className='w-[120px] h-10 md:h-12 border-2 rounded-lg flex items-center justify-between overflow-hidden'>
                        <button 
                            type='button'
                            aria-label='increase toggle amount'
                            onClick={decreaseAmount}
                            className='h-full w-[35%] flex justify-center items-center hover:text-primary transition-all'>
                            <AiOutlineMinus />
                        </button>

                        <button className='font-primary flex justify-center items-center w-[30%] h-full text-[20px]'>
                            {cartItem?.amount}
                        </button>
                            
                        <button 
                            type='button'
                            aria-label='decrease toggle amount'
                            onClick={increaseAmount}
                            className='h-full w-[35%] flex justify-center items-center hover:text-primary transition-all'>
                            <AiOutlinePlus />
                        </button>
                    </div>
                    
                    <div>
                        <button 
                            aria-label='delete item'
                            onClick={() => dispatch(removeItem(id))}
                            className='flex items-center gap-x-1 text-red-500 hover:text-primary transition-all'
                        >
                            <MdDeleteForever className='w-7 h-7' />
                        </button>
                    </div>
                </div>
            </div>

            <div className='text-right md:col-span-1'>
                <div className='pt-2.5'>
                    <strong className='text-lg tracking-wider md:pl-10 lg:pl-0'>
                        {formatPrice(cartItem?.price * cartItem?.amount)}
                    </strong>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;

ProductItem.propTypes = {
    cartItem: PropTypes.object
}