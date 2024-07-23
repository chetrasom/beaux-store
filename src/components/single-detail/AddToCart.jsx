import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlus, FaMinus } from "react-icons/fa6";

import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { openCartSidebar } from '../../features/toggle/toggleSlice';

const AddToCart = ({ stock, activeWeight, activeIngredient, activeSkin, single_product }) => {
    const [amount, setAmount] = useState(1);
    const dispatch = useDispatch();

    const id = single_product?.slug;

    const increment = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount + 1;
            if (tempAmount > stock) {
                tempAmount = stock
            }
            return tempAmount;
        });
    };

    const decrement = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount - 1;
            if (tempAmount < 1) {
                tempAmount = 1
            }
            return tempAmount;
        })
    };

    const canSave = activeWeight || activeIngredient || activeSkin !== 0;

    // Add to cart
    const addToCartHandler = (id, amount, product) => {
        dispatch(addToCart({ id, amount, product }));
        dispatch(openCartSidebar())
    };

    return (
        <section>
            <div className='flex items-center gap-x-6 h-[54px]'>
                <div className='h-full border-2 rounded-lg flex items-center gap-x-2'>
                    <button 
                        onClick={decrement}
                        className='h-full w-9 flex justify-center items-center hover:text-primary transition-all'
                    >
                        <FaMinus />
                    </button>

                    <button className='font-primary h-full w-9 flex justify-center items-center text-[20px]'>
                        {amount}
                    </button>
                    
                    <button 
                        onClick={increment}
                        className='h-full w-9 flex justify-center items-center hover:text-primary transition-all'
                    >
                        <FaPlus />
                    </button>
                </div>

                <div className='h-full'>
                    <button
                        type='button'
                        aria-label='add to cart' 
                        disabled={canSave}
                        onClick={() => addToCartHandler(id, amount, single_product)}
                        className={`${canSave ? 'cursor-not-allowed opacity-50' : ''} h-full py-0 btn`}
                        
                    >
                        {canSave ? 'unavailable' : 'add to cart'}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AddToCart;

AddToCart.propTypes = {
    stock: PropTypes.number,
    activeWeight: PropTypes.any ,
    activeIngredient: PropTypes.any,
    activeSkin: PropTypes.any,
    single_product: PropTypes.any
}