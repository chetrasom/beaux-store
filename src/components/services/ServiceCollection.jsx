import { serviceCollections } from "../../data"

const ServiceCollection = () => {
    return (
        <section className="py-10 lg:py-0 lg:h-36 lg:border-b">
            <div className="h-full container">
                <div className="h-full grid grid-cols-1 gap-y-8 md:grid-cols-3 lg:divide-x">
                    {serviceCollections.map((service) => {
                        return (
                            <div 
                                key={service.id} 
                                className="flex items-center justify-center text-center gap-4 md:flex-col lg:flex-row lg:text-left"
                            >
                                <figure className="overflow-hidden">
                                    <img src={service.img} alt="service-icon" />
                                </figure>
                                <div>
                                    <h6 className="font-semibold text-lg pb-[2px]">{service.title}</h6>
                                    <span className="text-sm text-neutral-primary">{service.detail}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ServiceCollection