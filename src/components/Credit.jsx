
const Credit = () => {
    const getYear = new Date().getFullYear();

    return (
        <div className="text-[15px] container border-t py-4">
            <h4 className='flex flex-wrap justify-center items-center text-center gap-1 font-secondary md:justify-center'>
                <span>Created By</span>
                <span className='font-semibold text-primary tracking-wider'>CHETRA SOM</span> | All Rights Reserved {getYear}
            </h4>
        </div>
    )
}

export default Credit;