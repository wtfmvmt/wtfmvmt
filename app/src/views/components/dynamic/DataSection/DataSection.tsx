import type { CallToActionProps } from "@models/typings/CallToAction"
import type { ImageProps } from "@typings/Image"


export type Content = {
  cover?: ImageProps,
  title?: string,
  tags?: string[],
  url?: string,
  cta?: CallToActionProps

}
export type Filter = {
  name: string,
  url: string,
}

export type DataSectionProps = {

  heading: string,
  title: string,
  description: string,
  filters?: Filter[],
  data?: Content[]
}


const DataSection = ({ heading, title, description, filters, data }: DataSectionProps) => {



  return (

    <section className="py-26 relative overflow-hidden">
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
            <div className="md:flex  border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden">
              <div className="w-full md:w-1/2">
                <img
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
            <div className="md:flex  border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden">
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
            <div className="md:flex  border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden">
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
            <div className="md:flex  border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden">
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
            <div className="md:flex  border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden">
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
            <div className="md:flex  border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden">
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
          <div className="inline-flex h-14  rounded border-3 border-indigo-900 shadow">
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

  )
}

export default DataSection