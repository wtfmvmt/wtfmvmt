import type { ImageProps } from "@typings/Image"

export type ActionProps = {
    url?: string,
    name?: string,
    icon?: string
}

export type CardProps = {
    title?: string,
    heading?: string,
    image?: ImageProps,
    subHeading?: string,
    actions?: ActionProps[]
}


export const Card = ({ title, heading, subHeading, actions, image }: CardProps) => {
    return (
        <div className="w-full px-3 mb-6 duration-300 ease-in-out bg-purple-900 bg-opacity-50 rounded-lg shadow-lg cursor-pointer select-none hover:scale-90 hover:bg-opacity-80 group backdrop-blur-sm md:w-1/2 lg:w-1/3">
            <div className="relative p-6 text-center bg-gray-500 rounded-xl">
                {
                    image ? <img
                        className="block mx-auto mb-5 w-28 h-28"
                        src="trizzle-assets/images/avatar-men-1.png"
                        alt=""
                    /> : <></>
                }
                <h4 className="mb-3 text-xl font-bold text-white">{title ?? "TITLE_NOT_FOUND"}</h4>
                <p className="mb-3 text-white">{heading ?? "HEADING_NOT_FOUND"}</p>
                <span className="inline-block px-2 py-1 mb-6 font-medium uppercase rounded-full text-slate-800 text-md">
                    {subHeading ?? "SUB_HEADING_NOT_FOUND"}
                </span>
                <div className="flex flex-wrap items-center -mx-2">
                    {
                        actions ? actions.map((action, index) => {
                            return (
                                <div key={index} className="w-full px-2 mb-2 sm:w-1/2 sm:mb-0">
                                    <a
                                        className="flex items-center justify-center px-2 py-3 text-sm font-bold leading-6 text-white transition duration-200 bg-gray-600 hover:bg-gray-700 rounded-xl"
                                        href={action?.url ?? "URL_NOT_FOUND"}
                                    >
                                        {action?.icon ?? "🎬"}
                                        <span className="ml-3 no-break">{action?.name ?? "NAME_NOT_FOUND"}</span>
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

export type CardGridProps = {
    cards?: CardProps[]
}

const CardGrid = ({ cards }: CardGridProps) => {

    return (
        <section className="py-8">
            <div className="container px-2 mx-auto">
                <div className="flex flex-wrap gap-2 -mb-6">
                    {
                        cards ? cards.map((card, index) => {
                            return (
                                <Card key={index} {...card} />
                            )
                        }) :
                            <>
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </>
                    }
                </div>
            </div>
        </section>

    )
}

export default CardGrid