
import type { ComponentType } from "@typings/Component"
import type { ColumnListProps } from "@typings/ColumnLists"

const ColumnList: ComponentType<ColumnListProps> = ({ list, title }: ColumnListProps) => {


    const CallToAction = () => {
        return (
            <div className="mt-20 text-center">
                <a
                    className="inline-block blue-300 hover:blue-400 text-white font-bold font-heading py-5 px-8 rounded-md uppercase"
                    href="#"
                >
                    More
                </a>
            </div>
        )
    }
    const List = () => {
        return (
            <ul className="mr-6 pr-2">
                {
                    list ? list.map((item, index) => {
                        return (
                            <li key={index} className="group">
                                <div className="py-8 border-b">
                                    <div className="flex justify-between items-center">
                                        <h3 className="mr-4 text-xl font-bold font-heading">
                                            {item?.name}
                                        </h3>
                                        <div
                                            className="p-2 inline-block border rounded-xl hover:border-purple-500 cursor-pointer"    >
                                            <img loading="lazy" src={item?.icon} className="h-8" alt={item?.name} />
                                        </div>
                                    </div>
                                    <p className="group-hover:flex text-2xl translate-y-5 group-hover:-translate-y-5 opacity-0 group-hover:opacity-100 group-hover:delay-1000 hidden duration-1000 ease-in-out text-blue-400 font-bold font-share_tech pt-10 pr-20">
                                        {item?.description}
                                    </p>
                                </div>
                            </li>

                        )
                    }) : <>LIST_NOT_FOUND</>
                }
            </ul>
        )
    }
    return (
        <section className="py-6 w-full overflow-x-clip text-slate-200 font-major">
            <div className="container">
                <div className="flex flex-wrap">


                    <div className="w-full mx-4 mb-12 lg:mb-0 m-auto">
                        <h2 className="pb-5 break-words text-5xl font-bold flex-wrap text-wrap font-heading">
                            {title ? title : "TITLE_NOT_FOUND"}
                        </h2>


                        <List />
                    </div>


                </div>



                <CallToAction />


            </div>
        </section>
    )
}

export default ColumnList