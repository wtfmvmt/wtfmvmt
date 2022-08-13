const ContentGrid = () => {

    return (
        <section className="py-26 bg-orange-200 relative overflow-hidden">
            <img
                className="absolute top-0 left-0 w-full md:h-full"
                src="https://img  s.unsplash.com/photo-1657216328532-e03aaa13c089?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwzMnx8cGF0dGVybiUyMHB1cnBsZSUyMGZsYXR8ZW58MHx8fHwxNjYwMzUwODY4&ixlib=rb-1.2.1&q=80&w=1920"
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
    )
}

export default ContentGrid