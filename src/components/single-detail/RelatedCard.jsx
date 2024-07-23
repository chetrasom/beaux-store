import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils/helpers';
import { Stars } from '../../components';

const RelatedCard = ({ product: { attributes: p } }) => {

    const coverImage = p?.images?.data[0]?.attributes?.url;

    return (
        <div>
            <Link to={`/shop/${p?.slug}`} className='group'>
                <figure className='relative rounded-lg overflow-hidden group-hover:shadow-hover transition-all duration-200'>
                    <img 
                        src={coverImage} 
                        alt={p?.name}
                        className='hover:scale-110 ease-out transition-all duration-300' 
                    />

                    {p?.saving > 0 && (
                        <div className='absolute top-3 left-3'>
                            <div className='font-secondary bg-[#FFD700] rounded-sm text-xs px-2.5 py-2'>
                                {`Save ${p?.saving} %`}
                            </div>
                        </div>
                    )}

                    {/* label */}
                    <div className='absolute top-4 left-4'>
                        <div className='bg-primary text-white text-[11px] uppercase px-2 py-0.5 rounded-md'>
                            Trend
                        </div>
                    </div>

                </figure>

                <div className='p-4 flex flex-col items-center justify-center gap-y-2 text-center'>

                    <div>
                        <Stars stars={p?.stars} />
                    </div>

                    <h3 className='text-lg font-secondary font-medium group-hover:text-primary group-hover:underline group-hover:underline-offset-4 transition-all'>
                        {p?.name}
                    </h3>

                    {p?.discountPrice > 0 ? (
                        <div className='flex items-center gap-x-3'>
                            <h4 className='font-secondary'>{formatPrice(p?.discountPrice)}</h4>
                            <h5 className='line-through text-sm text-black'>{formatPrice(p?.price)}</h5>
                        </div>
                    ) : (
                        <h4 className='font-secondary text-black'>{formatPrice(p?.price)}</h4>
                    )}
                </div>
            </Link>
        </div>
    )
}

export default RelatedCard;

RelatedCard.propTypes = {
    product: PropTypes.object
}