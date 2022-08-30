import PageLayout from "@views/layouts/PageLayout"
const FormsPage = () => {

    return (
        <PageLayout metaData={{ pageTitle: 'Forms' }}>
            <section className="relative py-20  overflow-x-hidden">
                <div className="relative container mx-auto px-4">
                    <h2 className="mb-14 text-5xl font-bold font-heading">Checkout</h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4">
                            <form action="">
                                <div className="flex mb-10 items-center">
                                    <span className="inline-flex mr-8 items-center justify-center w-12 h-12 rounded-full bg-blue-300 text-white">
                                        1
                                    </span>
                                    <h3 className="text-2xl font-bold font-heading">Delivery</h3>
                                </div>
                                <div className="mb-12">
                                    <label className="font-bold font-heading text-gray-600" htmlFor="">
                                        E-mail address
                                    </label>
                                    <input
                                        className="block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                        type="email"
                                    />
                                </div>
                                <div className="flex mb-10 items-center">
                                    <span className="inline-flex mr-8 items-center justify-center w-12 h-12 rounded-full bg-purple-300 text-white">
                                        2
                                    </span>
                                    <h3 className="text-2xl font-bold font-heading">
                                        Shipping informations
                                    </h3>
                                </div>
                                <div className="mb-12">
                                    <div className="flex flex-wrap -mx-4 mb-10">
                                        <div className="w-full md:w-1/2 px-4 mb-10 md:mb-0">
                                            <label
                                                className="font-bold font-heading text-gray-600"
                                                htmlFor=""
                                            >
                                                First name
                                            </label>
                                            <input
                                                className="block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                type="text"
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-4">
                                            <label
                                                className="font-bold font-heading text-gray-600"
                                                htmlFor=""
                                            >
                                                Last name
                                            </label>
                                            <input
                                                className="block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-10">
                                        <label
                                            className="font-bold font-heading text-gray-600"
                                            htmlFor=""
                                        >
                                            Address
                                        </label>
                                        <input
                                            className="block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                            type="text"
                                        />
                                    </div>
                                    <div className="mb-10">
                                        <label
                                            className="font-bold font-heading text-gray-600"
                                            htmlFor=""
                                        >
                                            Appartament
                                        </label>
                                        <input
                                            className="block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                            type="text"
                                        />
                                    </div>
                                    <div className="mb-10">
                                        <label
                                            className="font-bold font-heading text-gray-600"
                                            htmlFor=""
                                        >
                                            Country/Region
                                        </label>
                                        <input
                                            className="block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex flex-wrap -mx-4">
                                        <div className="w-full md:w-2/3 px-4 mb-10 md:mb-0">
                                            <label
                                                className="font-bold font-heading text-gray-600"
                                                htmlFor=""
                                            >
                                                City
                                            </label>
                                            <input
                                                className="block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                type="text"
                                            />
                                        </div>
                                        <div className="w-full md:w-1/3 px-4">
                                            <label
                                                className="font-bold font-heading text-gray-600"
                                                htmlFor=""
                                            >
                                                Zip Code
                                            </label>
                                            <input
                                                className="block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mb-10 items-center">
                                    <span className="inline-flex mr-8 items-center justify-center w-12 h-12 rounded-full bg-orange-300 text-white">
                                        3
                                    </span>
                                    <h3 className="text-2xl font-bold font-heading">
                                        Shipping methods
                                    </h3>
                                </div>
                                <div className="mb-12">
                                    <div className="mb-2 py-3 px-8 bg-white rounded-full">
                                        <div className="flex flex-wrap items-center">
                                            <label
                                                className="inline-flex mb-1 pr-4 py-2 items-center sm:border-r"
                                                htmlFor=""
                                            >
                                                <input
                                                    type="radio"
                                                    name="deliveryType"
                                                    defaultValue=""
                                                />
                                                <span className="ml-4 text-sm font-bold font-heading">
                                                    Standard delivery
                                                </span>
                                            </label>
                                            <p className="order-last w-full sm:w-auto pl-4 text-sm text-gray-500">
                                                3-4 business days
                                            </p>
                                            <span className="sm:order-last ml-auto text-blue-300 font-bold font-heading">
                                                $3.00
                                            </span>
                                        </div>
                                    </div>
                                    <div className="py-3 px-8 bg-white rounded-full">
                                        <div className="flex flex-wrap items-center">
                                            <label
                                                className="inline-flex mb-1 pr-4 py-2 items-center sm:border-r"
                                                htmlFor=""
                                            >
                                                <input type="radio" name="deliveryType" defaultValue="" />
                                                <span className="ml-4 text-sm font-bold font-heading">
                                                    Express
                                                </span>
                                            </label>
                                            <p className="order-last w-full sm:w-auto pl-4 text-sm text-gray-500">
                                                Next day
                                            </p>
                                            <span className="sm:order-last ml-auto text-blue-300 font-bold font-heading">
                                                $20.00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mb-10 items-center">
                                    <span className="inline-flex mr-8 items-center justify-center w-12 h-12 rounded-full bg-pink-300 text-white">
                                        4
                                    </span>
                                    <h3 className="text-2xl font-bold font-heading">Payment</h3>
                                </div>
                                <div>
                                    <div className="flex flex-wrap -mx-4 mb-10">
                                        <label
                                            className="flex px-4 w-full sm:w-auto items-center"
                                            htmlFor=""
                                        >
                                            <input
                                                type="radio"
                                                name="paymentType"
                                                defaultValue=""
                                            />
                                            <span className="ml-5 text-sm">Credit card</span>
                                        </label>
                                        <label
                                            className="flex px-4 w-full sm:w-auto items-center"
                                            htmlFor=""
                                        >
                                            <input type="radio" name="paymentType" defaultValue="" />
                                            <span className="ml-5 text-sm">Cash on Delivery</span>
                                        </label>
                                        <label
                                            className="flex px-4 w-full sm:w-auto items-center"
                                            htmlFor=""
                                        >
                                            <input type="radio" name="paymentType" defaultValue="" />
                                            <span className="ml-5 text-sm">PayPal</span>
                                        </label>
                                    </div>
                                    <div className="mb-10">
                                        <label
                                            className="font-bold font-heading text-gray-600"
                                            htmlFor=""
                                        >
                                            Name on Card
                                        </label>
                                        <input
                                            className="block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                            type="text"
                                        />
                                    </div>
                                    <div className="mb-10">
                                        <label
                                            className="font-bold font-heading text-gray-600"
                                            htmlFor=""
                                        >
                                            Credit Card Type
                                        </label>
                                        <input
                                            className="block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex flex-wrap -mx-4">
                                        <div className="w-full md:w-2/3 px-4">
                                            <div className="mb-10">
                                                <label
                                                    className="font-bold font-heading text-gray-600"
                                                    htmlFor=""
                                                >
                                                    Credit Card Number
                                                </label>
                                                <input
                                                    className="block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/3 px-4">
                                            <div className="mb-10">
                                                <label
                                                    className="font-bold font-heading text-gray-600"
                                                    htmlFor=""
                                                >
                                                    CVV
                                                </label>
                                                <input
                                                    className="block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="lg:absolute lg:top-0 lg:right-0 w-full lg:w-2/5 mb-12 lg:mb-0">
                    <div className="py-16 px-6 md:px-14 bg-white">
                        <div className="flex mb-12 items-center">
                            <h2 className="text-4xl font-bold font-heading">Order summary</h2>
                            <span className="inline-flex ml-4 w-8 h-8 items-center justify-center rounded-full bg-orange-300 text-white">
                                2
                            </span>
                        </div>
                        <div className="mb-12 md:pb-16 border-b">
                            <div className="flex -mx-4 mb-8 flex-wrap items-center">
                                <div className="self-stretch w-full md:w-1/4 px-4 mb-4 lg:mb-0">
                                    <img
                                        className="h-32 lg:h-42 object-contain"
                                        src="yofte-assets/images/waterbottle.png"
                                        alt=""
                                    />
                                </div>
                                <div className="w-full md:w-3/4 px-4">
                                    <div className="flex justify-between">
                                        <div className="pr-2">
                                            <h3 className="mb-2 text-xl font-bold font-heading">
                                                BRILE water filter carafe
                                            </h3>
                                            <p className="mb-8 text-gray-500">Maecenas 0.7 commodo sit</p>
                                        </div>
                                        <span className="text-lg text-blue-300 font-bold font-heading">
                                            $29.89
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500">In Stock</p>
                                        <div className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                                            <button className="py-2 hover:text-gray-700">
                                                <svg
                                                    width={12}
                                                    height={2}
                                                    viewBox="0 0 12 2"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.35">
                                                        <rect
                                                            x={12}
                                                            width={2}
                                                            height={12}
                                                            transform="rotate(90 12 0)"
                                                            fill="currentColor"
                                                        />
                                                    </g>
                                                </svg>
                                            </button>
                                            <input
                                                className="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md"
                                                type="number"
                                            />
                                            <button className="py-2 hover:text-gray-700">
                                                <svg
                                                    width={12}
                                                    height={12}
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.35">
                                                        <rect x={5} width={2} height={12} fill="currentColor" />
                                                        <rect
                                                            x={12}
                                                            y={5}
                                                            width={2}
                                                            height={12}
                                                            transform="rotate(90 12 5)"
                                                            fill="currentColor"
                                                        />
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-4 mb-8 flex-wrap items-center">
                                <div className="self-stretch w-full md:w-1/4 px-4 mb-4 lg:mb-0">
                                    <img
                                        className="h-32 lg:h-42 object-contain"
                                        src="yofte-assets/images/basketball.png"
                                        alt=""
                                    />
                                </div>
                                <div className="w-full md:w-3/4 px-4">
                                    <div className="flex justify-between">
                                        <div className="pr-2">
                                            <h3 className="mb-2 text-xl font-bold font-heading">
                                                Nike basketball ball
                                            </h3>
                                            <p className="mb-8 text-gray-500">Lorem ipsum dolor L</p>
                                        </div>
                                        <span className="text-lg text-blue-300 font-bold font-heading">
                                            $59.78
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500">In Stock</p>
                                        <div className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                                            <button className="py-2 hover:text-gray-700">
                                                <svg
                                                    width={12}
                                                    height={2}
                                                    viewBox="0 0 12 2"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.35">
                                                        <rect
                                                            x={12}
                                                            width={2}
                                                            height={12}
                                                            transform="rotate(90 12 0)"
                                                            fill="currentColor"
                                                        />
                                                    </g>
                                                </svg>
                                            </button>
                                            <input
                                                className="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md"
                                                type="number"
                                            />
                                            <button className="py-2 hover:text-gray-700">
                                                <svg
                                                    width={12}
                                                    height={12}
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.35">
                                                        <rect x={5} width={2} height={12} fill="currentColor" />
                                                        <rect
                                                            x={12}
                                                            y={5}
                                                            width={2}
                                                            height={12}
                                                            transform="rotate(90 12 5)"
                                                            fill="currentColor"
                                                        />
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12">
                            <div className="mb-10">
                                <div className="py-3 px-10 bg-blue-50 rounded-full">
                                    <div className="flex justify-between">
                                        <span className="font-medium">Subtotal</span>
                                        <span className="font-bold font-heading">$89.67</span>
                                    </div>
                                </div>
                                <div className="py-3 px-10 rounded-full">
                                    <div className="flex justify-between">
                                        <span className="font-medium">Shipping</span>
                                        <span className="font-bold font-heading">$11.00</span>
                                    </div>
                                </div>
                                <div className="py-3 px-10 bg-blue-50 rounded-full">
                                    <div className="flex justify-between">
                                        <span className="font-medium">Tax</span>
                                        <span className="font-bold font-heading">$0.00</span>
                                    </div>
                                </div>
                                <div className="py-3 px-10 rounded-full">
                                    <div className="flex justify-between">
                                        <span className="text-base md:text-xl font-bold font-heading">
                                            Total
                                        </span>
                                        <span className="font-bold font-heading">$100.67</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 md:mb-10">
                            <span className="inline-block mb-4 font-medium">
                                Apply discount code:
                            </span>
                            <div className="flex mb-12 flex-wrap lg:flex-nowrap items-center">
                                <input
                                    className="mb-4 md:mb-0 mr-6 w-full px-8 py-4 placeholder-gray-800 font-bold font-heading border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                    type="text"
                                    placeholder="SUMMER30X"
                                />
                                <a
                                    className="inline-block mb-4 md:mb-0 px-8 py-4 text-white font-bold font-heading uppercase bg-gray-800 hover:bg-gray-700 rounded-md"
                                    href="#"
                                >
                                    Apply
                                </a>
                            </div>
                        </div>
                        <a
                            className="block w-full py-4 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200"
                            href="#"
                        >
                            Confirm Order
                        </a>
                    </div>
                </div>
            </section>

        </PageLayout>

    )
}

export default FormsPage