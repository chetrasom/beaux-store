import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { toggleAmount, removeItem } from "../../features/cart/cartSlice";
// import { IoMdClose } from "react-icons/io";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { formatPrice } from "../../utils/helpers";

const CartSidebarItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    const id = cartItem?.id;

    const increaseAmount = () => {
        dispatch(toggleAmount({ id: id, type: 'INC' }))
    }

    const decreaseAmount = () => {
        dispatch(toggleAmount({ id: id, type: 'DEC' }))
    }

    return (
        <div className="flex border-b border-gray-200 pb-2 md:pb-4">
            <div className="w-full h-[100px] flex items-start gap-x-3">
                {/* image */}
                <Link to={`/shop/${cartItem?.id}`} className="h-full">
                    <img 
                        src={cartItem?.image}
                        alt={cartItem?.name}
                        className="max-w-[80px] h-full rounded-lg overflow-hidden border-2 border-accent hover:border-primary transition-all"
                    />
                </Link>

                {/* Items */}
                <div className="w-full h-full flex flex-col justify-between">
                    {/* title */}
                    <div>
                        <Link 
                            to={`/shop/${cartItem?.id}`} 
                            className='block max-w-[225px] underline-offset-2 hover:underline hover:text-primary transition-all'
                        >
                            {cartItem?.name}
                        </Link>
                    </div>

                    {/* add to cart and total_price */}
                    <div className="flex items-end justify-between">

                        <div className="flex items-end gap-x-2">
                            {/* add to cart */}
                            <div className='h-10 md:h-11 max-w-max border-2 rounded-lg flex items-center gap-x-2 overflow-hidden'>
                                <button 
                                    type="button"
                                    aria-label="decrease amount"
                                    onClick={decreaseAmount}
                                    className='h-full w-8 flex justify-center items-center hover:text-primary transition-all'
                                >
                                    <AiOutlineMinus />
                                </button>

                                <button className='font-primary h-full w-6 flex justify-center items-center text-base'>
                                    {cartItem?.amount}
                                </button>
                                
                                <button 
                                    type="button"
                                    aria-label="increase amount"
                                    onClick={increaseAmount}
                                    className='h-full w-8 flex justify-center items-center hover:text-primary transition-all'
                                >
                                    <AiOutlinePlus />
                                </button>
                            </div>

                            {/* delete button */}
                            <button 
                                aria-label="delete item"
                                onClick={() => dispatch(removeItem(id))}
                                className="h-9 text-red-500 hover:text-black transition-all"
                            >
                                <MdDeleteForever className="w-7 h-7" />
                            </button>
                        </div>

                        {/* total_price */}
                        <h4>{formatPrice(cartItem?.price * cartItem?.amount)}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartSidebarItem;

CartSidebarItem.propTypes = {
    cartItem: PropTypes.object
}


{/* Add to cart */}
{/* <div className="pb-2">
<div className='flex items-start gap-x-3'>
    <div className='max-w-max h-9 border border-accent rounded-sm'>
        <button 
            type="button"
            aria-label="decrease amount"
            onClick={decreaseAmount}
            className='h-full px-2 hover:text-primary transition-all'
        >
            <AiOutlineMinus />
        </button>

        <span className='h-full px-2 text-base'>{cartItem?.amount}</span>
        
        <button 
            type="button"
            aria-label="increase amount"
            onClick={increaseAmount}
            className='h-full px-2 hover:text-primary transition-all'
        >
            <AiOutlinePlus />
        </button>
    </div>

    
    <button 
        aria-label="delete item"
        onClick={() => dispatch(removeItem(id))}
        className="h-9 text-red-500 hover:text-accent transition-all"
    >
        <MdDeleteForever className="w-6 h-6" />
    </button>
</div>
</div> */}

{/* price and subtotal */}
{/* <div className="flex justify-between px-2">
<span className="text-sm">{formatPrice(cartItem?.price)}</span>
<h4>{formatPrice(cartItem?.price * cartItem?.amount)}</h4>
</div> */}