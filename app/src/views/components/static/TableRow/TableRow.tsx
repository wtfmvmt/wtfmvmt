import type { ComponentType } from "@typings/Component"
import type { TableRowProps } from "@typings/TableRow"

const TableRow: ComponentType<TableRowProps> = ({ tables, heading, title }: TableRowProps) => {

    const Tables = () => {
        return (
            <div className="flex flex-wrap -mx-4">

                {tables ? tables.map((table, index) => {
                    return (
                        <div key={index} className="duration-500 group ease-in-out hover:-translate-y-5 mt-10 w-full lg:w-1/2 px-4 mb-12 lg:mb-0 text-slate-200 cursor-pointer">
                            <div className="flex  flex-col h-full bg-black bg-opacity-50 backdrop-blur-md group-hover:backdrop-blur-none rounded-lg shadow-lg hover:shadow-2xl ease-in-out duration-300">
                                <div className="flex flex-wrap justify-between items-center px-6 lg:px-12 py-12 border-b-3 border-purple-300">
                                    <div className="mb-4 w-full sm:w-1/2 sm:mb-0">
                                        <h2 className="text-2xl font-extrabold font-major">{table.title ? table.title : "TITLE_NOT_FOUND"}</h2>
                                        <p className="text-lg  font-extrabold leading-7 font-share_tech line-clamp-3 hover:line-clamp-none">
                                            {table?.heading ? table.heading : "HEADING_NOT_FOUND"}
                                        </p>
                                    </div>

                                    <div className="flex w-full sm:w-auto items-start">
                                        <span className="pr-1 text-lg font-extrabold">$</span>
                                        <span className="text-4xl md:text-5xl font-extrabold font-share_tech">{table?.value ? table.value : "VALUE_NOT_FOUND"}</span>
                                        <span className="pl-1 text-lg font-extrabold self-end">/mo</span>
                                    </div>


                                </div>

                                <div className="mb-auto py-6 px-6 lg:px-12">
                                    {
                                        table ? table?.features?.map((feature, index) => {

                                            return (
                                                <div key={index} className="flex mb-4 items-center font-share_tech">
                                                    <a href={feature?.url} className="text-2xl font-extrabold">
                                                        {feature?.name}
                                                    </a>
                                                </div>
                                            )
                                        }) : <>FEATURES_NOT_FOUND</>
                                    }

                                </div>
                                <div className="py-10 px-6 lg:px-12 border-t-3 border-indigo-900">
                                    <a
                                        className="inline-block w-full py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                                        href={table.cta?.url ? table.cta.url : "#"}
                                    >
                                        {table?.cta ? table.cta.name : "[Client]: CTA_NOT_FOUND"}
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

                <span className="text-lg font-major font-extrabold text-blue-300">
                    {heading ? heading : "HEADING_NOT_FOUND"}
                </span>
                <h1 className="text-3xl font-major text-slate-200 md:text-4xl font-extrabold font-heading mt-4 mb-6">
                    {title ? title : "TITLE_NOT_FOUND"}
                </h1>
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