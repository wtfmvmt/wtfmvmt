import { CallToAction } from "@models/typings/CallToAction"
import { Fade } from "react-awesome-reveal"
export type Feature = {
    name?: string,
    url?: string
}
export type Table = {
    title?: string,
    subTitle: string,
    price: string,
    features: Feature[],
    cta: CallToAction
}
export type TableRow = {
    tables?: Table[],
    heading?: string,
    title?: string,
}
const TableRow = ({ tables, heading, title }: TableRow) => {


    const Tables = () => {
        return (
            <div className="flex flex-wrap -mx-4">

                {tables ? tables.map((table, index) => {
                    return (
                        <div key={index} className="mt-10 w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                            <div className="flex flex-col h-full bg-black bg-opacity-70 hover:bg-opacity-100 border-3 border-indigo-900 rounded-2xl shadow-md">
                                <div className="flex flex-wrap justify-between items-center px-6 lg:px-12 py-12 border-b-3 border-purple-300">
                                    <div className="mb-4 w-full sm:w-1/2 sm:mb-0">
                                        <h2 className="text-2xl font-extrabold">{table.title ? table.title : "Title"}</h2>
                                        <p className="text-lg font-extrabold leading-7">
                                            {table?.subTitle ? table.subTitle : "subTitle"}
                                        </p>
                                    </div>
                                    <div className="flex w-full sm:w-auto items-start">
                                        <span className="pr-1 text-lg font-extrabold">$</span>
                                        <span className="text-4xl md:text-5xl font-extrabold">{table?.price ? table.price : "PRice"}</span>
                                        <span className="pl-1 text-lg font-extrabold self-end">/mo</span>
                                    </div>
                                </div>
                                <div className="mb-auto py-12 px-6 lg:px-12">
                                    {
                                        table.features.map((feature, index) => {

                                            return (
                                                <div key={index} className="flex mb-4 items-center">
                                                    <a href={feature.url} className="text-lg font-extrabold">
                                                        {feature.name}
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                                <div className="py-10 px-6 lg:px-12 border-t-3 border-indigo-900">
                                    <a
                                        className="inline-block w-full py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                                        href={table.cta?.url ? table.cta.url : "#"}
                                    >
                                        {table?.cta ? table.cta.name : "Sign Up"}
                                    </a>
                                </div>
                            </div>
                        </div>

                    )
                }) : <></>}


            </div>
        )
    }
    const Header = () => {

        return (
            <div className="text-center mb-10">
                <span className="text-lg font-extrabold text-orange-500">
                    {heading ? heading : "Heading"}
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6">
                    {title ? title : "Title"}
                </h1>
                <div className="flex items-center justify-center">
                    <span className="sm:text-xl font-extrabold">Billed Monthly</span>
                    <div className="inline-flex w-16 h-10 mx-4 px-px items-center bg-black border-3 border-indigo-900 rounded-full shadow">
                        <button className="w-7 h-7 border-3 border-indigo-900 bg-green-200 rounded-full" />
                        <button className="w-7 h-7 rounded-full focus:outline-none" />
                    </div>
                    <span className="sm:text-xl font-extrabold">Billed Annually</span>
                </div>
            </div>

        )
    }
    return (
        <section className="py-26 relative overflow-hidden">
            <div className="container px-4 mx-auto relative">
                <Header />
                <Tables />
            </div>
        </section>

    )
}

export default TableRow