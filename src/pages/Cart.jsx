import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { clearCart, selectorCart } from '../features/cart/cartSlice';
import { selectorAuth } from '../features/auth/authSlice';

// import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { IoArrowUndoOutline } from "react-icons/io5";

import { formatPrice } from '../utils/helpers';
// components
import { BreadCrumb } from '../components';
import ProductItem from '../components/cart/ProductItem';

const Cart = () => {
    const dispatch = useDispatch();
    const { cart, total_amount, shipping_fee } = useSelector(selectorCart);
    const { myUser } = useSelector(selectorAuth);
    
    return (
        <>
            <BreadCrumb 
                heading={'your shopping cart'}
                title={'cart'}
            />

            <div className='container pt-8 pb-10'>

                {/* Cart empty */}
                {cart.length < 1 ? (
                    <div className='flex flex-col items-center justify-center gap-y-8 pb-10'>
                        <div className='text-center space-y-4'>
                            <h2 className='text-3xl md:text-4xl my-6'>Your cart is empty</h2>
                            <div>
                                <Link 
                                    to='/shop'
                                    className="block mx-auto bg-neutral max-w-max uppercase tracking-widest text-[15px] text-white py-3 px-5 rounded-lg hover:bg-primary shadow-lg transition-all md:text-base"
                                >
                                    continue shopping
                                </Link>
                            </div>
                        </div>

                        <div className='text-center'>
                            <h3 className='font-secondary text-2xl mb-2'>Have an account?</h3>
                            <p>
                                <Link to='#' className='text-primary underline underline-offset-2 transition-all'>
                                Log in</Link> to check out faster.
                            </p>
                        </div>
                    </div>
                    
                ) : (
                    
                    <div>
                        {/* Heading */}
                        <div className='text-center space-y-2 mb-14'>
                            <h2 className='h2'>Your cart</h2>
                            <div>
                                <Link 
                                    to='/shop'
                                    className='text-primary underline underline-offset-8 transition-all hover:text-accent'>
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>

                        {/* table */}
                        <div className='flex flex-col gap-6 lg:flex-row'>
                            <div className='flex-1 md:border rounded-lg'>
                                {/* heading */}
                                <div className='grid grid-cols-2 md:grid-cols-4 font-primary capitalize text-lg border-b py-2 px-4 mb-4 bg-accent rounded-lg overflow-hidden'>
                                    <div className='md:col-span-2'>product</div>
                                    <div className='hidden md:col-span-1 md:block'>quantity</div>
                                    <div className='text-right md:col-span-1 md:text-center'>total</div>
                                </div>

                                {/* product item */}
                                <div>
                                    {cart.map((cartItem, index) => {
                                        return (
                                            <ProductItem key={index} cartItem={cartItem} />
                                        )
                                    })}
                                </div>

                                {/* Continue shop & clear cart */}
                                <div className='mt-6 flex flex-col gap-y-3 md:flex-row md:justify-between p-4 border-t'>
                                    <Link 
                                        to='/shop'
                                        className='capitalize bg-primary text-white text-center rounded-lg p-4 flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition-all'
                                    >
                                        <IoArrowUndoOutline className='w-5 h-5' /> Continue Shopping
                                    </Link>

                                    
                                    <button 
                                        aria-label='clear all items' 
                                        className='flex items-center justify-center gap-2 capitalize bg-neutral text-white rounded-lg p-4 hover:bg-red-500 transition-all'
                                        onClick={() => dispatch(clearCart())}
                                    >
                                        <MdDeleteForever className='w-6 h-6' /> Clear Shopping Cart
                                    </button>
                                </div>
                            </div>

                            <div className='flex-1 lg:max-w-[30%] overflow-hidden'>
                                <div className='border rounded-lg overflow-hidden pb-4'>
                                    <div className='border-b py-2 px-4 bg-accent'>
                                        <h3 className='text-lg'>Cart totals</h3>
                                    </div>
                                    <div className='px-4 divide-y'>
                                        <div className='flex items-center justify-between py-3'>
                                            <span>Subtotal</span>
                                            <span className='font-primary'>{formatPrice(total_amount)}</span>
                                        </div>
                                        <div className='flex items-center justify-between py-3'>
                                            <span>Shipping fee</span>
                                            <span className='font-primary'>{formatPrice(shipping_fee)}</span>
                                        </div>
                                        <div className='flex items-center justify-between py-3'>
                                            <span>Total</span>
                                            <span className='font-primary'>{formatPrice(total_amount + shipping_fee)}</span>
                                        </div>
                                    </div>

                                    <div className='px-4 mt-5'>
                                        {myUser === true ? (
                                            <Link 
                                                to='/checkout' 
                                                className='block capitalize bg-green-500 text-white text-center rounded-lg p-4 hover:bg-primary transition-all'
                                            >
                                                proceed to checkout
                                            </Link>
                                        ) : (
                                            <Link 
                                                to='/signin' 
                                                className='block capitalize bg-neutral-primary text-white text-center rounded-lg py-4 hover:bg-primary transition-all'
                                            >
                                                log in to make a purchase
                                            </Link>
                                        )}  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}

export default Cart;