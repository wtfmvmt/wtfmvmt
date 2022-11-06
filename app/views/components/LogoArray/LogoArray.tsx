import type { LogoArrayProps } from "@typings/LogoArray"
import type { ComponentType } from "@typings/Component"


const LogoArray: ComponentType<LogoArrayProps> = ({ logos, title, heading, description }: LogoArrayProps) => {

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
        <section className="py-26 mt-10">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4 items-center">
                    <Header />
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="flex flex-wrap -mx-4">
                            {logos ? logos.map((logo, index) => {
                                return (
                                    <div key={index} className="w-1/2 md:w-1/2 px-4 mb-8">
                                        <a className="flex flex-col" href={logo?.url ? logo?.url : "LOGO_URL_NOT_FOUND"}>
                                            <div style={{
                                                backgroundImage: `url(${logo.image?.src})`,
                                                backgroundPosition: "center, center",
                                                backgroundSize: '75%, 75%',
                                                backgroundRepeat: 'no-repeat',
                                                objectFit: 'contain'
                                            }} className="flex items-center justify-center h-40 p-6 md:px-12 bg-purple-900 bg-opacity-80 hover:-translate-y-4 cursor-pointer duration-500 ease-in-out transition-all border-3 border-purple-600 rounded-2xl shadow-2xl">
                                                <h1 className="text-center bottom-10">{logo?.name ?? "LOGO_NAME_NOT_FOUND"}</h1>
                                            </div>
                                        </a>
                                    </div>
                                )
                            }) : <>LOGOS_NOT_FOUND</>}

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default LogoArray