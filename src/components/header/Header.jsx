import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { openSidebar } from "../../features/toggle/toggleSlice";
import { CgMenuLeft } from "react-icons/cg";
import Alert from "../alert/Alert";
import { Logo, Navbar, ActionNavbar } from '../../components';

const Header = () => {
    const [show, setShow] = useState("backdrop-blur-sm");
    const [lastScrollY, setLastScrollY] = useState(0);
    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY) {
                setShow("invisible -translate-y-full")
            } else {
                setShow("visible translate-y-0")
            }
        } else {
            setShow("backdrop-blur-sm")
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        }
    }, [controlNavbar, lastScrollY]);

    return (
        <>
            <header className={`${show} bg-white fixed top-0 left-0 w-full z-50 py-0 transition-all ease-linear duration-300 border-b`}>

                <Alert show={show} />

                <div className="container">
                    <div className="flex items-center justify-between py-4 md:py-5 lg:py-6">
                        <button
                            onClick={() => dispatch(openSidebar())} 
                            aria-label="open sidebar" 
                            className="lg:hidden text-neutral"
                        >
                            <CgMenuLeft className="w-7 h-7" />
                        </button>

                        <div className="pl-14 md:pl-16 lg:pl-0">
                            <Logo />
                        </div>

                        <div className="hidden lg:flex">
                            <Navbar variant={'flex items-center gap-x-8'} />
                        </div>

                        <div>
                            <ActionNavbar />
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;