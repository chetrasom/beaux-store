import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectorToggle } from '../../features/toggle/toggleSlice';
import { closeFilterSidebar } from '../../features/toggle/toggleSlice';
import { selectorFilters } from '../../features/filters/filtersSlice';
import { updateFilters, clearFilters } from '../../features/filters/filtersSlice';

import { LiaTimesSolid } from "react-icons/lia";

import { Logo } from '../../components';
import { getUniqueValues, formatPrice } from '../../utils/helpers';

const FiltersMobile = () => {
    const dispatch = useDispatch();
    const { isFilterSidebar } = useSelector(selectorToggle);
    const {
        filters: {
            text,
            product_type,
            brand,
            min_price,
            max_price,
            price,
            shipping,
        },
        all_products
    } = useSelector(selectorFilters);

    // getUniqueValues product_type
    const productsType = getUniqueValues(all_products, 'product_type');
    const brands = getUniqueValues(all_products, 'brand');

    const updateFiltersHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        // work with button
        if (name === 'product_type') {
            value = e.target.textContent;
        }

        if (name === 'brand') {
            value = e.target.textContent;
        }

        // work with number
        if (name === 'price') {
            value = Number(value)
        }

        // work with checkbox
        if (name === 'shipping') {
            value = e.target.checked
        }

        dispatch(updateFilters({ name, value }))
    }

    const clearFiltersHandler = () => {
        dispatch(clearFilters())
    }

    return (
        <div className={`${isFilterSidebar 
            ? 'bg-black/50 pointer-events-auto' 
            : 'bg-transparent pointer-events-none'} fixed inset-0 z-50 ease-linear transition-all duration-200`
        }>
            
            <div className={`${isFilterSidebar 
                ? 'translate-x-0 visible' 
                : '-translate-x-full invisible'} 
                bg-white absolute top-0 left-0 z-50 max-w-[350px] w-full h-full ease-in transition-all duration-300 py-5 px-4`
            }>
                
                <div className="flex items-center justify-between mb-8">
                    <Logo />

                    <button 
                        aria-label="close mobile navbar"
                        onClick={() => dispatch(closeFilterSidebar())}
                        className="hover:text-primary transition-all"
                    >
                        <LiaTimesSolid className="w-7 h-7" />
                    </button>
                </div>

                {/* Filters */}
                <form onSubmit={(e) => e.preventDefault()} className='h-[90%] overflow-y-scroll'>
                    <ul className='space-y-4'>
                        {/* Search */}
                        <li>
                            <div>
                                <input 
                                    type="text" 
                                    name="text" 
                                    id="text"
                                    value={text}
                                    onChange={updateFiltersHandler}
                                    placeholder="Search products..."
                                    className="w-full border-2 border-primary focus:outline-primary rounded-lg px-4 py-3 text-[15px]"
                                    autoComplete="off"
                                />
                            </div>
                        </li>

                        {/* Products type */}
                        <li>
                            <h5 className=" text-lg">Product type</h5>
                            <div className='flex items-center justify-center gap-2 border-t-2 border-primary pt-4 mt-2'>
                                {productsType.map((p_type, index) => {
                                    return (
                                        <button
                                            key={index}
                                            aria-label="products type"
                                            type="button"
                                            name="product_type" // specific name
                                            className={`${product_type === p_type.toLowerCase() 
                                                ? 'bg-primary text-white hover:bg-primary' 
                                                : 'bg-gray-100 text-neutral-600 hover:bg-primary'} 
                                                w-full rounded-lg text-center capitalize font-medium px-4 py-1 transition-all`}
                                            onClick={updateFiltersHandler}
                                        >
                                            {p_type}
                                        </button>
                                    )
                                })}
                            </div>
                        </li>

                        {/* Brand */}
                        <li>
                            <h5 className="text-lg">Brand</h5>
                            <div className='flex flex-wrap gap-2 border-t-2 border-primary pt-4 mt-2'>
                                {brands.map((item, index) => {
                                    return (
                                        <button
                                            key={index}
                                            aria-label="brand"
                                            type="button"
                                            name="brand" // specific name
                                            className={`${brand === item.toLowerCase() 
                                                ? 'bg-primary text-white hover:bg-primary' 
                                                : 'bg-gray-100 text-neutral-600 hover:bg-primary'} 
                                                max-w-max rounded-lg text-center capitalize font-medium px-4 py-1 transition-all`}
                                            onClick={updateFiltersHandler}
                                        >
                                            {item}
                                        </button>
                                    )
                                })}
                            </div>
                        </li>

                        {/* Price */}
                        <li>
                            <div className='border-t-2 border-primary pt-4 mt-2'>
                                <h5 className="text-lg flex justify-between">
                                    <span>Current Price</span>
                                    <span className='text-primary'>{formatPrice(price)}</span>
                                </h5>
                            </div>

                            <input 
                                type="range" 
                                name="price" 
                                id="price"
                                min={min_price}
                                max={max_price}
                                value={price}
                                onChange={updateFiltersHandler}
                                className="w-full h-2 bg-gray-200 accent-primary appearance-none rounded-full"
                            />
                        </li>

                        {/* Shipping */}
                        <li>
                            <div className='flex justify-between border-t-2 border-primary pt-4 mt-2'>
                                <h5 className="text-lg">
                                    Shipping
                                </h5>
                                <div className='flex items-center justify-between'>
                                    {/* <label htmlFor="shipping">Free Shipping</label> */}
                                    <input 
                                        type="checkbox" 
                                        name="shipping" 
                                        id="shipping"
                                        checked={shipping}
                                        onChange={updateFiltersHandler}
                                        className="w-4 h-4"
                                    />
                                </div>
                            </div>
                        </li>

                        {/* Reset filters */}
                        <li>
                            {/* <h5 className="font-primary text-lg tracking-wider border-l-2 border-primary pl-4">
                                Reset
                            </h5> */}

                            <button
                                type="button"
                                aria-label="clear filters"
                                onClick={clearFiltersHandler}
                                className="bg-accent rounded-lg w-full capitalize py-3 hover:bg-primary transition-all"
                            >
                                reset filters
                            </button>
                        </li>

                    </ul>
                </form>

            </div>
        </div>
    )
}

export default FiltersMobile;

FiltersMobile.propTypes = {
    data: PropTypes.any
}