const FeaturedSection = () => {
    return (
        <section className="py-26 bg-orange-200 relative overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full md:h-full"
          src="https://img  s.unsplash.com/photo-1657216328532-e03aaa13c089?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwzMnx8cGF0dGVybiUyMHB1cnBsZSUyMGZsYXR8ZW58MHx8fHwxNjYwMzUwODY4&ixlib=rb-1.2.1&q=80&w=1920"
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
            src="https://img  s.unsplash.com/photo-1469488865564-c2de10f69f96?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwyfHxoaXBwaWVzfGVufDB8fHx8MTY2MDM1MzU2Mg&ixlib=rb-1.2.1&q=80&w=1920"
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
    )
}

export default FeaturedSection