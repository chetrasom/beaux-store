import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoBagHandleOutline, IoHeartOutline } from "react-icons/io5";
import { formatPrice } from '../../utils/helpers';
import { Stars } from '../../components';

const FiltersBannerCard = ({ product: { attributes: p } }) => {
    
    const coverImage = p?.images?.data[0]?.attributes?.url;
    const behindImage = p?.thumbnail?.data[1]?.attributes?.url;

    return (
        <div className='border-2 border-accent rounded-lg overflow-hidden'>
            <figure className='relative group rounded-sm overflow-hidden'>
                <img 
                    src={coverImage} 
                    alt={p?.name} 
                    className='group-hover:opacity-0 group-hover:invisible group-hover:ease-in group-hover:transition-all group-hover:duration-300' />

                <img 
                    src={behindImage} 
                    alt={p?.name}
                    className='absolute top-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-110 ease-in transition-all duration-200'
                />

                <div className='absolute inset-0 z-10 flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:ease-in group-hover:transition-all group-hover:duration-300'>
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
                </div>
            </figure>

            <div className='p-4 flex flex-col items-center justify-center gap-y-2 text-center'>
                <Link 
                    to={`/shop/${p?.slug}`}
                    className='text-lg font-secondary font-medium hover:text-primary hover:underline hover:underline-offset-4 transition-all'
                >
                    {p?.name}
                </Link>

                <div>
                    <Stars stars={p?.stars} />
                </div>

                {p?.discountPrice > 0 ? (
                    <div className='flex items-center gap-x-3'>
                        <h4 className='font-secondary'>{formatPrice(p?.discountPrice)}</h4>
                        <h5 className='line-through text-sm text-gray-400'>{formatPrice(p?.price)}</h5>
                    </div>
                ) : (
                    <h4 className='font-secondary'>{formatPrice(p?.price)}</h4>
                )}

            </div>
        </div>
    )
}

export default FiltersBannerCard;

FiltersBannerCard.propTypes = {
    product: PropTypes.object
}