export type ActionProps = {
    url?: string
}

export type CardProps = {
    title?: string,
    heading?: string,
    subHeading?: string,
    actions?: ActionProps[]
}


export const Card = ({ title, heading, subHeading, actions }: CardProps) => {
    return (
        <div className="w-full px-3 mb-6 duration-300 ease-in-out bg-black rounded-lg shadow-lg cursor-pointer select-none hover:bg-opacity-90 group bg-opacity-70 backdrop-blur-sm md:w-1/2 lg:w-1/3">
            <div className="relative p-6 text-center bg-gray-500 rounded-xl">
                <img
                    className="block mx-auto mb-5 w-28 h-28"
                    src="trizzle-assets/images/avatar-men-1.png"
                    alt=""
                />
                <h4 className="mb-3 text-xl font-bold text-white">{title ?? "TITLE_NOT_FOUND"}</h4>
                <p className="mb-3 text-gray-300">{heading ?? "HEADING_NOT_FOUND"}</p>
                <span className="inline-block px-2 py-1 mb-6 text-xs font-medium text-green-500 bg-teal-900 rounded-full">
                    {subHeading ?? "SUB_HEADING_NOT_FOUND"}
                </span>
                <div className="flex flex-wrap items-center -mx-2">
                  {
                    actions ? actions.map((action, index) => {
                        return (
                            <div key={index} className="w-full px-2 mb-2 sm:w-1/2 sm:mb-0">
                            <a
                                className="flex items-center justify-center px-2 py-3 text-sm font-bold leading-6 text-white transition duration-200 bg-gray-600 hover:bg-gray-700 rounded-xl"
                                href="#"
                            >
                                <svg
                                    width={14}
                                    height={12}
                                    viewBox="0 0 14 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.6668 0.666664H2.3335C1.80306 0.666664 1.29436 0.877378 0.919283 1.25245C0.54421 1.62752 0.333496 2.13623 0.333496 2.66666V9.33333C0.333496 9.86376 0.54421 10.3725 0.919283 10.7475C1.29436 11.1226 1.80306 11.3333 2.3335 11.3333H11.6668C12.1973 11.3333 12.706 11.1226 13.081 10.7475C13.4561 10.3725 13.6668 9.86376 13.6668 9.33333V2.66666C13.6668 2.13623 13.4561 1.62752 13.081 1.25245C12.706 0.877378 12.1973 0.666664 11.6668 0.666664ZM11.3935 2L7.4735 5.92C7.41152 5.98248 7.33779 6.03208 7.25655 6.06593C7.17531 6.09977 7.08817 6.1172 7.00016 6.1172C6.91215 6.1172 6.82502 6.09977 6.74378 6.06593C6.66254 6.03208 6.5888 5.98248 6.52683 5.92L2.60683 2H11.3935ZM12.3335 9.33333C12.3335 9.51014 12.2633 9.67971 12.1382 9.80474C12.0132 9.92976 11.8436 10 11.6668 10H2.3335C2.15668 10 1.98712 9.92976 1.86209 9.80474C1.73707 9.67971 1.66683 9.51014 1.66683 9.33333V2.94L5.58683 6.86C5.96183 7.23453 6.47016 7.4449 7.00016 7.4449C7.53016 7.4449 8.03849 7.23453 8.4135 6.86L12.3335 2.94V9.33333Z"
                                        fill="#194BFB"
                                    />
                                </svg>
                                <span className="ml-3">Email</span>
                            </a>
                        </div>
                      
                        )
                    }) : <>ACTIONS_NOT_FOUND</>
                  }
                </div>
            </div>
        </div>

    )
}
const CardGrid = () => {
    return (
        <section className="py-8">
            <div className="container px-2 mx-auto">
                <div className="flex flex-wrap gap-2 -mb-6">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>

    )
}

export default CardGrid