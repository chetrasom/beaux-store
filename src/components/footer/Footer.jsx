import { Link } from "react-router-dom";
import { SlLocationPin, SlClock, SlPhone,  } from "react-icons/sl";
import { 
    IoMailOutline, IoChevronForward, 
    IoLogoTwitter ,IoLogoFacebook, IoLogoInstagram, IoLogoYoutube 
} from "react-icons/io5";
import Credit from "../Credit";

const Footer = () => {
    // py-[50px] md:pt-[75px] lg:pt-[100px]
    return (
        <>
            <footer className="bg-[#f8f7f7] py-14">
                <div className="container">
                    <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
                        <div className="font-secondary">
                            <h3 className="uppercase text-lg pb-4">our store location</h3>
                            <div className="space-y-2">
                                <div className="flex items-start gap-x-3">
                                    <SlLocationPin className="w-5 h-5" />
                                    <span>Toul Kork, Phnom Penh, Cambodia</span>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <SlClock />
                                    <span>08:00 AM - 06:00 PM</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="uppercase text-lg pb-4">contact us</h3>
                            <div className="space-y-2">
                                <div className="flex items-center gap-x-3">
                                    <SlPhone />
                                    <span>(+855) 12 888 999</span>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <IoMailOutline />
                                    <span>beaux168@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="uppercase text-lg pb-4">info links</h3>
                            <div className="space-y-2">
                                <Link to='/' className="flex items-center gap-x-4 hover:text-primary hover:pl-1 transition-all">
                                    <IoChevronForward />
                                    <span>Homepage</span>
                                </Link>
                                <Link to='/about' className="flex items-center gap-x-4 hover:text-primary hover:pl-1 transition-all">
                                    <IoChevronForward />
                                    <span>About</span>
                                </Link>
                                <Link to='/shop' className="flex items-center gap-x-4 hover:text-primary hover:pl-1 transition-all">
                                    <IoChevronForward />
                                    <span>Shop</span>
                                </Link>
                                <Link to='/contact' className="flex items-center gap-x-4 hover:text-primary hover:pl-1 transition-all">
                                    <IoChevronForward />
                                    <span>Contact</span>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="uppercase text-lg pb-4">share with us</h3>
                            <div>
                                <ul className="flex items-center gap-x-4">
                                    <li>
                                        <Link to='/' className="block hover:text-primary hover:translate-x-1 transition-all">
                                            <IoLogoTwitter className="w-6 h-6" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/' className="block hover:text-primary hover:translate-x-1 transition-all">
                                            <IoLogoFacebook className="w-6 h-6" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/' className="block hover:text-primary hover:translate-x-1 transition-all">
                                            <IoLogoInstagram className="w-6 h-6" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/' className="block hover:text-primary hover:translate-x-1 transition-all">
                                            <IoLogoYoutube className="w-6 h-6" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <Credit />
        </>
    )
}

export default Footer