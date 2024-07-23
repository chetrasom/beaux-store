/* eslint-disable react/prop-types */

export default function BorderShape({ title }) {
    return (
        <div className="mb-8">
            <h5 className="font-primary text-xl">{title}</h5>
        
            {/* shape */}
            <div className="relative h-[2px] w-full bg-primary rounded-full mt-2">
                <div className="absolute top-0 left-4 w-12 h-8 overflow-hidden inline-block">
                    <div className="h-3 w-8 bg-white border-2 border-primary -rotate-45 transform origin-top-left"></div>
                </div>
            </div>
        </div>
    )
}