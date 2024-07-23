import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { AiOutlineHome } from "react-icons/ai";

import bannerBackground from "../../assets/images/banner.jpg";

const BreadCrumb = ({ heading ,title, product }) => {
    return (
        <div
            style={{ backgroundImage: `url(${bannerBackground})` }} 
            className="h-[150px] mt-24 md:mt-28 lg:mt-[124px] bg-no-repeat bg-cover bg-center"
        >
            <div className="h-full flex flex-col items-center justify-center text-center">
                <h5 className="uppercase font-semibold tracking-wider text-xl pb-3">
                    {heading}
                </h5>

                <div className="flex flex-wrap justify-center gap-2">
                    <Link to='/' className="flex gap-x-1 group">
                        <AiOutlineHome className="w-5 h-5 group-hover:text-primary" />
                        <span className="group-hover:text-primary">Home</span>
                        
                    </Link>
                    <span>/</span>
                    {product && (
                        <Link to='/shop' className="flex gap-x-2 group">
                            <span className="group-hover:text-primary">Shop</span>
                            <span>/</span>
                        </Link>
                    )}

                    <span className="text-gray-500 capitalize">{title}</span>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb;

BreadCrumb.propTypes = {
    heading: PropTypes.string,
    title: PropTypes.string,
    product: PropTypes.bool
}