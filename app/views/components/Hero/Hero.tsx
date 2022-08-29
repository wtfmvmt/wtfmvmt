import { Fade } from "react-awesome-reveal"

export type HeroProps = {
    heading: string,
    description: object,
    cta: object,
}
const Hero = ({ actionLinks }) => {

    return (
        <section>

            <div className="relative py-12 overflow-hidden">

                <div className="relative container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                            <div className="px-4 md:px-8 py-12 ">
                                <h4 className="pl-8 mb-2 text-sm font-bold font-heading text-white uppercase">
                                    {actionLinks.heading}
                                </h4>
                                <ul className="mb-5">
                                    <Fade cascade>
                                        {
                                            actionLinks.links.map((link, index) => {
                                                return (
                                                    <li key={index} className="py-5 px-8 border-b">
                                                        <a
                                                            className="flex items-center text-lg font-bold font-heading hover:text-blue-300"
                                                            href={link.url}
                                                        >
                                                            
                                                            <span>{link.name}</span>
                                                        </a>
                                                    </li>
                                                )
                                            })}                                   
                                      
                                    </Fade>

                                </ul>
                                <a className="inline-block w-full" href="#">
                                    <svg
                                        className="mx-auto"
                                        width={13}
                                        height={8}
                                        viewBox="0 0 13 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.5 5.09179L11.5558 -6.31273e-08L13 1.4541L6.5 8L-6.35609e-08 1.4541L1.44419 -5.05121e-07L6.5 5.09179Z"
                                            fill="#9A97A7"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3 px-4">
                            <div className="flex flex-wrap h-full">
                                <div className="w-full md:w-7/12">
                                    <img
                                        className="h-64 md:h-full w-full object-cover"
                                        src="https://scontent.ftpa1-1.fna.fbcdn.net/v/t39.30808-6/277566995_1426748454414950_1657349356422612304_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=6L5P1IbKlsQAX-GFkuW&_nc_ht=scontent.ftpa1-1.fna&oh=00_AT9hr40EE1p6DuwfNM8t0f_eWujgf5wx-lGLvkYow-Rg6Q&oe=63111278"
                                        alt=""
                                    />
                                </div>
                                <div className="w-full md:w-5/12">
                                    <img
                                        className="md:mt-16 md:-ml-16 w-full h-64 md:h-full object-cover object-top"
                                        src="https://scontent.ftpa1-2.fna.fbcdn.net/v/t39.30808-6/277671893_1426749901081472_5563598177286957791_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=RdL3PKiQnO4AX8Ir-ki&_nc_ht=scontent.ftpa1-2.fna&oh=00_AT9dL-idE88nbOSurT4TE0nKXD5q9XFBswDUkG4EDcv7yA&oe=6311AEE6"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative container mx-auto px-4">
                <div className="text-center mt-16 xl:mt-24 xl:mr-8 xl:absolute top-0 right-0 xl:transform xl:-translate-y-1/2">
                    <a
                        className="inline-flex items-center justify-center w-12 h-12 mr-2 bg-blue-300 rounded-full"
                        href="#"
                    >
                        <svg
                            className="w-4 h-4"
                            width={18}
                            height={19}
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0)">
                                <path
                                    d="M17.0064 0.554688H0.992752C0.444397 0.554962 -0.000137297 0.999771 3.181e-08 1.54826V17.5619C0.00027469 18.1103 0.445084 18.5548 0.993576 18.5547H17.0064C17.5551 18.5548 17.9999 18.1102 18 17.5615C18 17.5614 18 17.5612 18 17.5611V1.54744C17.9997 0.999084 17.5549 0.55455 17.0064 0.554688Z"
                                    fill="white"
                                />
                                <path
                                    d="M12.4277 18.555V11.5941H14.7744L15.126 8.86946H12.4277V7.13417C12.4277 6.34714 12.6462 5.81087 13.7748 5.81087H15.2051V3.38055C14.9562 3.34746 14.1025 3.27344 13.109 3.27344C11.0348 3.27344 9.61523 4.53906 9.61523 6.86432V8.86946H7.27734V11.5941H9.61523V18.555H12.4277Z"
                                    fill="#5475E5"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect
                                        width={18}
                                        height={18}
                                        fill="white"
                                        transform="translate(0 0.554688)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a
                        className="inline-flex items-center justify-center w-12 h-12 mr-2 bg-indigo-300 rounded-full"
                        href="#"
                    >
                        <svg
                            className="w-4 h-4"
                            width={18}
                            height={19}
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0)">
                                <path
                                    d="M17.9825 5.84674C17.9403 4.89033 17.7857 4.2328 17.5641 3.66305C17.3356 3.05827 16.9839 2.51682 16.5232 2.0667C16.0731 1.60958 15.5281 1.25438 14.9303 1.02939C14.3573 0.807834 13.7032 0.653172 12.7468 0.611003C11.7832 0.565264 11.4773 0.554688 9.03349 0.554688C6.58966 0.554688 6.28377 0.565264 5.32379 0.607432C4.36738 0.6496 3.70985 0.804401 3.14024 1.02582C2.53532 1.25438 1.99387 1.60601 1.54375 2.0667C1.08663 2.51682 0.731567 3.06185 0.50644 3.65962C0.284885 4.2328 0.130222 4.88676 0.0880542 5.84317C0.0423147 6.80672 0.0317383 7.11261 0.0317383 9.55645C0.0317383 12.0003 0.0423147 12.3062 0.0844829 13.2662C0.126651 14.2226 0.281451 14.8801 0.503006 15.4498C0.731567 16.0546 1.08663 16.5961 1.54375 17.0462C1.99387 17.5033 2.5389 17.8585 3.13667 18.0835C3.70985 18.3051 4.36381 18.4597 5.32035 18.5019C6.2802 18.5442 6.58622 18.5546 9.03006 18.5546C11.4739 18.5546 11.7798 18.5442 12.7398 18.5019C13.6962 18.4597 14.3537 18.3051 14.9233 18.0835C16.133 17.6158 17.0894 16.6594 17.5571 15.4498C17.7785 14.8767 17.9333 14.2226 17.9755 13.2662C18.0177 12.3062 18.0282 12.0003 18.0282 9.55645C18.0282 7.11261 18.0247 6.80672 17.9825 5.84674ZM16.3616 13.1958C16.3228 14.0749 16.1752 14.5496 16.0521 14.8661C15.7496 15.6502 15.1273 16.2726 14.3431 16.5751C14.0267 16.6981 13.5485 16.8458 12.6729 16.8844C11.7235 16.9267 11.4387 16.9371 9.03707 16.9371C6.6354 16.9371 6.34709 16.9267 5.40112 16.8844C4.52204 16.8458 4.04734 16.6981 3.73087 16.5751C3.34064 16.4308 2.98544 16.2023 2.69713 15.9034C2.39824 15.6115 2.16968 15.2599 2.02546 14.8696C1.90239 14.5532 1.75473 14.0749 1.71613 13.1994C1.67383 12.25 1.66339 11.9651 1.66339 9.56345C1.66339 7.16178 1.67383 6.87347 1.71613 5.92764C1.75473 5.04856 1.90239 4.57386 2.02546 4.25739C2.16968 3.86703 2.39824 3.51196 2.7007 3.22351C2.99244 2.92463 3.34408 2.69607 3.73444 2.55198C4.05091 2.42891 4.52918 2.28125 5.40469 2.24252C6.35409 2.20035 6.63897 2.18977 9.0405 2.18977C11.4457 2.18977 11.7305 2.20035 12.6764 2.24252C13.5555 2.28125 14.0302 2.42891 14.3467 2.55198C14.7369 2.69607 15.0921 2.92463 15.3804 3.22351C15.6793 3.51539 15.9079 3.86703 16.0521 4.25739C16.1752 4.57386 16.3228 5.052 16.3616 5.92764C16.4037 6.87704 16.4143 7.16178 16.4143 9.56345C16.4143 11.9651 16.4037 12.2464 16.3616 13.1958Z"
                                    fill="white"
                                />
                                <path
                                    d="M9.03362 4.93262C6.48086 4.93262 4.40967 7.00367 4.40967 9.55657C4.40967 12.1095 6.48086 14.1805 9.03362 14.1805C11.5865 14.1805 13.6576 12.1095 13.6576 9.55657C13.6576 7.00367 11.5865 4.93262 9.03362 4.93262ZM9.03362 12.556C7.37752 12.556 6.03418 11.2128 6.03418 9.55657C6.03418 7.90033 7.37752 6.55713 9.03362 6.55713C10.6899 6.55713 12.0331 7.90033 12.0331 9.55657C12.0331 11.2128 10.6899 12.556 9.03362 12.556Z"
                                    fill="white"
                                />
                                <path
                                    d="M14.9198 4.74989C14.9198 5.34602 14.4365 5.82937 13.8402 5.82937C13.2441 5.82937 12.7607 5.34602 12.7607 4.74989C12.7607 4.15363 13.2441 3.67041 13.8402 3.67041C14.4365 3.67041 14.9198 4.15363 14.9198 4.74989Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect
                                        width={18}
                                        height={18}
                                        fill="white"
                                        transform="translate(0 0.554688)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a
                        className="inline-flex items-center justify-center w-12 h-12 bg-blue-300 rounded-full"
                        href="#"
                    >
                        <svg
                            className="w-4 h-4"
                            width={18}
                            height={15}
                            viewBox="0 0 18 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18 1.97356C17.3306 2.26719 16.6174 2.46181 15.8737 2.55631C16.6388 2.09956 17.2226 1.38181 17.4971 0.516687C16.7839 0.941937 15.9964 1.24231 15.1571 1.40994C14.4799 0.688813 13.5146 0.242188 12.4616 0.242188C10.4186 0.242188 8.77387 1.90044 8.77387 3.93331C8.77387 4.22581 8.79862 4.50706 8.85938 4.77481C5.7915 4.62519 3.07687 3.15481 1.25325 0.914938C0.934875 1.46731 0.748125 2.09956 0.748125 2.78019C0.748125 4.05819 1.40625 5.19106 2.38725 5.84694C1.79437 5.83569 1.21275 5.66356 0.72 5.39244C0.72 5.40369 0.72 5.41831 0.72 5.43294C0.72 7.22619 1.99912 8.71569 3.6765 9.05881C3.37612 9.14094 3.04875 9.18031 2.709 9.18031C2.47275 9.18031 2.23425 9.16681 2.01038 9.11731C2.4885 10.5787 3.84525 11.6531 5.4585 11.6879C4.203 12.6701 2.60888 13.2618 0.883125 13.2618C0.5805 13.2618 0.29025 13.2483 0 13.2112C1.63462 14.2653 3.57188 14.8672 5.661 14.8672C12.4515 14.8672 16.164 9.24219 16.164 4.36644C16.164 4.20331 16.1584 4.04581 16.1505 3.88944C16.8829 3.36969 17.4982 2.72056 18 1.97356Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                </div>
                <div className="max-w-3xl mx-auto py-24 text-center">
                    <h2 className="mb-8 text-5xl xl:text-6xl font-bold font-heading">
                        WTFMVMT
                    </h2>
                    <a
                        className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase transition duration-200"
                        href="#"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
            <div className="py-12 lg:py-24 ">
                <div className="container mx-auto px-4">
                    <h4 className="lg:ml-16 mb-6 font-bold font-heading text-gray-500 text-xs">
                        TRUSTED BY BRANDS ALL OVER THE WORLD
                    </h4>
                    <div className="flex flex-wrap text-black -mx-3 -mb-3">
                        <div className="w-full md:w-1/2 lg:w-1/6 p-3">
                            <div className="h-28 flex items-center bg-white shadow-xl">
                                <img
                                    className="mx-auto"
                                    src="yofte-assets/brands/exxon.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/6 p-3">
                            <div className="h-28 flex items-center bg-white shadow-xl">
                                <img
                                    className="mx-auto"
                                    src="yofte-assets/brands/ea-sports.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/6 p-3">
                            <div className="h-28 flex items-center bg-white shadow-xl">
                                <img
                                    className="mx-auto"
                                    src="yofte-assets/brands/eurosport.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/6 p-3">
                            <div className="h-28 flex items-center bg-white shadow-xl">
                                <img
                                    className="mx-auto"
                                    src="yofte-assets/brands/nike.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/6 p-3">
                            <div className="h-28 flex items-center bg-white shadow-xl">
                                <img className="mx-auto" src="yofte-assets/brands/aol.svg" alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/6 p-3">
                            <div className="h-28 flex items-center bg-white shadow-xl">
                                <img
                                    className="mx-auto"
                                    src="yofte-assets/brands/north-face.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
                <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold font-heading" href="#">
                            <img
                                className="h-9"
                                src="yofte-assets/logos/yofte-logo.svg"
                                alt=""
                                width="auto"
                            />
                        </a>
                        <button className="navbar-close">
                            <svg
                                className="h-2 w-2 text-gray-500 cursor-pointer"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.00002 1L1 9.00002M1.00003 1L9.00005 9.00002"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex mb-8 justify-between">
                        <a
                            className="inline-flex items-center font-semibold font-heading"
                            href="#"
                        >
                            <svg
                                className="mr-3"
                                width={32}
                                height={31}
                                viewBox="0 0 32 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>Sign&nbsp;In</span>
                        </a>
                        <div className="flex items-center">
                            <a className="mr-10" href="#">
                                <svg
                                    width={23}
                                    height={20}
                                    viewBox="0 0 23 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                            <a className="flex items-center" href="#">
                                <svg
                                    className="mr-3"
                                    width={23}
                                    height={23}
                                    viewBox="0 0 23 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="inline-block w-6 h-6 text-center bg-gray-100 rounded-full font-semibold font-heading">
                                    3
                                </span>
                            </a>
                        </div>
                    </div>
                    <input
                        className="block mb-10 py-5 px-8 bg-gray-100 rounded-md border-transparent focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
                        type="search"
                        placeholder="Search"
                    />
                    <ul className="text-3xl font-bold font-heading">
                        <li className="mb-8">
                            <a href="#">Category</a>
                        </li>
                        <li className="mb-8">
                            <a href="#">Collection</a>
                        </li>
                        <li className="mb-8">
                            <a href="#">Story</a>
                        </li>
                        <li>
                            <a href="#">Brand</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>




    )
}

export default Hero