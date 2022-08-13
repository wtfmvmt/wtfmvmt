
const ContactSection = () => {

    return (

        <section className="py-26">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4 mb-16 items-center">
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <div className="max-w-xl">
                            <span className="text-lg font-extrabold text-orange-500">
                                Section label
                            </span>
                            <h1 className="text-4xl font-extrabold font-heading mt-3 mb-3">
                                Join the MVMT!
                            </h1>
                            <p className="text-xl font-extrabold leading-8">
                                Technology connects us like the woves of realitys fabric.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="flex flex-wrap items-center lg:justify-end">
                            <a
                                className="inline-block w-full md:w-auto mb-2 md:mb-0 md:mr-4 py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                                href="#"
                            >
                                Send us message
                            </a>
                            <a
                                className="inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200"
                                href="#"
                            >
                                About Us
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full lg:w-1/3 px-4 mb-16 lg:mb-0">
                        <div className="flex mb-14">
                            <div className="flex-shrink-0 -mt-4 inline-flex items-center justify-center w-16 h-16 mr-8 bg-white rounded-full border-3 border-indigo-900 text-indigo-900 shadow-md">
                                <svg
                                    width={28}
                                    height={28}
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.88 15.3333C23.5867 15.3333 23.28 15.24 22.9867 15.1733C22.3931 15.0406 21.8095 14.8668 21.24 14.6533C20.6214 14.4283 19.9415 14.44 19.3311 14.6861C18.7206 14.9323 18.2228 15.3955 17.9333 15.9866L17.64 16.6C16.3451 15.8656 15.1488 14.9695 14.08 13.9333C13.0438 12.8645 12.1477 11.6682 11.4133 10.3733L12.0267 10.0933C12.6178 9.80385 13.081 9.306 13.3272 8.69555C13.5733 8.0851 13.585 7.40518 13.36 6.78663C13.1482 6.212 12.9745 5.62406 12.84 5.02663C12.7733 4.73329 12.72 4.42663 12.68 4.13329C12.5181 3.19412 12.0262 2.34362 11.2928 1.73495C10.5595 1.12627 9.63291 0.799438 8.67999 0.813293H4.66665C4.10298 0.812554 3.54552 0.930957 3.03081 1.16074C2.5161 1.39052 2.05577 1.72649 1.67999 2.14663C1.29641 2.57816 1.01081 3.08763 0.842789 3.64001C0.674774 4.19239 0.628331 4.7746 0.706652 5.34663C1.43143 10.8961 3.96693 16.0515 7.91999 20.0133C11.8818 23.9663 17.0371 26.5018 22.5867 27.2266C22.7597 27.2398 22.9336 27.2398 23.1067 27.2266C24.0899 27.2281 25.0392 26.8673 25.7733 26.2133C26.1935 25.8375 26.5294 25.3772 26.7592 24.8625C26.989 24.3478 27.1074 23.7903 27.1067 23.2266V19.2266C27.0995 18.3053 26.7745 17.4148 26.1866 16.7054C25.5987 15.9961 24.7839 15.5114 23.88 15.3333ZM24.5333 23.3333C24.5329 23.5194 24.4935 23.7033 24.4177 23.8732C24.3419 24.0431 24.2314 24.1953 24.0933 24.32C23.9472 24.4531 23.7733 24.5521 23.5842 24.6097C23.3951 24.6674 23.1955 24.6823 23 24.6533C18.0244 24.0035 13.4003 21.736 9.83999 18.2C6.27661 14.6366 3.98936 9.99645 3.33332 4.99996C3.30435 4.80441 3.31923 4.60486 3.37688 4.41576C3.43454 4.22667 3.53351 4.05276 3.66665 3.90663C3.79281 3.76683 3.94716 3.65534 4.11952 3.5795C4.29188 3.50366 4.47835 3.46519 4.66665 3.46663H8.66665C8.97487 3.45909 9.27617 3.55861 9.51927 3.74822C9.76237 3.93784 9.93225 4.20585 9.99999 4.50663C9.99999 4.86663 10.12 5.23996 10.2 5.59996C10.3541 6.29844 10.5591 6.98472 10.8133 7.65329L8.94665 8.53329C8.6258 8.68058 8.37647 8.9491 8.25332 9.27996C8.11996 9.60457 8.11996 9.96868 8.25332 10.2933C10.1723 14.4036 13.4763 17.7077 17.5867 19.6266C17.9113 19.76 18.2754 19.76 18.6 19.6266C18.9308 19.5035 19.1994 19.2541 19.3467 18.9333L20.1867 17.0666C20.8745 17.3175 21.5783 17.5224 22.2933 17.68C22.64 17.76 23.0133 17.8266 23.3733 17.88C23.6741 17.9477 23.9421 18.1176 24.1317 18.3607C24.3213 18.6038 24.4209 18.9051 24.4133 19.2133L24.5333 23.3333ZM16.6667 0.666626C16.36 0.666626 16.04 0.666626 15.7333 0.666626C15.3797 0.696684 15.0525 0.865986 14.8237 1.13729C14.5949 1.40859 14.4833 1.75967 14.5133 2.11329C14.5434 2.46691 14.7127 2.79411 14.984 3.02291C15.2553 3.2517 15.6064 3.36335 15.96 3.33329H16.6667C18.7884 3.33329 20.8232 4.17615 22.3235 5.67644C23.8238 7.17673 24.6667 9.21156 24.6667 11.3333C24.6667 11.5733 24.6667 11.8 24.6667 12.04C24.6371 12.3917 24.7482 12.7408 24.9757 13.0108C25.2031 13.2807 25.5283 13.4494 25.88 13.48H25.9867C26.3204 13.4813 26.6426 13.3574 26.8895 13.1328C27.1363 12.9081 27.2899 12.5991 27.32 12.2666C27.32 11.96 27.32 11.64 27.32 11.3333C27.32 8.50663 26.198 5.79554 24.2005 3.79553C22.203 1.79553 19.4933 0.670159 16.6667 0.666626V0.666626ZM19.3333 11.3333C19.3333 11.6869 19.4738 12.0261 19.7238 12.2761C19.9739 12.5262 20.313 12.6666 20.6667 12.6666C21.0203 12.6666 21.3594 12.5262 21.6095 12.2761C21.8595 12.0261 22 11.6869 22 11.3333C22 9.9188 21.4381 8.56225 20.4379 7.56206C19.4377 6.56186 18.0811 5.99996 16.6667 5.99996C16.313 5.99996 15.9739 6.14044 15.7238 6.39048C15.4738 6.64053 15.3333 6.97967 15.3333 7.33329C15.3333 7.68691 15.4738 8.02605 15.7238 8.2761C15.9739 8.52615 16.313 8.66663 16.6667 8.66663C17.3739 8.66663 18.0522 8.94758 18.5523 9.44768C19.0524 9.94777 19.3333 10.626 19.3333 11.3333Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-extrabold mb-3">Phone</h3>
                                <p className="text-xl sm:text-2xl text-orange-400">
                                    +7-843-672-431
                                </p>
                            </div>
                        </div>
                        <div className="flex mb-14">
                            <div className="flex-shrink-0 -mt-4 inline-flex items-center justify-center w-16 h-16 mr-8 bg-white rounded-full border-3 border-indigo-900 text-indigo-900 shadow-md">
                                <svg
                                    width={24}
                                    height={28}
                                    viewBox="0 0 24 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22.9467 9.76003L14.6667 1.7067C13.9653 1.03984 13.0345 0.667969 12.0667 0.667969C11.0989 0.667969 10.1681 1.03984 9.46667 1.7067L1.18667 9.7067C0.818775 10.0279 0.522887 10.4231 0.318386 10.8666C0.113886 11.31 0.00538751 11.7917 0 12.28V23.72C0.014054 24.6902 0.412058 25.6152 1.10682 26.2925C1.80159 26.9698 2.73647 27.3441 3.70667 27.3334H20.2933C21.2635 27.3441 22.1984 26.9698 22.8932 26.2925C23.5879 25.6152 23.9859 24.6902 24 23.72V12.28C23.999 11.8113 23.9054 11.3474 23.7246 10.915C23.5439 10.4826 23.2795 10.0901 22.9467 9.76003V9.76003ZM11.2533 3.6267C11.4573 3.44025 11.7237 3.33686 12 3.33686C12.2763 3.33686 12.5427 3.44025 12.7467 3.6267L20 10.6667L12.7067 17.7067C12.5027 17.8932 12.2363 17.9965 11.96 17.9965C11.6837 17.9965 11.4173 17.8932 11.2133 17.7067L4 10.6667L11.2533 3.6267ZM21.3333 23.72C21.3162 23.9817 21.1982 24.2266 21.0043 24.4031C20.8103 24.5797 20.5555 24.6742 20.2933 24.6667H3.70667C3.44451 24.6742 3.18966 24.5797 2.99571 24.4031C2.80176 24.2266 2.68381 23.9817 2.66667 23.72V13.1334L8.06667 18.3334L5.85333 20.4667C5.605 20.7165 5.46561 21.0545 5.46561 21.4067C5.46561 21.7589 5.605 22.0969 5.85333 22.3467C5.97726 22.4767 6.12618 22.5803 6.29114 22.6514C6.45611 22.7224 6.63373 22.7593 6.81333 22.76C7.15663 22.7587 7.48616 22.6249 7.73333 22.3867L10.0933 20.12C10.6795 20.4782 11.3531 20.6677 12.04 20.6677C12.7269 20.6677 13.4005 20.4782 13.9867 20.12L16.3467 22.3867C16.5938 22.6249 16.9234 22.7587 17.2667 22.76C17.4463 22.7593 17.6239 22.7224 17.7889 22.6514C17.9538 22.5803 18.1027 22.4767 18.2267 22.3467C18.475 22.0969 18.6144 21.7589 18.6144 21.4067C18.6144 21.0545 18.475 20.7165 18.2267 20.4667L16 18.3334L21.3333 13.1334V23.72Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-extrabold mb-3">Email</h3>
                                <p className="text-xl sm:text-2xl text-orange-400">
                                    contact@wtfmvmt.com
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-shrink-0 -mt-4 inline-flex items-center justify-center w-16 h-16 mr-8 bg-white rounded-full border-3 border-indigo-900 text-indigo-900 shadow-md">
                                <svg
                                    width={32}
                                    height={32}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M28.0001 2.66663H4.00008C3.64646 2.66663 3.30732 2.8071 3.05727 3.05715C2.80722 3.3072 2.66675 3.64634 2.66675 3.99996V28C2.66675 28.3536 2.80722 28.6927 3.05727 28.9428C3.30732 29.1928 3.64646 29.3333 4.00008 29.3333H28.0001C28.3537 29.3333 28.6928 29.1928 28.9429 28.9428C29.1929 28.6927 29.3334 28.3536 29.3334 28V3.99996C29.3334 3.64634 29.1929 3.3072 28.9429 3.05715C28.6928 2.8071 28.3537 2.66663 28.0001 2.66663ZM10.6667 26.6666H5.33341V21.3333H10.6667V26.6666ZM10.6667 18.6666H5.33341V13.3333H10.6667V18.6666ZM10.6667 10.6666H5.33341V5.33329H10.6667V10.6666ZM18.6667 26.6666H13.3334V21.3333H18.6667V26.6666ZM18.6667 18.6666H13.3334V13.3333H18.6667V18.6666ZM18.6667 10.6666H13.3334V5.33329H18.6667V10.6666ZM26.6667 26.6666H21.3334V21.3333H26.6667V26.6666ZM26.6667 18.6666H21.3334V13.3333H26.6667V18.6666ZM26.6667 10.6666H21.3334V5.33329H26.6667V10.6666Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-extrabold mb-3">Socials</h3>
                                <div className="flex items-center justify-center">
                                    <a
                                        className="inline-block mr-6 text-orange-400 hover:text-orange-500"
                                        href="#"
                                    >
                                        <svg
                                            width={10}
                                            height={18}
                                            viewBox="0 0 10 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6.63482 17.7272V9.766H9.35818L9.76676 6.66243H6.63482V4.68126C6.63482 3.78299 6.88809 3.17083 8.20285 3.17083L9.877 3.17015V0.394215C9.58748 0.357312 8.59366 0.272705 7.43696 0.272705C5.02158 0.272705 3.36797 1.71878 3.36797 4.37389V6.66243H0.636353V9.766H3.36797V17.7272H6.63482Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        className="inline-block mr-6 text-orange-400 hover:text-orange-500"
                                        href="#"
                                    >
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M21.8181 6.14598C21.1356 6.44844 20.4032 6.65356 19.6336 6.74513C20.4194 6.27462 21.0208 5.52831 21.3059 4.64177C20.5689 5.0775 19.7553 5.39389 18.8885 5.56541C18.1943 4.82489 17.2069 4.36365 16.1118 4.36365C14.0108 4.36365 12.3072 6.06719 12.3072 8.16707C12.3072 8.46489 12.3408 8.75577 12.4057 9.03392C9.24434 8.87513 6.44104 7.3605 4.56483 5.05895C4.23686 5.61986 4.05028 6.27344 4.05028 6.9711C4.05028 8.29107 4.72243 9.45574 5.74225 10.1371C5.11877 10.1163 4.53237 9.94477 4.01901 9.65968V9.70719C4.01901 11.5498 5.33086 13.0876 7.07031 13.4376C6.75161 13.5234 6.41555 13.5709 6.06789 13.5709C5.82222 13.5709 5.58464 13.5466 5.35171 13.5002C5.8361 15.0125 7.24067 16.1123 8.90483 16.1424C7.6034 17.1623 5.96243 17.7683 4.1801 17.7683C3.87301 17.7683 3.57052 17.7498 3.27271 17.7162C4.95655 18.7974 6.95561 19.4279 9.10416 19.4279C16.1026 19.4279 19.928 13.6312 19.928 8.60398L19.9153 8.11147C20.6627 7.57834 21.3094 6.90853 21.8181 6.14598Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        className="inline-block mr-6 text-orange-400 hover:text-orange-500"
                                        href="#"
                                    >
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7.60063 2.18176H16.3991C19.3873 2.18176 21.8183 4.61276 21.8182 7.60069V16.3992C21.8182 19.3871 19.3873 21.8181 16.3991 21.8181H7.60063C4.6127 21.8181 2.18182 19.3872 2.18182 16.3992V7.60069C2.18182 4.61276 4.6127 2.18176 7.60063 2.18176ZM16.3993 20.0759C18.4266 20.0759 20.0761 18.4266 20.0761 16.3992H20.076V7.60069C20.076 5.57343 18.4265 3.924 16.3991 3.924H7.60063C5.57337 3.924 3.92406 5.57343 3.92406 7.60069V16.3992C3.92406 18.4266 5.57337 20.076 7.60063 20.0759H16.3993ZM6.85715 12.0001C6.85715 9.16418 9.16419 6.85709 12 6.85709C14.8358 6.85709 17.1429 9.16418 17.1429 12.0001C17.1429 14.8358 14.8358 17.1428 12 17.1428C9.16419 17.1428 6.85715 14.8358 6.85715 12.0001ZM8.62799 11.9999C8.62799 13.8592 10.1407 15.3718 12 15.3718C13.8593 15.3718 15.372 13.8592 15.372 11.9999C15.372 10.1405 13.8594 8.62784 12 8.62784C10.1406 8.62784 8.62799 10.1405 8.62799 11.9999Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        className="inline-block text-orange-400 hover:text-orange-500"
                                        href="#"
                                    >
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 px-4">
                        <img
                            className="block object-cover border-3 border-indigo-900 rounded-2xl shadow-md"
                            src="nigodo-assets/contact/map.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection