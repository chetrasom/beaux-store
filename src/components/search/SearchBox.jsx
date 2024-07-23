import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { closeSearchBox, selectorToggle } from "../../features/toggle/toggleSlice";

import { IoSearchOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

const SearchBox = () => {
    const dispatch = useDispatch();
    const { isSearchBox } = useSelector(selectorToggle);

    const [keywords, setKeywords] = useState("");
    const navigate = useNavigate();

    const searchKeywords = (e) => {
        e.preventDefault()

        if(!keywords) {
            navigate('/')
            setKeywords("")
        }
        else {
            navigate(`/search?q=${keywords}`)
            setKeywords("")
        }
    }

    return (
        <div className={`${isSearchBox ? 'h-28 translate-y-0 visible' : '-translate-y-full -h-full invisible'}
        bg-accent-primary fixed top-0 left-0 w-full z-50 flex justify-center items-center gap-x-4 ease-in-out transition-all`}>
            <div className='w-[300px] md:w-[400px] lg:w-[500px]'>
                <form 
                    onSubmit={searchKeywords}
                    className='h-12 flex'
                >
                    <input 
                        type="text" 
                        name="search" 
                        id="search" 
                        autoComplete="off"
                        className="w-full h-full focus:outline-none px-5 text-[15px] rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none"
                        placeholder='Search beauty product...'
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                    />
                    <button
                        aria-label="search"
                        onClick={() => dispatch(closeSearchBox())}
                        className="h-full px-5 capitalize text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-tr-lg rounded-br-lg text-center transition-all"
                    >
                        <IoSearchOutline className="w-5 h-5" />
                    </button>
                </form>
            </div>

            <div className="absolute top-2 right-2 md:top-4 md:right-6">
                <button
                    type='button'
                    aria-label='close search box'
                    onClick={() => dispatch(closeSearchBox())}
                    className='block text-pink-600'
                >
                    <IoIosCloseCircleOutline className="w-8 h-8" />
                </button>
            </div>
        </div>
    )
}

export default SearchBox;