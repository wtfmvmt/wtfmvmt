const Hero = () => {

    return (
        <div className="container px-4 mx-auto relative">
        <div className="max-w-5xl mx-auto text-center">
            <span className="text-xl md:text-2xl font-extrabold text-orange-500 text-blue-200">
                Circa 2020
            </span>
            <h1 className="max-w-4xl mx-auto text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading mt-1 mb-6 text-white shadow-2xl">
                WeTheFuture is a community of artists, builders and thinkers focused on
                building a better future
            </h1>
            <p className="text-xl md:text-2xl font-extrabold leading-8 mb-12 text-purple-200">
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
                className="block w-full h-96 lg:h-140 object-cover border-3 border-indigo-900 rounded-2xl shadow-lg"
                src="https://images.unsplash.com/photo-1591197172062-c718f82aba20?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHw2fHxjb21tdW5pdHl8ZW58MHx8fHwxNjYwMzUzNTk2&ixlib=rb-1.2.1&q=80&w=1920"
                alt=""
            />
        </div>
    </div>
  

    )
}

export default Hero