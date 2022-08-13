import type { NextPage } from 'next'
import Image from "next/image"


const Home: NextPage = () => {
  return (
    <>
      <section className="relative pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 flex w-full h-3/4 md:h-2/3 bg-purple-300 bg-purple-600">
          <Image
            className="w-64 md:w-80 2xl:w-auto self-start"
            src="nigodo-assets/background-elements/pattern-dots-orange-left.svg"
            alt=""
          />
          <Image
            className="w-64 md:w-80 2xl:w-auto self-end ml-auto"
            src="nigodo-assets/background-elements/pattern-dots-orange-right.svg"
            alt=""
          />
          <Image
            className="absolute bottom-0 transform translate-y-1/2"
            src="nigodo-assets/background-elements/pattern-horizontal-orange.svg"
            alt=""
          />
        </div>
        <nav className="flex mb-20 justify-between items-center py-6 px-10 relative text-white">
          <a className="text-lg font-bold" href="#">
            <Image
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
            <Image
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
                <Image
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
        <Image
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
          <Image
            className="block w-full h-112 lg:h-156 mb-16 object-cover border-3 border-indigo-900 rounded-2xl shadow-lg"
            src="https://images.unsplash.com/photo-1469488865564-c2de10f69f96?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwyfHxoaXBwaWVzfGVufDB8fHx8MTY2MDM1MzU2Mg&ixlib=rb-1.2.1&q=80&w=1920"
            alt=""
          />
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <div className="h-full max-w-md mx-auto py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center">
                <Image
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
                <Image
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
                <Image
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
      <section className="py-26 bg-white relative overflow-hidden">
        <Image
          className="absolute top-0 right-0 md:h-full w-1/3"
          src="nigodo-assets/background-elements/pattern-smash-rotate-indigo-light-right.svg"
          alt=""
        />
        <Image
          className="absolute top-0 left-0 md:h-full w-1/2 md:w-3/5"
          src="nigodo-assets/background-elements/pattern-dots-2-indigo-light-left.svg"
          alt=""
        />
        <div className="container px-4 mx-auto relative">
          <div className="flex flex-wrap -mx-4 mb-16 items-center">
            <div className="w-full lg:w-1/2 px-4 mb-20 lg:mb-0">
              <span className="text-lg font-extrabold text-indigo-500">
                How it works
              </span>
              <h1 className="max-w-xl text-3xl md:text-4xl font-extrabold font-heading mt-2 mb-4">
                How to connect with our community?
              </h1>
              <p className="text-xl font-extrabold">
                @data(Community Call To Action Plan)
              </p>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative">
                <Image
                  className="block w-full h-80 object-cover border-3 border-indigo-900 rounded-2xl shadow-lg"
                  src="https://images.unsplash.com/photo-1634269395970-1d5c5f116c6a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwzOHx8aGlwcGllc3xlbnwwfHx8fDE2NjAzNTYwOTk&ixlib=rb-1.2.1&q=80&w=1920"
                  alt=""
                />
                <a
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center w-20 h-20 bg-indigo-900 hover:bg-indigo-800 rounded-full"
                  href="#"
                >
                  <svg
                    width={22}
                    height={24}
                    viewBox="0 0 22 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6666 8L6.86665 0.666667C6.19998 0.266667 5.39998 0 4.59998 0C2.06665 0 0.0666504 2 0.0666504 4.53333V19.4667C0.0666504 22 2.06665 24 4.59998 24C5.39998 24 6.19998 23.7333 6.86665 23.3333L19.8 15.8667C20.4667 15.4667 21 14.9333 21.4 14.2667C22.6 12.1333 21.9333 9.33333 19.6666 8Z"
                      fill="#F7F9FB"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 -mb-10">
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-10">
              <div className="max-w-xs">
                <div className="inline-flex items-center justify-center w-18 h-18 mb-6 bg-white rounded-full border-3 border-indigo-900 text-indigo-900 shadow-md">
                  <span className="text-3xl font-extrabold leading-8">1</span>
                </div>
                <h3 className="text-2xl font-extrabold mb-5">Watch a video.</h3>
                <p className="font-bold leading-6">
                  Get a complete sales dashboard in the cloud.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-10">
              <div className="max-w-xs">
                <div className="inline-flex items-center justify-center w-18 h-18 mb-6 bg-white rounded-full border-3 border-indigo-900 text-indigo-900 shadow-md">
                  <span className="text-3xl font-extrabold leading-8">2</span>
                </div>
                <h3 className="text-2xl font-extrabold mb-5">Step B</h3>
                <p className="font-bold leading-6">
                  Our calendar lets you know what is happening with customer
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-10">
              <div className="max-w-xs">
                <div className="inline-flex items-center justify-center w-18 h-18 mb-6 bg-white rounded-full border-3 border-indigo-900 text-indigo-900 shadow-md">
                  <span className="text-3xl font-extrabold leading-8">3</span>
                </div>
                <h3 className="text-2xl font-extrabold mb-5">Step C</h3>
                <p className="font-bold leading-6">
                  End to End Business Platform, Sales Management, Marketing
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-10">
              <div className="max-w-xs">
                <div className="inline-flex items-center justify-center w-18 h-18 mb-6 bg-white rounded-full border-3 border-indigo-900 text-indigo-900 shadow-md">
                  <span className="text-3xl font-extrabold leading-8">4</span>
                </div>
                <h3 className="text-2xl font-extrabold mb-5">Step D</h3>
                <p className="font-bold leading-6">
                  A tool that lets you build a dream website even if you know nothing
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-10">
              <div className="max-w-xs">
                <div className="inline-flex items-center justify-center w-18 h-18 mb-6 bg-white rounded-full border-3 border-indigo-900 text-indigo-900 shadow-md">
                  <span className="text-3xl font-extrabold leading-8">5</span>
                </div>
                <h3 className="text-2xl font-extrabold mb-5">Step E</h3>
                <p className="font-bold leading-6">
                  A tool that lets you build a dream website even if you know nothing
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-10">
              <div className="max-w-xs">
                <div className="inline-flex items-center justify-center w-18 h-18 mb-6 bg-white rounded-full border-3 border-indigo-900 text-indigo-900 shadow-md">
                  <span className="text-3xl font-extrabold leading-8">6</span>
                </div>
                <h3 className="text-2xl font-extrabold mb-5">Step F</h3>
                <p className="font-bold leading-6">
                  A tool that lets you build a dream website even if you know nothing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-26 relative overflow-hidden bg-purple-800">
        <Image
          className="absolute top-0 w-1/2 md:w-1/3 md:h-full"
          src="nigodo-assets/background-elements/pattern-smash-dots-orange-left.svg"
          alt=""
        />
        <Image
          className="absolute top-0 right-0 w-1/2 md:w-1/3 md:h-full"
          src="nigodo-assets/background-elements/pattern-smash-dots-orange-right.svg"
          alt=""
        />
        <div className="container px-4 mx-auto relative">
          <div className="text-center text-white">
            <span className="text-lg font-extrabold text-orange-500">Newsletter</span>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-3 mb-4">
              Sign up for our newsletter
            </h1>
            <p className="text-xl font-extrabold leading-8 mb-10">
              Stay in the loop with everything you need to know.
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="flex flex-wrap -mx-2 justify-center">
              <div className="flex-grow w-full md:w-auto px-2 mb-2">
                <input
                  className="inline-block w-full p-4 text-lg font-extrabold placeholder-indigo-900 shadow border-2 border-indigo-900 rounded outline-none"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="w-full md:w-auto px-2 mb-2">
                <a
                  className="inline-flex items-center justify-center w-full md:w-auto h-full py-4 px-5 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 rounded transition duration-200"
                  href="#"
                >
                  Subscribe
                </a>
              </div>
              <div className="w-full px-2">
                <p className="text-xs font-extrabold">
                  We care about your data in our privacy policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-26 bg-white relative overflow-hidden">
        <Image
          className="absolute top-0 right-0 w-1/2 md:h-full"
          src="nigodo-assets/background-elements/pattern-dots-2-indigo-light-right.svg"
          alt=""
        />
        <Image
          className="absolute top-0 left-0 w-1/2 md:h-full"
          src="nigodo-assets/background-elements/pattern-dots-2-indigo-light-left.svg"
          alt=""
        />
        <div className="container px-4 mx-auto relative">
          <h2 className="text-center text-xl font-extrabold mb-6">
            Our Partnerships
          </h2>
          <div className="flex flex-wrap bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
            <div className="w-1/2 lg:w-1/3 xl:w-1/6 border-b-3 border-indigo-900 xl:border-0">
              <div className="flex items-center justify-center h-44 p-6 xl:border-r-3 border-indigo-900">
                <Image
                  className="block mx-auto h-8"
                  src="nigodo-assets/logo-clouds/microsoft.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 lg:w-1/3 xl:w-1/6 border-b-3 border-indigo-900 xl:border-0">
              <div className="flex items-center justify-center h-44 p-6 xl:border-r-3 border-indigo-900">
                <Image
                  className="block mx-auto h-8"
                  src="nigodo-assets/logo-clouds/google.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 lg:w-1/3 xl:w-1/6 border-b-3 border-indigo-900 xl:border-0">
              <div className="flex items-center justify-center h-44 p-6 xl:border-r-3 border-indigo-900">
                <Image
                  className="block mx-auto h-8"
                  src="nigodo-assets/logo-clouds/spotify.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 lg:w-1/3 xl:w-1/6 border-b-3 border-indigo-900 lg:border-0">
              <div className="flex items-center justify-center h-44 p-6 xl:border-r-3 border-indigo-900">
                <Image
                  className="block mx-auto h-8"
                  src="nigodo-assets/logo-clouds/slack.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 lg:w-1/3 xl:w-1/6">
              <div className="flex items-center justify-center h-44 p-6 xl:border-r-3 border-indigo-900">
                <Image
                  className="block mx-auto h-9"
                  src="nigodo-assets/logo-clouds/sass.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 lg:w-1/3 xl:w-1/6">
              <div className="flex items-center justify-center h-44 p-6">
                <Image
                  className="block mx-auto h-8"
                  src="nigodo-assets/logo-clouds/hubspot.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-26 relative overflow-hidden bg-purple-800">
        <Image
          className="absolute top-0 left-0 w-1/2 mt-4 md:mt-16"
          src="nigodo-assets/background-elements/pattern-dots-2-orange-left.svg"
          alt=""
        />
        <Image
          className="absolute bottom-0 right-0 mb-20"
          src="nigodo-assets/background-elements/pattern-smash-rotate-orange-right.svg"
          alt=""
        />
        <div className="container px-4 mx-auto relative">
          <div className="max-w-4xl mx-auto mb-16 text-center text-white">
            <span className="text-lg font-extrabold text-orange-500">
              Section label
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-2 mb-4">
              Publication &amp; Projects
            </h1>
            <p className="text-xl font-extrabold leading-8 mb-12">
              With our integrated CRM, project management, collaboration and invoicing
              capabilities, you can manage your business in one secure platform.
            </p>
          </div>
          <div className="mb-10">
            <div className="lg:flex items-center -mb-4">
              <a
                className="inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold text-white"
                href="#"
              >
                All Categories
              </a>
              <a
                className="inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold text-orange-400 hover:text-orange-500"
                href="#"
              >
                Technology
              </a>
              <a
                className="inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold text-orange-400 hover:text-orange-500"
                href="#"
              >
                Development
              </a>
              <a
                className="inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold text-orange-400 hover:text-orange-500"
                href="#"
              >
                Marketing
              </a>
              <a
                className="inline-block mb-4 text-xl font-extrabold text-orange-400 hover:text-orange-500"
                href="#"
              >
                Startup
              </a>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 -mb-8">
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="md:flex bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden">
                <div className="w-full md:w-1/2">
                  <Image
                    className="h-72 lg:h-full w-full block object-cover"
                    src="https://images.unsplash.com/photo-1481833761820-0509d3217039?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHw1fHxjYWZlfGVufDB8fHx8MTY2MDM1NDg5Ng&ixlib=rb-1.2.1&q=80&w=1920"
                    alt=""
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="p-8">
                    <h2 className="text-2xl font-extrabold mb-16">
                      Business Owners &amp; Freelancers, Tap In!
                    </h2>
                    <a
                      className="inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="md:flex bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden">
                <div className="w-full md:w-1/2">
                  <Image
                    className="h-72 lg:h-full w-full block object-cover"
                    src="nigodo-assets/blog/laptops2.jpeg"
                    alt=""
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="p-8">
                    <h2 className="text-2xl font-extrabold mb-16">
                      A small business is only as good as its tools and it is totally
                      true.
                    </h2>
                    <a
                      className="inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="md:flex bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden">
                <div className="w-full md:w-1/2">
                  <Image
                    className="h-72 lg:h-full w-full block object-cover"
                    src="nigodo-assets/blog/office1.jpeg"
                    alt=""
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="p-8">
                    <h2 className="text-2xl font-extrabold mb-16">
                      A small business is only as good as its tools and it is totally
                      true.
                    </h2>
                    <a
                      className="inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="md:flex bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden">
                <div className="w-full md:w-1/2">
                  <Image
                    className="h-72 lg:h-full w-full block object-cover"
                    src="nigodo-assets/blog/office2.jpeg"
                    alt=""
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="p-8">
                    <h2 className="text-2xl font-extrabold mb-16">
                      A small business is only as good as its tools and it is totally
                      true.
                    </h2>
                    <a
                      className="inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="md:flex bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden">
                <div className="w-full md:w-1/2">
                  <Image
                    className="h-72 lg:h-full w-full block object-cover"
                    src="nigodo-assets/blog/laptops.jpeg"
                    alt=""
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="p-8">
                    <h2 className="text-2xl font-extrabold mb-16">
                      A small business is only as good as its tools and it is totally
                      true.
                    </h2>
                    <a
                      className="inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="md:flex bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden">
                <div className="w-full md:w-1/2">
                  <Image
                    className="h-72 lg:h-full w-full block object-cover"
                    src="nigodo-assets/blog/laptops2.jpeg"
                    alt=""
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="p-8">
                    <h2 className="text-2xl font-extrabold mb-16">
                      A small business is only as good as its tools and it is totally
                      true.
                    </h2>
                    <a
                      className="inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 text-center">
            <div className="inline-flex h-14 bg-white rounded border-3 border-indigo-900 shadow">
              <a
                className="flex items-center justify-center h-full w-14 border-r-3 border-indigo-900 hover:bg-indigo-900 hover:text-white transition duration-200"
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
                    d="M9.17006 12.7101L13.4101 16.9501C13.503 17.0438 13.6136 17.1182 13.7355 17.1689C13.8573 17.2197 13.988 17.2458 14.1201 17.2458C14.2521 17.2458 14.3828 17.2197 14.5046 17.1689C14.6265 17.1182 14.7371 17.0438 14.8301 16.9501C15.0163 16.7627 15.1208 16.5092 15.1208 16.2451C15.1208 15.9809 15.0163 15.7274 14.8301 15.5401L11.2901 12.0001L14.8301 8.46005C15.0163 8.27269 15.1208 8.01924 15.1208 7.75505C15.1208 7.49086 15.0163 7.23741 14.8301 7.05005C14.7366 6.95737 14.6258 6.88404 14.504 6.83428C14.3821 6.78452 14.2517 6.75929 14.1201 6.76005C13.9884 6.75929 13.858 6.78452 13.7361 6.83428C13.6143 6.88404 13.5035 6.95737 13.4101 7.05005L9.17006 11.2901C9.07633 11.383 9.00193 11.4936 8.95117 11.6155C8.9004 11.7373 8.87426 11.868 8.87426 12.0001C8.87426 12.1321 8.9004 12.2628 8.95117 12.3846C9.00193 12.5065 9.07633 12.6171 9.17006 12.7101Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                className="flex items-center justify-center h-full w-14 font-extrabold text-white bg-indigo-900 border-r-3 border-indigo-900 transition duration-200"
                href="#"
              >
                1
              </a>
              <a
                className="flex items-center justify-center h-full w-14 font-extrabold border-r-3 border-indigo-900 hover:bg-indigo-900 hover:text-white transition duration-200"
                href="#"
              >
                2
              </a>
              <a
                className="flex items-center justify-center h-full w-14 font-extrabold border-r-3 border-indigo-900 hover:bg-indigo-900 hover:text-white transition duration-200"
                href="#"
              >
                3
              </a>
              <a
                className="flex items-center justify-center h-full w-14 hover:bg-indigo-900 hover:text-white transition duration-200"
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
                    d="M14.8299 11.2899L10.5899 7.04995C10.497 6.95622 10.3864 6.88183 10.2645 6.83106C10.1427 6.78029 10.012 6.75415 9.87994 6.75415C9.74793 6.75415 9.61723 6.78029 9.49537 6.83106C9.37351 6.88183 9.26291 6.95622 9.16994 7.04995C8.98369 7.23731 8.87915 7.49076 8.87915 7.75495C8.87915 8.01913 8.98369 8.27259 9.16994 8.45995L12.7099 11.9999L9.16994 15.5399C8.98369 15.7273 8.87915 15.9808 8.87915 16.2449C8.87915 16.5091 8.98369 16.7626 9.16994 16.9499C9.26338 17.0426 9.3742 17.116 9.49603 17.1657C9.61787 17.2155 9.74833 17.2407 9.87994 17.2399C10.0115 17.2407 10.142 17.2155 10.2638 17.1657C10.3857 17.116 10.4965 17.0426 10.5899 16.9499L14.8299 12.7099C14.9237 12.617 14.9981 12.5064 15.0488 12.3845C15.0996 12.2627 15.1257 12.132 15.1257 11.9999C15.1257 11.8679 15.0996 11.7372 15.0488 11.6154C14.9981 11.4935 14.9237 11.3829 14.8299 11.2899Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-26 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="text-lg font-extrabold text-indigo-500">
              Section label
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6">
              Sponsorship Plans
            </h1>
            <p className="text-xl font-extrabold leading-8">
              Pricing that scales with your business immediately.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <div className="max-w-md mx-auto bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                <div className="px-6 pt-12 lg:px-12 pb-10 border-b-3 border-indigo-900">
                  <h2 className="text-2xl font-extrabold mb-6">Small</h2>
                  <div className="flex items-start mb-6">
                    <span className="pr-1 text-lg font-extrabold">$</span>
                    <span className="text-4xl sm:text-5xl font-extrabold">10</span>
                    <span className="pl-1 text-lg font-extrabold self-end">/mo</span>
                  </div>
                  <p className="text-lg font-extrabold leading-7 mb-8">
                    Basic features for up to 10 users.
                  </p>
                  <a
                    className="inline-block w-full py-4 px-6 mb-4 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                    href="#"
                  >
                    Get Started
                  </a>
                  <a
                    className="inline-block w-full py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
                <div className="p-6 lg:px-12 pt-10 pb-12">
                  <div className="flex mb-4 items-start">
                    <Image
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Mauris pellentesque congue libero nec
                    </span>
                  </div>
                  <div className="flex mb-4 items-start">
                    <Image
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Suspendisse mollis tincidunt
                    </span>
                  </div>
                  <div className="flex mb-4 items-start">
                    <Image
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Praesent varius justo vel justo pulvinar
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Image
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Mauris pellentesque congue libero nec
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <div className="max-w-md h-full mx-auto bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                <div className="px-6 pt-12 lg:px-12 pb-10 border-b-3 border-indigo-900">
                  <div className="flex flex-wrap mb-6 items-center justify-between">
                    <h2 className="text-2xl font-extrabold">Medium</h2>
                    <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border border-indigo-900 bg-orange-200 uppercase">
                      Popular
                    </span>
                  </div>
                  <div className="flex items-start mb-6">
                    <span className="pr-1 text-lg font-extrabold">$</span>
                    <span className="text-4xl sm:text-5xl font-extrabold">99</span>
                    <span className="pl-1 text-lg font-extrabold self-end">/mo</span>
                  </div>
                  <p className="text-lg font-extrabold leading-7 mb-8">
                    Basic features for up to 10 users.
                  </p>
                  <a
                    className="inline-block w-full py-4 px-6 mb-4 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                    href="#"
                  >
                    Get Started
                  </a>
                  <a
                    className="inline-block w-full py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
                <div className="p-6 lg:px-12 pt-10 pb-12">
                  <div className="flex mb-4 items-start">
                    <Image
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Mauris pellentesque congue libero nec
                    </span>
                  </div>
                  <div className="flex mb-4 items-start">
                    <Image
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Suspendisse mollis tincidunt
                    </span>
                  </div>
                  <div className="flex mb-4 items-start">
                    <Image
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Praesent varius justo vel justo pulvinar
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Image
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Mauris pellentesque congue libero nec
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <div className="max-w-md h-full mx-auto bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                <div className="px-6 pt-12 lg:px-12 pb-10 border-b-3 border-indigo-900">
                  <h2 className="text-2xl font-extrabold mb-6">Large</h2>
                  <div className="flex items-start mb-6">
                    <span className="pr-1 text-lg font-extrabold">$</span>
                    <span className="text-4xl sm:text-5xl font-extrabold">799</span>
                    <span className="pl-1 text-lg font-extrabold self-end">/mo</span>
                  </div>
                  <p className="text-lg font-extrabold leading-7 mb-8">
                    Basic features for up to 100 users.
                  </p>
                  <a
                    className="inline-block w-full py-4 px-6 mb-4 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                    href="#"
                  >
                    Get Started
                  </a>
                  <a
                    className="inline-block w-full py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
                <div className="p-6 lg:px-12 pt-10 pb-12">
                  <div className="flex mb-4 items-start">
                    <Image
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Mauris pellentesque congue libero nec
                    </span>
                  </div>
                  <div className="flex mb-4 items-start">
                    <Image
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Suspendisse mollis tincidunt
                    </span>
                  </div>
                  <div className="flex mb-4 items-start">
                    <Image
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Praesent varius justo vel justo pulvinar
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Image
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Mauris pellentesque congue libero nec
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-26 bg-orange-200 relative overflow-hidden">
        <Image
          className="absolute top-0 left-0 w-full md:h-full"
          src="https://images.unsplash.com/photo-1657216328532-e03aaa13c089?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwzMnx8cGF0dGVybiUyMHB1cnBsZSUyMGZsYXR8ZW58MHx8fHwxNjYwMzUwODY4&ixlib=rb-1.2.1&q=80&w=1920"
          alt=""
        />
        <div className="container px-4 mx-auto relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-lg font-extrabold text-orange-500">
              Section label
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6">
              The Stats of Our Success
            </h1>
            <p className="text-xl font-extrabold leading-8">
              Nigodo is the only business platform that lets you run your business on
              one platform, seamlessly across all digital channels.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full xl:w-1/2 px-4 mb-14 xl:mb-0">
              <div className="flex flex-wrap -mx-4 -mb-8">
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="flex flex-col items-center justify-center p-6 bg-white border-3 border-indigo-900 rounded-2xl shadow-md text-center">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-extrabold mb-3">
                        197
                      </h3>
                      <h4 className="text-xl font-extrabold mb-4">
                        Community Events
                      </h4>
                      <p className="text-orange-400 font-extrabold">
                        Stay connected with your team and make quick decisions
                        wherever you are.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="flex h-full items-center justify-center p-6 bg-white border-3 border-indigo-900 rounded-2xl shadow-md text-center">
                    <div className="flex flex-col h-full">
                      <h3 className="text-3xl md:text-4xl font-extrabold mb-3">1M</h3>
                      <h4 className="text-xl font-extrabold mb-4">Followers</h4>
                      <p className="text-orange-400 font-extrabold">
                        Track how much money a company just in case
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="flex h-full items-center justify-center p-6 bg-white border-3 border-indigo-900 rounded-2xl shadow-md text-center">
                    <div className="flex flex-col h-full">
                      <h3 className="text-3xl md:text-4xl font-extrabold mb-3">+8</h3>
                      <h4 className="text-xl font-extrabold mb-4">
                        Community Members
                      </h4>
                      <p className="text-orange-400 font-extrabold">
                        Manage many companies, even with different languages.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="flex h-full items-center justify-center p-6 bg-white border-3 border-indigo-900 rounded-2xl shadow-md text-center">
                    <div className="flex flex-col h-full">
                      <h3 className="text-3xl md:text-4xl font-extrabold mb-3">+5</h3>
                      <h4 className="text-xl font-extrabold mb-4">
                        Community Projects
                      </h4>
                      <p className="text-orange-400 font-extrabold">
                        Everyone works the way they want to, on their own schedule.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-1/2 px-4">
              <Image
                className="block w-full h-128 object-cover border-3 border-indigo-900 rounded-2xl shadow-md"
                src="https://images.unsplash.com/photo-1556484687-30636164638b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwyMnx8Y29tbXVuaXR5fGVufDB8fHx8MTY2MDM1MzUzMQ&ixlib=rb-1.2.1&q=80&w=1920"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-26 bg-orange-200 relative overflow-hidden">
        <Image
          className="absolute top-0 left-0 w-full md:h-full"
          src="https://images.unsplash.com/photo-1657216328532-e03aaa13c089?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwzMnx8cGF0dGVybiUyMHB1cnBsZSUyMGZsYXR8ZW58MHx8fHwxNjYwMzUwODY4&ixlib=rb-1.2.1&q=80&w=1920"
          alt=""
        />
        <div className="container px-4 mx-auto relative">
          <span className="text-lg font-extrabold text-orange-500">Quotes</span>
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-3 mb-3">
            Shared Values
          </h1>
          <p className="text-xl font-extrabold leading-8 mb-16">
            With Flex, you can build websites without writing code.
          </p>
          <div className="flex flex-wrap -mx-2 -mb-8">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="h-full max-w-md mx-auto py-10 px-6 md:px-10 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                <div className="h-full flex flex-col">
                  <h3 className="text-xl md:text-2xl font-extrabold leading-8 mb-auto">
                    The best solution for anyone who wants to work a flexible schedule
                    but still earn a full-time income.
                  </h3>
                  <h4 className="md:text-xl font-extrabold mt-10">
                    Macauley Herring
                  </h4>
                  <span className="text-orange-400 font-bold">
                    CEO &amp; Founder at Nigodo
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="h-full max-w-md mx-auto py-10 px-6 md:px-10 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                <div className="h-full flex flex-col">
                  <h3 className="text-xl md:text-2xl font-extrabold leading-8 mb-auto">
                    I just can't get enough of Flex. I want to get a T-Shirt with Flex
                    on it so I can show it off to everyone. I will recommend you to my
                    colleagues.
                  </h3>
                  <h4 className="md:text-xl font-extrabold mt-10">Ivan Mathews</h4>
                  <span className="text-orange-400 font-bold">CTO at Nigodo</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="h-full max-w-md mx-auto py-10 px-6 md:px-10 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                <div className="h-full flex flex-col">
                  <h3 className="text-xl md:text-2xl font-extrabold leading-8 mb-auto">
                    You won't regret it. We've seen amazing results already. Thanks
                    guys, keep up the good work!
                  </h3>
                  <h4 className="md:text-xl font-extrabold mt-10">Elen Benitez</h4>
                  <span className="text-orange-400 font-bold">CPO at Nigodo</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="h-full max-w-md mx-auto py-10 px-6 md:px-10 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                <div className="h-full flex flex-col">
                  <h3 className="text-xl md:text-2xl font-extrabold leading-8 mb-auto">
                    The best solution for anyone who wants to work a flexible schedule
                    but still earn a full-time income.
                  </h3>
                  <h4 className="md:text-xl font-extrabold mt-10">
                    Macauley Herring
                  </h4>
                  <span className="text-orange-400 font-bold">
                    CEO &amp; Founder at Nigodo
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="h-full max-w-md mx-auto py-10 px-6 md:px-10 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                <div className="h-full flex flex-col">
                  <h3 className="text-xl md:text-2xl font-extrabold leading-8 mb-auto">
                    I just can't get enough of Flex. I want to get a T-Shirt with Flex
                    on it so I can show it off to everyone. I will recommend you to my
                    colleagues.
                  </h3>
                  <h4 className="md:text-xl font-extrabold mt-10">Ivan Mathews</h4>
                  <span className="text-orange-400 font-bold">CTO at Nigodo</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="h-full max-w-md mx-auto py-10 px-6 md:px-10 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                <div className="h-full flex flex-col">
                  <h3 className="text-xl md:text-2xl font-extrabold leading-8 mb-auto">
                    You won't regret it. We've seen amazing results already. Thanks
                    guys, keep up the good work!
                  </h3>
                  <h4 className="md:text-xl font-extrabold mt-10">Elen Benitez</h4>
                  <span className="text-orange-400 font-bold">CPO at Nigodo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-26 bg-orange-200 relative overflow-hidden">
        <Image
          className="absolute top-0 left-0 w-full md:h-full"
          src="https://images.unsplash.com/photo-1657216328532-e03aaa13c089?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwzMnx8cGF0dGVybiUyMHB1cnBsZSUyMGZsYXR8ZW58MHx8fHwxNjYwMzUwODY4&ixlib=rb-1.2.1&q=80&w=1920"
          alt=""
        />
        <Image
          className="absolute bottom-0 right-0"
          src="nigodo-assets/background-elements/pattern-two-smashes-orange-right.svg"
          alt=""
        />
        <Image
          className="hidden md:block absolute bottom-0 left-0"
          src="nigodo-assets/background-elements/pattern-two-smashes-orange-left.svg"
          alt=""
        />
        <div className="container px-4 mx-auto relative">
          <div className="flex flex-wrap -mx-4 mb-16 items-center justify-between">
            <div className="w-full lg:w-1/2 xl:w-2/3 px-4 mb-8 lg:mb-0">
              <span className="text-lg font-extrabold text-orange-500">
                Section label
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-3 mb-3">
                Our Member Classes
              </h1>
              <p className="text-xl font-extrabold leading-8">
                Highly professional and capable of running your business across all
                digital channels.
              </p>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/3 px-4">
              <div className="flex flex-wrap lg:justify-end">
                <a
                  className="inline-block w-full md:w-auto mb-2 md:mb-0 md:mr-6 py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                  href="#"
                >
                  Open positions
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
          <div className="flex flex-wrap -mx-4 -mb-8">
            <div className="w-full lg:w-2/3 px-4 mb-8">
              <div className="h-full flex flex-col border-3 border-indigo-900 rounded-2xl shadow overflow-hidden">
                <div className="mb-auto h-full">
                  <Image
                    className="block h-96 lg:h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1563245110-4ba1be9ae814?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwyMXx8YmxhY2slMjBhcnRpc3R8ZW58MHx8fHwxNjYwMzUwNjkw&ixlib=rb-1.2.1&q=80&w=1920"
                    alt=""
                  />
                </div>
                <div className="px-6 py-4 bg-indigo-900">
                  <h2 className="text-xl text-white font-extrabold">
                    Brandon J. Payne
                  </h2>
                  <span className="text-lg font-bold text-indigo-300">
                    Executive DIrector
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-8">
              <div className="mb-8 border-3 border-indigo-900 rounded-2xl shadow overflow-hidden">
                <div>
                  <Image
                    className="block w-full h-96 lg:h-64 object-cover"
                    src="nigodo-assets/team/photo-3.jpg"
                    alt=""
                  />
                </div>
                <div className="px-6 py-4 bg-indigo-900">
                  <h2 className="text-xl text-white font-extrabold">Elen Benitez</h2>
                  <span className="text-lg font-bold text-indigo-300">CPO</span>
                </div>
              </div>
              <div className="border-3 border-indigo-900 rounded-2xl shadow overflow-hidden">
                <div>
                  <Image
                    className="block w-full h-96 lg:h-64 object-cover"
                    src="https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwzfHxibGFjayUyMHdvbWFufGVufDB8fHx8MTY2MDM1NjAwOQ&ixlib=rb-1.2.1&q=80&w=1920"
                    alt=""
                  />
                </div>
                <div className="px-6 py-4 bg-indigo-900">
                  <h2 className="text-xl text-white font-extrabold">Nia Ashay</h2>
                  <span className="text-lg font-bold text-indigo-300">CTO</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-8">
              <div className="mb-8 border-3 border-indigo-900 rounded-2xl shadow overflow-hidden">
                <div>
                  <Image
                    className="block w-full h-96 lg:h-64 object-cover"
                    src="nigodo-assets/team/photo-1.jpg"
                    alt=""
                  />
                </div>
                <div className="px-6 py-4 bg-indigo-900">
                  <h2 className="text-xl text-white font-extrabold">
                    Macauley Herring
                  </h2>
                  <span className="text-lg font-bold text-indigo-300">
                    Customer Services
                  </span>
                </div>
              </div>
              <div className="border-3 border-indigo-900 rounded-2xl shadow overflow-hidden">
                <div>
                  <Image
                    className="block w-full h-96 lg:h-64 object-cover"
                    src="nigodo-assets/team/photo-2.jpg"
                    alt=""
                  />
                </div>
                <div className="px-6 py-4 bg-indigo-900">
                  <h2 className="text-xl text-white font-extrabold">Name</h2>
                  <span className="text-lg font-bold text-indigo-300">Role</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 px-4 mb-8">
              <div className="h-full flex flex-col border-3 border-indigo-900 rounded-2xl shadow overflow-hidden">
                <div className="mb-auto h-full">
                  <Image
                    className="block h-96 lg:h-full w-full object-cover"
                    src="nigodo-assets/team/photo-3.jpg"
                    alt=""
                  />
                </div>
                <div className="px-6 py-4 bg-indigo-900">
                  <h2 className="text-xl text-white font-extrabold">Name</h2>
                  <span className="text-lg font-bold text-indigo-300">
                    IOS Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-26 bg-orange-200">
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
              <Image
                className="block object-cover border-3 border-indigo-900 rounded-2xl shadow-md"
                src="nigodo-assets/contact/map.png"
                alt=""
              />
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
                    <Image
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
                      <Image src="nigodo-assets/footers/google-play.svg" alt="" />
                    </a>
                  </div>
                  <div>
                    <a className="inline-block w-auto" href="#">
                      <Image src="nigodo-assets/footers/app-store.svg" alt="" />
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
