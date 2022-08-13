import type { NextPage } from 'next'
import PageLayout from "@layouts/PageLayout"
import Header from "@components/Header"
import Footer from "@components/Footer"
import ContactSection from "@components/ContactSection"
import ImageMasonry from "@components/ImageMasonry/ImageMasonry"
import ContentGrid from '@components/ContentGrid'
import FeaturedSection from "@components/FeaturedSection"
import SummarySection from "@components/SummarySection"


const HomePage: NextPage = () => {

  return (
    <PageLayout>
      <Header />
      <FeaturedSection/>
      <SummarySection/>



      <section className="py-26 relative overflow-hidden bg-purple-800">
        <img
          className="absolute top-0 w-1/2 md:w-1/3 md:h-full"
          src="nigodo-assets/background-elements/pattern-smash-dots-orange-left.svg"
          alt=""
        />
        <img
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
        <img
          className="absolute top-0 right-0 w-1/2 md:h-full"
          src="nigodo-assets/background-elements/pattern-dots-2-indigo-light-right.svg"
          alt=""
        />
        <img
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
                <img
                  className="block mx-auto h-8"
                  src="nigodo-assets/logo-clouds/microsoft.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 lg:w-1/3 xl:w-1/6 border-b-3 border-indigo-900 xl:border-0">
              <div className="flex items-center justify-center h-44 p-6 xl:border-r-3 border-indigo-900">
                <img
                  className="block mx-auto h-8"
                  src="nigodo-assets/logo-clouds/google.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 lg:w-1/3 xl:w-1/6 border-b-3 border-indigo-900 xl:border-0">
              <div className="flex items-center justify-center h-44 p-6 xl:border-r-3 border-indigo-900">
                <img
                  className="block mx-auto h-8"
                  src="nigodo-assets/logo-clouds/spotify.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 lg:w-1/3 xl:w-1/6 border-b-3 border-indigo-900 lg:border-0">
              <div className="flex items-center justify-center h-44 p-6 xl:border-r-3 border-indigo-900">
                <img
                  className="block mx-auto h-8"
                  src="nigodo-assets/logo-clouds/slack.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 lg:w-1/3 xl:w-1/6">
              <div className="flex items-center justify-center h-44 p-6 xl:border-r-3 border-indigo-900">
                <img
                  className="block mx-auto h-9"
                  src="nigodo-assets/logo-clouds/sass.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 lg:w-1/3 xl:w-1/6">
              <div className="flex items-center justify-center h-44 p-6">
                <img
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
        <img
          className="absolute top-0 left-0 w-1/2 mt-4 md:mt-16"
          src="nigodo-assets/background-elements/pattern-dots-2-orange-left.svg"
          alt=""
        />
        <img
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
                  <img
                    className="h-72 lg:h-full w-full block object-cover"
                    src="https://img  s.unsplash.com/photo-1481833761820-0509d3217039?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHw1fHxjYWZlfGVufDB8fHx8MTY2MDM1NDg5Ng&ixlib=rb-1.2.1&q=80&w=1920"
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
                  <img
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
                  <img
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
                  <img
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
                  <img
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
                  <img
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
                    <img
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Mauris pellentesque congue libero nec
                    </span>
                  </div>
                  <div className="flex mb-4 items-start">
                    <img
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Suspendisse mollis tincidunt
                    </span>
                  </div>
                  <div className="flex mb-4 items-start">
                    <img
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Praesent varius justo vel justo pulvinar
                    </span>
                  </div>
                  <div className="flex items-start">
                    <img
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
                    <img
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Mauris pellentesque congue libero nec
                    </span>
                  </div>
                  <div className="flex mb-4 items-start">
                    <img
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Suspendisse mollis tincidunt
                    </span>
                  </div>
                  <div className="flex mb-4 items-start">
                    <img
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Praesent varius justo vel justo pulvinar
                    </span>
                  </div>
                  <div className="flex items-start">
                    <img
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
                    <img
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Mauris pellentesque congue libero nec
                    </span>
                  </div>
                  <div className="flex mb-4 items-start">
                    <img
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Suspendisse mollis tincidunt
                    </span>
                  </div>
                  <div className="flex mb-4 items-start">
                    <img
                      className="block w-6 h-6 mr-2 object-contain"
                      src="nigodo-assets/circle-icon-green.svg"
                      alt=""
                    />
                    <span className="text-lg font-extrabold">
                      Praesent varius justo vel justo pulvinar
                    </span>
                  </div>
                  <div className="flex items-start">
                    <img
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
        <img
          className="absolute top-0 left-0 w-full md:h-full"
          src="https://img  s.unsplash.com/photo-1657216328532-e03aaa13c089?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwzMnx8cGF0dGVybiUyMHB1cnBsZSUyMGZsYXR8ZW58MHx8fHwxNjYwMzUwODY4&ixlib=rb-1.2.1&q=80&w=1920"
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
              <img
                className="block w-full h-128 object-cover border-3 border-indigo-900 rounded-2xl shadow-md"
                src="https://img  s.unsplash.com/photo-1556484687-30636164638b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwyMnx8Y29tbXVuaXR5fGVufDB8fHx8MTY2MDM1MzUzMQ&ixlib=rb-1.2.1&q=80&w=1920"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <ContentGrid />

      <ImageMasonry />


      <ContactSection />
      <Footer />
    </PageLayout>



  )
}

export default HomePage
