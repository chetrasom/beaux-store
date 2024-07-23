import PropTypes from 'prop-types';

const Heading = ({ subTitle, title }) => {
    return (
        <div className="relative text-center pb-4 md:pb-6 lg:pb-12">
            <h5 className="capitalize font-accent font-medium text-primary text-[32px] lg:text-[36px]">
                {subTitle}
            </h5>
           
            <h2 className="capitalize h2">
                {title}
            </h2>
        </div>
    )
}

export default Heading;

Heading.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
}