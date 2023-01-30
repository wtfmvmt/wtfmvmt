import EncryptedRoute from "../SecureRoute"

const Timeline = () => {


    const Sidebar = () => {
        return (
            <div className="w-full lg:w-1/3 p-4">
                <div className="p-10 xl:py-12 xl:px-16 h-full bg-white rounded-5xl">
                    <h3 className="mb-3 text-3xl font-heading font-medium">
                        Workflow Activity
                    </h3>
                    <p className="mb-12 text-darkBlueGray-400">
                        Changes in current tasks
                    </p>
                    <div className="flex items-center mb-9">
                        <div className="w-auto pr-8">
                            <img
                                src="uinel-assets/elements/dashboard-tables/timeline.svg"
                                alt=""
                            />
                        </div>
                        <div className="flex-1">
                            <div className="mb-9">
                                <h3 className="mb-1 text-lg font-heading font-medium">
                                    Stand-up Meeting
                                </h3>
                                <div className="flex items-center">
                                    <img
                                        className="mr-5"
                                        src="uinel-assets/elements/dashboard-tables/time-quarter.svg"
                                        alt=""
                                    />
                                    <span className="text-darkBlueGray-400">10:30 AM</span>
                                </div>
                            </div>
                            <div className="mb-9">
                                <h3 className="mb-1 text-lg font-heading font-medium">
                                    New wireframes for O24x
                                </h3>
                                <div className="flex items-center">
                                    <img
                                        className="mr-5"
                                        src="uinel-assets/elements/dashboard-tables/time-quarter.svg"
                                        alt=""
                                    />
                                    <span className="text-darkBlueGray-400">9:10 AM</span>
                                </div>
                            </div>
                            <div className="mb-9">
                                <h3 className="mb-1 text-lg font-heading font-medium">
                                    Chatbox exploration
                                </h3>
                                <div className="flex items-center">
                                    <img
                                        className="mr-5"
                                        src="uinel-assets/elements/dashboard-tables/time-quarter.svg"
                                        alt=""
                                    />
                                    <span className="text-darkBlueGray-400">09:00 AM</span>
                                </div>
                            </div>
                            <div className="mb-9">
                                <h3 className="mb-1 text-lg font-heading font-medium">
                                    New wireframes for O23x
                                </h3>
                                <div className="flex items-center">
                                    <img
                                        className="mr-5"
                                        src="uinel-assets/elements/dashboard-tables/time-quarter.svg"
                                        alt=""
                                    />
                                    <span className="text-darkBlueGray-400">05:44 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        className="flex items-center pb-1 text-xl text-green-600 hover:text-green-700 font-bold tracking-tight max-w-max mx-auto border-b border-green-600 hover:border-green-700"
                        href="#"
                    >
                        <span className="mr-5">View previous activity</span>
                        <svg
                            width={13}
                            height={17}
                            viewBox="0 0 13 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 11.3L6 15.5L6 1.5"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1 11.5L6 15.5"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>

        )
    }

    const Table = () => {
        return (
            <div className="order-1 w-full lg:w-2/3 p-4">
                <div className="pt-14 px-8 pb-12 bg-white rounded-3xl">
                    <div className="flex flex-wrap justify-between items-center pl-9">
                        <div className="w-full md:w-auto mb-10 md:mb-0">
                            <div className="flex flex-wrap items-start mb-2">
                                <h3 className="w-full md:w-auto text-3xl font-heading font-medium leading-10">
                                    Project in Progress
                                </h3>
                                <div className="order-first md:order-last mb-2 md:mb-0 px-2 md:ml-2 text-center bg-green-200 bg-opacity-70 rounded-full">
                                    <span className="text-xxs align-middle font-bold text-green-500 leading-7">
                                        16 NEW
                                    </span>
                                </div>
                            </div>
                            <p className="text-darkBlueGray-400 font-heading">
                                About recent tasks
                            </p>
                        </div>

                    </div>
                    <div className="overflow-x-auto">
                        <div className="min-w-max overflow-hidden">
                            <table className="table-auto w-full">
                                <tbody>
                                    <tr>
                                        <td className="p-0">
                                            <div className="flex items-center pl-9 p-5 mt-14 h-20 bg-blueGray-50 min-w-max border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                                                <div className="flex items-center justify-start">
                                                    <img
                                                        className="mr-5"
                                                        src="uinel-assets/elements/dashboard-tables/av1.svg"
                                                        alt=""
                                                    />
                                                    <div>
                                                        <div className="font-heading font-medium">
                                                            Scotland Bank 44
                                                        </div>
                                                        <div className="text-sm text-darkBlueGray-400 font-heading">
                                                            UI Design
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-0">
                                            <div className="flex items-center justify-end p-5 pr-10 mt-14 h-20 text-center min-w-max bg-blueGray-50 border-t border-b border-r border-gray-100 rounded-br-5xl rounded-tr-5xl">
                                                <div className="inline-block px-6 py-1 mr-9 leading-7 font-bold tracking-tight text-blue-500 bg-indigo-100 rounded-9xl">
                                                    4 tasks
                                                </div>
                                                <a href="#">
                                                    <svg
                                                        width={13}
                                                        height={3}
                                                        viewBox="0 0 13 3"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            opacity="0.8"
                                                            cx="1.5"
                                                            cy="1.5"
                                                            r="1.5"
                                                            fill="#326BFF"
                                                        />
                                                        <circle
                                                            opacity="0.8"
                                                            cx="6.5"
                                                            cy="1.5"
                                                            r="1.5"
                                                            fill="#326BFF"
                                                        />
                                                        <circle
                                                            opacity="0.8"
                                                            cx="11.5"
                                                            cy="1.5"
                                                            r="1.5"
                                                            fill="#326BFF"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-0">
                                            <div className="flex items-center pl-9 p-5 h-20 bg-white min-w-max rounded-tl-5xl rounded-bl-5xl">
                                                <div className="flex items-center justify-start">
                                                    <img
                                                        className="mr-5"
                                                        src="uinel-assets/elements/dashboard-tables/av2.svg"
                                                        alt=""
                                                    />
                                                    <div>
                                                        <div className="font-heading font-medium">
                                                            British Airways — Reserve vuelos
                                                        </div>
                                                        <div className="text-sm text-darkBlueGray-400 font-heading">
                                                            Web Development
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-0">
                                            <div className="flex items-center justify-end p-5 pr-10 h-20 text-center min-w-max bg-white rounded-br-5xl rounded-tr-5xl">
                                                <div className="inline-block px-6 py-1 mr-9 leading-7 font-bold tracking-tight text-blue-500 bg-indigo-100 rounded-9xl">
                                                    2 tasks
                                                </div>
                                                <a href="#">
                                                    <svg
                                                        width={13}
                                                        height={3}
                                                        viewBox="0 0 13 3"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            opacity="0.8"
                                                            cx="1.5"
                                                            cy="1.5"
                                                            r="1.5"
                                                            fill="#326BFF"
                                                        />
                                                        <circle
                                                            opacity="0.8"
                                                            cx="6.5"
                                                            cy="1.5"
                                                            r="1.5"
                                                            fill="#326BFF"
                                                        />
                                                        <circle
                                                            opacity="0.8"
                                                            cx="11.5"
                                                            cy="1.5"
                                                            r="1.5"
                                                            fill="#326BFF"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-0">
                                            <div className="flex items-center pl-9 p-5 h-20 bg-blueGray-50 min-w-max border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                                                <div className="flex items-center justify-start">
                                                    <img
                                                        className="mr-5"
                                                        src="uinel-assets/elements/dashboard-tables/av3.svg"
                                                        alt=""
                                                    />
                                                    <div>
                                                        <div className="font-heading font-medium">
                                                            Scotland Bank 44
                                                        </div>
                                                        <div className="text-sm text-darkBlueGray-400 font-heading">
                                                            UI Design
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-0">
                                            <div className="flex items-center justify-end p-5 pr-10 h-20 text-center min-w-max bg-blueGray-50 border-t border-b border-r border-gray-100 rounded-br-5xl rounded-tr-5xl">
                                                <div className="inline-block px-6 py-1 mr-9 leading-7 font-bold tracking-tight text-blue-500 bg-indigo-100 rounded-9xl">
                                                    7 tasks
                                                </div>
                                                <a href="#">
                                                    <svg
                                                        width={13}
                                                        height={3}
                                                        viewBox="0 0 13 3"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            opacity="0.8"
                                                            cx="1.5"
                                                            cy="1.5"
                                                            r="1.5"
                                                            fill="#326BFF"
                                                        />
                                                        <circle
                                                            opacity="0.8"
                                                            cx="6.5"
                                                            cy="1.5"
                                                            r="1.5"
                                                            fill="#326BFF"
                                                        />
                                                        <circle
                                                            opacity="0.8"
                                                            cx="11.5"
                                                            cy="1.5"
                                                            r="1.5"
                                                            fill="#326BFF"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-0">
                                            <div className="flex items-center pl-9 p-5 h-20 bg-white min-w-max rounded-tl-5xl rounded-bl-5xl">
                                                <div className="flex items-center justify-start">
                                                    <img
                                                        className="mr-5"
                                                        src="uinel-assets/elements/dashboard-tables/av4.svg"
                                                        alt=""
                                                    />
                                                    <div>
                                                        <div className="font-heading font-medium">
                                                            British Airways — Reserve vuelos
                                                        </div>
                                                        <div className="text-sm text-darkBlueGray-400 font-heading">
                                                            Web Development
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-0">
                                            <div className="flex items-center justify-end p-5 pr-10 h-20 text-center min-w-max bg-white rounded-br-5xl rounded-tr-5xl">
                                                <div className="inline-block px-6 py-1 mr-9 leading-7 font-bold tracking-tight text-blue-500 bg-indigo-100 rounded-9xl">
                                                    4 tasks
                                                </div>
                                                <a href="#">
                                                    <svg
                                                        width={13}
                                                        height={3}
                                                        viewBox="0 0 13 3"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            opacity="0.8"
                                                            cx="1.5"
                                                            cy="1.5"
                                                            r="1.5"
                                                            fill="#326BFF"
                                                        />
                                                        <circle
                                                            opacity="0.8"
                                                            cx="6.5"
                                                            cy="1.5"
                                                            r="1.5"
                                                            fill="#326BFF"
                                                        />
                                                        <circle
                                                            opacity="0.8"
                                                            cx="11.5"
                                                            cy="1.5"
                                                            r="1.5"
                                                            fill="#326BFF"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-0">
                                            <div className="flex items-center pl-9 p-5 h-20 bg-blueGray-50 min-w-max border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                                                <div className="flex items-center justify-start">
                                                    <img
                                                        className="mr-5"
                                                        src="uinel-assets/elements/dashboard-tables/av5.svg"
                                                        alt=""
                                                    />
                                                    <div>
                                                        <div className="font-heading font-medium">
                                                            British Airways — Reserve vuelos
                                                        </div>
                                                        <div className="text-sm text-darkBlueGray-400 font-heading">
                                                            Web Development
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-0">
                                            <div className="flex items-center justify-end p-5 pr-10 h-20 text-center min-w-max bg-blueGray-50 border-t border-b border-r border-gray-100 rounded-br-5xl rounded-tr-5xl">
                                                <div className="inline-block px-6 py-1 mr-9 leading-7 font-bold tracking-tight text-blue-500 bg-indigo-100 rounded-9xl">
                                                    5 tasks
                                                </div>
                                                <a href="#">
                                                    <svg
                                                        width={13}
                                                        height={3}
                                                        viewBox="0 0 13 3"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            opacity="0.8"
                                                            cx="1.5"
                                                            cy="1.5"
                                                            r="1.5"
                                                            fill="#326BFF"
                                                        />
                                                        <circle
                                                            opacity="0.8"
                                                            cx="6.5"
                                                            cy="1.5"
                                                            r="1.5"
                                                            fill="#326BFF"
                                                        />
                                                        <circle
                                                            opacity="0.8"
                                                            cx="11.5"
                                                            cy="1.5"
                                                            r="1.5"
                                                            fill="#326BFF"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mt-8 mx-auto text-center max-w-max">
                        <a
                            className="block py-4 px-7 w-full leading-3 text-white font-semibold tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                            href="#"
                        >
                            Show more
                        </a>
                    </div>
                </div>
            </div>

        )
    }


    return (
        <section className="py-8 bg-purple bg-opaicity-70 rounded">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <Table />
                    <Sidebar />
                </div>
            </div>
        </section>

    )
}

export default Timeline