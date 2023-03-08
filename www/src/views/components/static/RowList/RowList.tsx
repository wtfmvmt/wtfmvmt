import type { ComponentType } from "@typings/Component"
import type { RowListProps } from "@typings/RowList"

const RowList: ComponentType<RowListProps> = ({ title, list }: RowListProps) => {

    const Title = () => {
        return (

            <div className="relative container px-4 mx-auto mb-20 lg:mb-40">
                <div className="flex flex-wrap items-center">
                    <h2 className="mb-10 lg:mb-0 w-full lg:w-auto text-5xl text-white font-bold font-heading font-major">
                        {title ?? "[Client]: TITLE_NOT_FOUND"}
                    </h2>
                </div>
            </div>
        )
    }


    const List = () => {
        return (

            <div className="flex overflow-x-scroll flex-wrap lg:flex-nowrap justify-center">
                {
                    list ? list.map((item, index) => {
                        return (
                            <div key={index} className="hidden lg:block opacity-50 flex-shrink-0 w-full max-w-md px-3 overflow-x-visible">
                                <div className="px-8 py-16 border border-white">
                                    <div className="relative px-4 mx-auto">
                                        <img
                                            className="absolute top-0 left-0"
                                            src="yofte-assets/elements/quote.svg"
                                            alt=""
                                        />
                                        <img
                                            className="absolute top-0 right-0"
                                            src="yofte-assets/elements/quote.svg"
                                            alt=""
                                        />
                                        <div className="px-4 md:px-10">
                                            <h3 className="mb-8 text-xl font-bold font-heading text-white">
                                                {item?.description ?? "[Client]: DESCRIPTION_NOT_FOUND"}
                                            </h3>
                                            <div className="flex flex-wrap items-center">
                                                <img
                                                    className="w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full"
                                                    src={item?.image?.src ?? "IMAGE_NOT_FOUND"}
                                                    alt={item?.image?.alt ?? "IMAGE_NOT_FOUND"}
                                                />
                                                <p className="mb-6 md:mb-0 text-gray-300">{item?.title ?? ""}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <>[Client]: LIST_NOT_FOUND</>
                }

            </div>
        )
    }


    return (
        <section className="relative py-20 md:py-32 overflow-x-hidden">
            <Title />
            <List />
        </section>

    )
}

export default RowList