import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <>
      <section className="relative pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 flex w-full h-3/4 md:h-2/3 bg-purple-300 bg-purple-600">
          <img
            className="w-64 md:w-80 2xl:w-auto self-start"
            src="nigodo-assets/background-elements/pattern-dots-orange-left.svg"
            alt=""
          />
          <img
            className="w-64 md:w-80 2xl:w-auto self-end ml-auto"
            src="nigodo-assets/background-elements/pattern-dots-orange-right.svg"
            alt=""
          />
          <img
            className="absolute bottom-0 transform translate-y-1/2"
            src="nigodo-assets/background-elements/pattern-horizontal-orange.svg"
            alt=""
          />
        </div>
        <nav className="flex mb-20 justify-between items-center py-6 px-10 relative text-white">
          <a className="text-lg font-bold" href="#">
            <img
              className="h-32"
              src="https://static.shuffle.dev/uploads/files/c5/c588f2e6e97dec56040c09794a6a944110e98d9d/Untitled-design.png"
              alt=""
              width="auto"
            />
          </a>
          <div className="xl:hidden">
            <button className="navbar-burger focus:outline-none text-indigo-900 hover:text-indigo-800">
              <svg
                className="block h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <ul className="hidden xl:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <li>
              <a
                className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800 text-white"
                href="#"
              >
                Vision
              </a>
            </li>
            <li>
              <a
                className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800"
                href="#"
              >
                Community
              </a>
            </li>
            <li>
              <a
                className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800"
                href="#"
              >
                Events
              </a>
            </li>
            <li>
              <a className="text-lg font-extrabold hover:text-indigo-800" href="#">
                Projects
              </a>
            </li>
          </ul>
          <div className="hidden xl:flex items-center">
            <a
              className="inline-block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
              href="#"
            >
              Connect with Us
            </a>
          </div>
        </nav>
        <div className="container px-4 mx-auto relative">
          <div className="max-w-5xl mx-auto text-center">
            <span className="text-xl md:text-2xl font-extrabold text-orange-500 font-serif text-blue-200">
              Circa 2020
            </span>
            <h1 className="max-w-4xl mx-auto text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading mt-1 mb-6 font-serif text-white shadow-2xl">
              WeTheFuture is a community of artists, builders and thinkers focused on
              building a better future
            </h1>
            <p className="text-xl md:text-2xl font-extrabold leading-8 mb-12 font-serif text-purple-200">
              We are the Futures {"{"}Builders | Artist | Engineers | Providers{"}"}
            </p>
            <div className="flex flex-wrap mb-20 justify-center">
              <a
                className="inline-block w-full md:w-auto mb-2 md:mb-0 md:mr-4 py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 shadow rounded transition duration-200 border-blue-800"
                href="#"
              >
                RSVP for Latest Event
              </a>
            </div>
            <img
              className="block w-full h-128 lg:h-140 object-cover border-3 border-indigo-900 rounded-2xl shadow-lg"
              src="https://images.unsplash.com/photo-1591197172062-c718f82aba20?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHw2fHxjb21tdW5pdHl8ZW58MHx8fHwxNjYwMzUzNTk2&ixlib=rb-1.2.1&q=80&w=1920"
              alt=""
            />
          </div>
        </div>
        <div className="hidden navbar-menu relative z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full md:w-5/6 max-w-sm py-8 px-8 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-2xl font-bold leading-none" href="#">
                <img
                  className="h-6"
                  src="nigodo-assets/logo-nigodo.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="my-auto">
              <ul className="py-10">
                <li className="mb-1">
                  <a
                    className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                    href="#"
                  >
                    Product
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                    href="#"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <a
                className="block mb-6 text-center leading-6 text-lg font-extrabold hover:text-indigo-800"
                href="#"
              >
                Log In
              </a>
              <a
                className="block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                href="#"
              >
                Sign Up
              </a>
            </div>
          </nav>
        </div>
      </section>

      <section className="py-26 bg-orange-200 relative overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full md:h-full"
          src="https://images.unsplash.com/photo-1657216328532-e03aaa13c089?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwzMnx8cGF0dGVybiUyMHB1cnBsZSUyMGZsYXR8ZW58MHx8fHwxNjYwMzUwODY4&ixlib=rb-1.2.1&q=80&w=1920"
          alt=""
        />
        <div className="container px-4 mx-auto relative">
          <div className="max-w-5xl mx-auto mb-16 text-center text-white">
            <span className="text-lg font-extrabold text-orange-500">[Label]</span>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6">
              Events
            </h1>
            <p className="text-xl font-extrabold leading-8">
              VR Events, Meetups, Project Workshops, Community Service @data
            </p>
          </div>
          <img
            className="block w-full h-112 lg:h-156 mb-16 object-cover border-3 border-indigo-900 rounded-2xl shadow-lg"
            src="https://images.unsplash.com/photo-1469488865564-c2de10f69f96?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwyfHxoaXBwaWVzfGVufDB8fHx8MTY2MDM1MzU2Mg&ixlib=rb-1.2.1&q=80&w=1920"
            alt=""
          />
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <div className="h-full max-w-md mx-auto py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center">
                <img
                  className="block mx-auto mb-4"
                  src="nigodo-assets/features/icon-message.svg"
                  alt=""
                />
                <h4 className="text-2xl font-extrabold mb-6">
                  HippieHideout | Aug 20
                </h4>
                <p className="text-lg font-extrabold leading-7">
                  Stay connected with your team and make quick decisions wherever you
                  are.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <div className="h-full max-w-md mx-auto py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center">
                <img
                  className="block mx-auto mb-4"
                  src="nigodo-assets/features/icon-bar.svg"
                  alt=""
                />
                <h4 className="text-2xl font-extrabold mb-6">
                  HippieHideout | Aug 20
                </h4>
                <p className="text-lg font-extrabold leading-7">
                  Get a complete sales dashboard in the cloud. See activity, revenue
                  and social metrics all in one place.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <div className="h-full max-w-md mx-auto py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center">
                <img
                  className="block mx-auto mb-4"
                  src="nigodo-assets/features/icon-people.svg"
                  alt=""
                />
                <h4 className="text-2xl font-extrabold mb-6">
                  HippieHideout | Aug 20
                </h4>
                <p className="text-lg font-extrabold leading-7">
                  Our calendar lets you know what is happening with customer and
                  projects so you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-26 border-3 border-l-0 border-r-0 border-indigo-900">
          <div className="pb-16 border-b-3 border-indigo-900">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap justify-between items-center">
                <div className="w-full md:w-1/3 mb-12">
                  <a className="inline-block mx-auto mb-8" href="#">
                    <img
                      className="h-12 h-40"
                      src="https://static.shuffle.dev/uploads/files/c5/c588f2e6e97dec56040c09794a6a944110e98d9d/Untitled-design.png"
                      alt=""
                    />
                  </a>
                  <p className="max-w-xs text-lg font-extrabold leading-8">
                    We are the Future.
                  </p>
                </div>
                <div className="w-full md:w-1/3 mb-12 md:text-right">
                  <div className="mb-4">
                    <a className="inline-block w-auto" href="#">
                      <img src="nigodo-assets/footers/google-play.svg" alt="" />
                    </a>
                  </div>
                  <div>
                    <a className="inline-block w-auto" href="#">
                      <img src="nigodo-assets/footers/app-store.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex flex-wrap items-center -mb-6">
                    <a
                      className="inline-block mr-4 sm:mr-8 lg:mr-16 mb-6 text-lg font-extrabold hover:text-indigo-800"
                      href="#"
                    >
                      Projects
                    </a>
                    <a
                      className="inline-block mr-4 sm:mr-8 lg:mr-16 mb-6 text-lg font-extrabold hover:text-indigo-800"
                      href="#"
                    >
                      Vision
                    </a>
                    <a
                      className="inline-block mr-4 sm:mr-8 lg:mr-16 mb-6 text-lg font-extrabold hover:text-indigo-800"
                      href="#"
                    >
                      Services
                    </a>
                    <a
                      className="inline-block mr-4 sm:mr-8 lg:mr-16 mb-6 text-lg font-extrabold hover:text-indigo-800"
                      href="#"
                    >
                      Resources
                    </a>
                    <a
                      className="inline-block mr-4 sm:mr-8 lg:mr-16 mb-6 text-lg font-extrabold hover:text-indigo-800"
                      href="#"
                    >
                      Carrers
                    </a>
                    <a
                      className="inline-block mr-4 sm:mr-8 lg:mr-16 mb-6 text-lg font-extrabold hover:text-indigo-800"
                      href="#"
                    >
                      Help
                    </a>
                    <a
                      className="inline-block mb-6 text-lg font-extrabold hover:text-indigo-800"
                      href="#"
                    >
                      Privacy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-4 pt-16 pb-24 mx-auto">
            <div className="flex flex-wrap justify-between">
              <div className="w-full lg:w-auto mb-12 lg:mb-0">
                <p className="text-center text-lg font-extrabold font-serif">
                  © 2022 WeTheFuture. All rights reserved.
                </p>
              </div>
              <div className="w-full lg:w-auto flex items-center justify-center">
                <a
                  className="inline-block text-indigo-900 hover:text-indigo-800 mr-8"
                  href="#"
                >
                  <svg
                    width={17}
                    height={30}
                    viewBox="0 0 17 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.7247 29.5454V16.2767H15.2637L15.9446 11.1041H10.7247V7.80212C10.7247 6.305 11.1469 5.28473 13.3381 5.28473L16.1284 5.28361V0.657045C15.6458 0.59554 13.9895 0.454529 12.0616 0.454529C8.03601 0.454529 5.28 2.86466 5.28 7.28983V11.1041H0.727295V16.2767H5.28V29.5454H10.7247Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  className="inline-block text-indigo-900 hover:text-indigo-800 mr-8"
                  href="#"
                >
                  <svg
                    width={32}
                    height={26}
                    viewBox="0 0 32 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31.3636 3.24326C30.2259 3.74735 29.0053 4.08922 27.7228 4.24185C29.0323 3.45765 30.0347 2.21382 30.5098 0.73624C29.2814 1.46245 27.9255 1.98978 26.4808 2.27563C25.3239 1.04144 23.6783 0.272705 21.853 0.272705C18.3513 0.272705 15.5121 3.11195 15.5121 6.61175C15.5121 7.10811 15.5681 7.59291 15.6762 8.05649C10.4073 7.79185 5.73508 5.26745 2.60806 1.43154C2.06145 2.36639 1.75049 3.45569 1.75049 4.61846C1.75049 6.81841 2.87074 8.75952 4.57044 9.89518C3.5313 9.86043 2.55397 9.57457 1.69837 9.09942V9.17862C1.69837 12.2496 3.88478 14.8127 6.78387 15.396C6.25271 15.5389 5.69261 15.6181 5.11317 15.6181C4.70372 15.6181 4.30776 15.5776 3.91953 15.5003C4.72685 18.0208 7.06781 19.8538 9.8414 19.904C7.67236 21.6037 4.93741 22.6139 1.96685 22.6139C1.45503 22.6139 0.950892 22.583 0.454529 22.5269C3.26094 24.329 6.59271 25.3797 10.1736 25.3797C21.8377 25.3797 28.2134 15.7186 28.2134 7.33993L28.1922 6.51907C29.4379 5.63053 30.5156 4.51417 31.3636 3.24326Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  className="inline-block text-indigo-900 hover:text-indigo-800"
                  href="#"
                >
                  <svg
                    width={34}
                    height={34}
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.6677 0.636353H24.3319C29.3122 0.636353 33.3638 4.68801 33.3636 9.6679V24.3321C33.3636 29.312 29.3122 33.3636 24.3319 33.3636H9.6677C4.68782 33.3636 0.636353 29.3122 0.636353 24.3321V9.6679C0.636353 4.68801 4.68782 0.636353 9.6677 0.636353ZM24.3321 30.4599C27.711 30.4599 30.4601 27.711 30.4601 24.3321H30.4599V9.6679C30.4599 6.28913 27.7109 3.54007 24.3319 3.54007H9.6677C6.28893 3.54007 3.54007 6.28913 3.54007 9.6679V24.3321C3.54007 27.711 6.28893 30.4601 9.6677 30.4599H24.3321ZM8.42856 17.0002C8.42856 12.2737 12.2736 8.42856 17 8.42856C21.7263 8.42856 25.5714 12.2737 25.5714 17.0002C25.5714 21.7265 21.7263 25.5714 17 25.5714C12.2736 25.5714 8.42856 21.7265 8.42856 17.0002ZM11.38 17C11.38 20.0988 13.9012 22.6198 17 22.6198C20.0988 22.6198 22.62 20.0988 22.62 17C22.62 13.901 20.099 11.3798 17 11.3798C13.901 11.3798 11.38 13.901 11.38 17Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>


  )
}

export default Home
