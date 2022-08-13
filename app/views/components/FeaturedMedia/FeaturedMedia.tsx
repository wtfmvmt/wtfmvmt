const FeaturedMedia = () => {

    return (
        <section className="py-26 relative overflow-hidden">
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
    )
}

export default FeaturedMedia