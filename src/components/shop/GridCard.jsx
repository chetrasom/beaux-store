import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { IoBagHandleOutline, IoHeartOutline } from "react-icons/io5";
import { formatPrice } from '../../utils/helpers';
import { Stars } from '../../components';

const GridCard = ({ product: { attributes: p } }) => {

    const coverImage = p?.images?.data[0]?.attributes?.url;
    const behindImage = p?.thumbnail?.data[1]?.attributes?.url;
    // const behindImage = p?.images?.data[1]?.attributes?.url;

    return (
        <div className='border-b-2 border-primary/60 ease-in transition-all duration-200'>
            <Link to={`/shop/${p?.slug}`} className='group'>
                <figure className='relative group rounded-lg overflow-hidden group-hover:shadow-hover transition-all duration-200'>
                    <img 
                        src={coverImage} 
                        alt={p?.name} 
                        className='group-hover:opacity-0 group-hover:invisible group-hover:ease-in group-hover:transition-all group-hover:duration-300' />

                    <img 
                        src={behindImage} 
                        alt={p?.name}
                        className='absolute top-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-110 ease-in transition-all duration-200'
                    />
                    {/* Add to cart icon */}
                    {/* <div className='absolute inset-0 z-10 flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:ease-in group-hover:transition-all group-hover:duration-300'>
                        <div className='flex items-start gap-x-2'>
                            <button 
                                aria-label='add to cart'
                                className='bg-white rounded-sm w-9 h-9 shadow-light flex items-center justify-center hover:bg-primary hover:text-accent transition-all'
                            >
                                <IoBagHandleOutline className='w-5 h-5' />
                            </button>
                            <button 
                                aria-label='add to wishlist'
                                className='bg-white rounded-sm w-9 h-9 shadow-light flex items-center justify-center hover:bg-primary hover:text-accent transition-all'
                            >
                                <IoHeartOutline />
                            </button>
                        </div>
                    </div> */}
                </figure>

                <div className='p-4 flex flex-col items-center justify-center gap-y-2 text-center'>
                    <div>
                        <Stars stars={p?.stars} />
                    </div>

                    <h3 className='text-lg font-secondary group-hover:text-primary group-hover:underline group-hover:underline-offset-4 transition-all'>
                        {p?.name}
                    </h3>

                    {p?.discountPrice > 0 ? (
                        <div className='flex items-center gap-x-3'>
                            <h4 className='font-secondary'>{formatPrice(p?.discountPrice)}</h4>
                            <h5 className='line-through text-sm text-gray-400'>{formatPrice(p?.price)}</h5>
                        </div>
                    ) : (
                        <h4 className='font-secondary'>{formatPrice(p?.price)}</h4>
                    )}
                </div>
            </Link>
        </div>
    )
}

export default GridCard;

GridCard.propTypes = {
    product: PropTypes.object
}