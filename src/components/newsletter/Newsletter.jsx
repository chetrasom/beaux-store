import newsLetterBanner from "../../assets/images/newsletter-banner.jpg";

const Newsletter = () => {
    return (
        <section className="pb-[60px]">
            <div className="container">
                <div 
                    style={{ backgroundImage: `url(${newsLetterBanner})` }}
                    className="h-[350px] bg-no-repeat bg-cover bg-center rounded-xl flex flex-col items-center justify-center text-center p-4"
                >
                    <h3 className="uppercase text-2xl tracking-wider pb-4 md:text-[26px] lg:pb-4">
                        SIGN-UP THE BEAUTY FAN CLUB TODAY
                    </h3>
                    <p className="text-stone-600 pb-8 lg:pb-6 max-w-md mx-auto">
                        Subscribe to our mailing list to be notified about news, collections and special offers
                    </p>
                    <div className="w-full md:max-w-lg">
                        {/* Submit email using Formspree */}
                        <form 
                            action="https://formspree.io/f/mjvnbqoa"
                            method="POST"
                        >
                            <div className="flex items-start h-12 rounded-sm overflow-hidden lg:h-14">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email"
                                    placeholder="Your email address"
                                    autoComplete="off"
                                    className="w-full h-full focus:outline-none font-secondary text-[15px] px-5 rounded-tl-lg rounded-bl-lg"
                                />
                            
                                <button 
                                    type="submit"
                                    className="h-full px-5 uppercase text-xs md:text-sm tracking-wider text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-tr-lg rounded-br-lg text-center transition-all"
                                >
                                    subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter