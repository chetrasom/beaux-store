import { useDispatch, useSelector } from "react-redux";
import { openCartSidebar, openSearchBox } from "../../features/toggle/toggleSlice";
import { selectorCart } from "../../features/cart/cartSlice";
import { selectorAuth, signOutLocalStorage } from "../../features/auth/authSlice";

import { IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";

import { Link } from 'react-router-dom';

const ActionNavbar = () => {
    const dispatch = useDispatch();
    const { total_items } = useSelector(selectorCart);
    const { myUser } = useSelector(selectorAuth);

    return (
        <ul className="flex items-center gap-x-8">
            <li>
                <div>
                    <button
                        type="button"
                        aria-label="search"
                        onClick={() => dispatch(openSearchBox())}
                        className="block"
                    >
                        <IoSearchOutline className="w-6 h-6" />
                    </button>
                </div>
            </li>

            <li>
                <div className="relative">
                    <button 
                        aria-label="open view cart" 
                        className="block"
                        onClick={() => dispatch(openCartSidebar())}
                    >
                        <IoBagHandleOutline className="w-6 h-6" />
                    </button>
                    <div className="absolute -top-2 -right-2.5 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center">
                        <span className="block text-[11px]">{total_items}</span>
                    </div>
                </div>
            </li>

            {myUser === true ? (
                <li>
                    <div>
                        <button
                            type="button"
                            aria-label="sign out"
                            onClick={() => dispatch(signOutLocalStorage())}
                            className="block"
                        >
                            <div className="flex items-end gap-x-1">
                                <HiOutlineUser className="w-6 h-6 text-green-500" />
                                <div className="hidden lg:inline-flex text-[11px] tracking-wider bg-green-500 text-white rounded-md px-1.5 py-0.5">
                                    LOGOUT
                                </div>
                            </div>
                        </button>
                    </div>
                </li>
            ) : (
                <li className="hidden md:block">
                    <Link to='/signin'>
                        <div className="flex items-end gap-x-1">
                            <HiOutlineUser className="w-6 h-6" />
                            <div className="hidden lg:inline-flex text-[11px] tracking-wider bg-primary text-white rounded-md px-1.5 py-0.5">
                                LOGIN
                            </div>
                        </div>
                    </Link>
                </li>
            )}

        </ul>
    )
}

export default ActionNavbar