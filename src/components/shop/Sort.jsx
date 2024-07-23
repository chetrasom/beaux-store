import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { selectorToggle, setGridView, setListView } from "../../features/toggle/toggleSlice";

import { selectorFilters } from "../../features/filters/filtersSlice";
import { updateSort } from "../../features/filters/filtersSlice";
import { openFilterSidebar } from '../../features/toggle/toggleSlice';

import { CiFilter } from "react-icons/ci";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { FaListUl } from "react-icons/fa";

const Sort = ({ data }) => {
    const { grid_view } = useSelector(selectorToggle);
    const { sort } = useSelector(selectorFilters);

    const dispatch = useDispatch();

    const updateControlledSort = (e) => {
        const value = e.target.value;
        dispatch(updateSort(value));
    }

    return (
        <div className="flex flex-col gap-y-5 md:flex-row md:justify-between">

            <div className='flex items-center gap-x-4'>
                {/* Start small-device filter */}

                <button 
                    aria-label='filter'
                    onClick={() => dispatch(openFilterSidebar())}
                    className='flex items-center gap-2 md:border-r-2 md:border-accent-primary md:pr-4 lg:hidden'
                >
                    <CiFilter className="w-6 h-6" /> Filters
                </button>

                {/* End small-device filter */}

                <div className='flex items-center gap-2 ml-auto md:ml-0'>
                    <button 
                        onClick={() => dispatch(setGridView())}
                        type="button"
                        aria-label='grid view'
                        className={`${grid_view 
                            ? 'bg-primary text-white'
                            : 'bg-neutral-100 hover:bg-primary hover:text-white transition-all duration-300'
                        } w-10 h-10 rounded-full flex items-center justify-center`}
                    >
                        <TfiLayoutGrid3Alt className="w-4 h-4" />
                    </button>

                    <button 
                        onClick={() => dispatch(setListView())}
                        type="button"
                        aria-label='list view'
                        className={`${!grid_view 
                            ? 'bg-primary text-white'
                            : 'bg-neutral-100 hover:bg-primary hover:text-white transition-all duration-300'
                        } w-10 h-10 rounded-full flex items-center justify-center`}
                    >
                        <FaListUl className="w-4 h-4" />
                    </button>

                    <div className="pl-2 hidden md:block">
                        <p>{`Showing 1–${data?.length} of 22 results`}</p>
                    </div>
                </div>
            </div>
            
            <div>
                <form className='flex items-center gap-x-4'>
                    <div className='flex-1 justify-between items-center border-2 border-primary rounded-lg py-2.5 px-4 md:w-[225px] lg:w-[325px]'>
                        <select 
                            name="sort" 
                            id="sort" 
                            value={sort}
                            onChange={updateControlledSort}
                            className='focus:outline-none rounded-sm w-full'
                        >
                            <option value="default">Default sorting</option>
                            <option value="name-a">Name, A to Z</option>
                            <option value="name-z">Name, Z to A</option>
                            <option value="price-lowest">Price, low to high</option>
                            <option value="price-highest">Price, high to low</option>
                        </select>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Sort;

Sort.propTypes = {
    data: PropTypes.any
}