import type { ImageProps } from "@typings/Image"



export type Logo = {
    cover?: string,
    url?: string,
    name?: string
}


export type LogoArrayProps = {
    logos?: Logo[],
    title?: string,
    heading?: string,
    description?: string,
}


const LogoArray = ({ logos, title, heading, description }: LogoArrayProps) => {

    const Header = () => {

        return (
            <div className="w-full lg:w-1/2 px-4 mb-14 lg:mb-0">
                <span className="text-lg font-extrabold text-orange-500">
                    {heading ? heading : "Heading"}
                </span>
                <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold font-heading mt-2 mb-10">
                    {title ? title : "Title"}
                </h1>
                <p className="text-xl font-extrabold leading-8">
                    {description ? description : "Description"}
                </p>
            </div>
        )
    }

    return (
        <section className="py-26">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4 items-center">
                    <Header />
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="flex flex-wrap -mx-4">
                            {logos ? logos.map((logo, index) => {
                                return (
                                    <div key={index} className="w-1/2 md:w-1/2 px-4 mb-8">
                                        <a href={logo?.url ? logo?.url : "#"}>
                                            <div style={{
                                                backgroundImage: `url(${logo.cover})`,
                                                backgroundPosition: "center, center",
                                                backgroundSize: '50%, 50%',
                                                backgroundRepeat: 'no-repeat'
                                            }} className="flex items-center justify-center h-40 p-6 md:px-12 bg-purple-900 bg-opacity-80 hover:translate-y-4 cursor-pointer duration-200 ease-in-out transition-all border-3 border-purple-600 rounded-2xl shadow-md">
                                                <h1 className="text-center">{logo.name}</h1>
                                            </div>
                                        </a>
                                    </div>
                                )
                            }) : <></>}

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default LogoArray