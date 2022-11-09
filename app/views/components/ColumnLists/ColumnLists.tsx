
import type { ComponentType } from "@typings/Component"
import type { ColumnListProps } from "@typings/ColumnLists"

const ColumnLists: ComponentType<ColumnListProps> = ({ lists, title }: ColumnListProps) => {

    return (
        <section className="py-6 w-full overflow-x-hidden text-slate-200 font-share_tech">
            <div className="container">
                <div className="flex flex-wrap">


                    <div className="w-full mx-4 mb-12 lg:mb-0">
                        <h2 className="pb-10 text-5xl font-bold font-heading">
                            General question
                        </h2>
                        <div className="mb-20 py-px w-64 blue-300" />
                        <ul>
                            <li>
                                <div className="py-8 border-b">
                                    <div className="flex justify-between items-center">
                                        <h3 className="mr-4 text-xl font-bold font-heading">
                                            Sed eget accumsan ipsum &amp; praesent dignissim?
                                        </h3>
                                        <a
                                            className="p-4 inline-block border rounded-md hover:border-gray-500"
                                            href="#"
                                        >
                                            <svg
                                                width={12}
                                                height={12}
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect x={5} width={2} height={12} fill="#161616" />
                                                <rect
                                                    x={12}
                                                    y={5}
                                                    width={2}
                                                    height={12}
                                                    transform="rotate(90 12 5)"
                                                    fill="#161616"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <p className="hidden text-gray-500 pt-10 pr-20">
                                        After curabitur non tortor quis mauris vestibulum imperdiet
                                        pellentesque et est. Suspendisse lorem sit amet vehicula.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="py-8 border-b">
                                    <div className="flex justify-between items-center">
                                        <h3 className="mr-4 text-xl font-bold font-heading">
                                            Curabitur ante dui, viverra quis blandit?
                                        </h3>
                                        <a
                                            className="p-4 inline-block border rounded-md hover:border-gray-500"
                                            href="#"
                                        >
                                            <svg
                                                width={12}
                                                height={12}
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect x={5} width={2} height={12} fill="#161616" />
                                                <rect
                                                    x={12}
                                                    y={5}
                                                    width={2}
                                                    height={12}
                                                    transform="rotate(90 12 5)"
                                                    fill="#161616"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <p className="hidden text-gray-500 pt-10 pr-20">
                                        After curabitur non tortor quis mauris vestibulum imperdiet
                                        pellentesque et est. Suspendisse lorem sit amet vehicula.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="py-8 border-b">
                                    <div className="flex justify-between items-center">
                                        <h3 className="mr-4 text-xl font-bold font-heading">
                                            Sed eget accumsan ipsum &amp; praesent dignissim?
                                        </h3>
                                        <a
                                            className="p-4 inline-block border rounded-md hover:border-gray-500"
                                            href="#"
                                        >
                                            <svg
                                                width={12}
                                                height={12}
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect x={5} width={2} height={12} fill="#161616" />
                                                <rect
                                                    x={12}
                                                    y={5}
                                                    width={2}
                                                    height={12}
                                                    transform="rotate(90 12 5)"
                                                    fill="#161616"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <p className="text-gray-500 pt-10 pr-20">
                                        After curabitur non tortor quis mauris vestibulum imperdiet
                                        pellentesque et est. Suspendisse lorem sit amet vehicula.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="py-8 border-b">
                                    <div className="flex justify-between items-center">
                                        <h3 className="mr-4 text-xl font-bold font-heading">
                                            Sed eget accumsan ipsum &amp; praesent dignissim?
                                        </h3>
                                        <a
                                            className="p-4 inline-block border rounded-md hover:border-gray-500"
                                            href="#"
                                        >
                                            <svg
                                                width={12}
                                                height={12}
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect x={5} width={2} height={12} fill="#161616" />
                                                <rect
                                                    x={12}
                                                    y={5}
                                                    width={2}
                                                    height={12}
                                                    transform="rotate(90 12 5)"
                                                    fill="#161616"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <p className="hidden text-gray-500 pt-10 pr-20">
                                        After curabitur non tortor quis mauris vestibulum imperdiet
                                        pellentesque et est. Suspendisse lorem sit amet vehicula.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>


                </div>

                <div className="mt-20 text-center">
                    <a
                        className="inline-block blue-300 hover:blue-400 text-white font-bold font-heading py-5 px-8 rounded-md uppercase"
                        href="#"
                    >
                        More
                    </a>
                </div>




            </div>
        </section>
    )
}

export default ColumnLists