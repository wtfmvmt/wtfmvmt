
import type { ComponentType } from "@typings/Component"
import type { ColumnListProps } from "@models/typings/ColumnList"

const ColumnList: ComponentType<ColumnListProps> = ({ list, title, cta }: ColumnListProps) => {


    const CallToAction = () => {
        return (
            cta ? <div className="mt-20 text-center">
                <a
                    className="inline-block px-8 py-5 font-bold text-white uppercase rounded-md blue-300 hover:blue-400 font-heading"
                    href={cta?.url}
                >
                    {cta?.name}
                </a>
            </div> : <>CTA_NOT_FOUND</>
        )
    }

    const List = () => {
        return (
            <ul className="pr-2 mr-6">
                {
                    list ? list.map((item, index) => {
                        return (
                            <li key={index} className="group">
                                <div className="py-8 border-b">
                                    <div className="flex items-center justify-between">
                                        <h3 className="mr-4 text-xl font-bold font-heading">
                                            {item?.name}
                                        </h3>
                                        <div
                                            className="inline-block p-2 border cursor-pointer rounded-xl hover:border-purple-500"    >
                                            <img loading="lazy" src={item?.icon} className="h-8" alt={item?.name} />
                                        </div>
                                    </div>
                                    <p className="hidden pt-10 pr-20 text-2xl font-bold text-blue-400 duration-1000 ease-in-out translate-y-5 opacity-0 group-hover:flex group-hover:-translate-y-5 group-hover:opacity-100 group-hover:delay-1000 font-share_tech">
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
        <section className="w-full py-6 overflow-x-clip text-slate-200 font-major">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full m-auto mx-4 mb-12 break-words lg:mb-0">
                        <h2 className="flex-wrap pb-5 text-4xl font-bold break-words text-wrap font-heading">
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