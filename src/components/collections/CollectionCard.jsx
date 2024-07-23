import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CollectionCard = ({ image, title, url }) => {
    return (
        <div className='relative rounded-lg overflow-hidden group'>
            <img src={image} alt="collection 1" />

            <div className='group-hover:opacity-0 group-hover:invisible ease-in transition-all duration-200 absolute inset-0 z-10 flex flex-col justify-end items-end pr-6 pt-7 pb-4 md:pb-2 md:pr-4 lg:pb-4 lg:pr-6'>
                <div>
                    <h3 className='uppercase font-normal text-neutral-primary text-xl pointer-events-none tracking-wider md:text-base lg:text-xl'>
                        {title}
                    </h3>
                </div>
            </div>

            <div className='bg-primary/40 absolute inset-0 z-10 flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible ease-in transition-all duration-200'>
                <div className='bg-white w-[180px] h-[180px] rounded-full flex flex-col items-center justify-center gap-y-2'>
                    <h3 className='uppercase font-normal text-xl pointer-events-none tracking-widest lg:text-[22px]'>
                        {title}
                    </h3>
                    <Link 
                        to={url}
                        className='uppercase text-xs tracking-widest text-light underline underline-offset-4 hover:text-primary transition-all lg:text-[14px]'
                    >
                        View More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard;

CollectionCard.propTypes = {
    image: PropTypes.any,
    title: PropTypes.string,
    url: PropTypes.string,
}