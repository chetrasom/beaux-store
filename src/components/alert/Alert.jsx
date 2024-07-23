/* eslint-disable react/prop-types */

export default function Alert({ show }) {
    return (
        <div 
            className={`${show} bg-accent py-1.5 transition-all ease-linear duration-300`}
            // className={`${show} bg-white fixed top-0 left-0 w-full z-50 py-5 transition-all ease-linear duration-300`}
        >
            <div className="container text-center">
                <span className="text-xs tracking-wide">25% OFF ON ALL PRODUCTS ENTER CODE: CUSBEAUX</span>
            </div>
        </div>
    )
}