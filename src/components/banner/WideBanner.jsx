import banner from "../../assets/images/banner.jpg";

const WideBanner = () => {
    return (
        <section 
            style={{ backgroundImage: `url(${banner})` }}
            className='h-[300px] bg-no-repeat bg-cover bg-center mb-[40px]'
        >
            <div className="container flex flex-col items-center justify-center text-center h-full">
                <h2 className="h2 mb-5">Beauty inspired by real life.</h2>
                <p className="max-w-xl w-full">
                    Beaux is a new approach to beauty. It’s about fun and freedom and being OK with yourself today.
                    We make intuitive, uncomplicated products designed to live with you.
                </p>
            </div>
        </section>
    )
}
export default WideBanner