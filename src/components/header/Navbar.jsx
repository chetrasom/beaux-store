import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { menuData } from '../../data';
import { useSelector } from 'react-redux';
import { selectorAuth } from '../../features/auth/authSlice';

const Navbar = ({ variant, closeMobileNavbar }) => {
    const { myUser } = useSelector(selectorAuth);

    return (
        <nav>
            <ul className={variant}>
                {menuData.map((item) => {
                    return (
                        <li key={item.id}>
                            <NavLink 
                                to={item.url} 
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive 
                                    ? "font-secondary font-bold text-[15px] uppercase text-primary" 
                                    : "font-secondary font-bold text-[15px] uppercase hover:text-primary transition-all"
                                }
                                onClick={closeMobileNavbar}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    )
                })}

                {myUser === true && (
                    <li>
                        <NavLink 
                            to={'/checkout'} 
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive 
                                ? "font-primary uppercase tracking-wider text-primary" 
                                : "font-primary uppercase tracking-wider hover:text-primary transition-all"
                            }
                            onClick={closeMobileNavbar}
                        >
                            Checkout
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;

Navbar.propTypes = {
    variant: PropTypes.string,
    closeMobileNavbar: PropTypes.func
}