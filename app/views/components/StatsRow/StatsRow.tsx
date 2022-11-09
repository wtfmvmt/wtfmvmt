const StatsRow = () => {

    return (
        <section className="py-26 text-slate-200 font-major">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-8">
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div className="flex items-center justify-center h-44 p-6  border-3 border-indigo-900 rounded-2xl shadow-md text-center">
                            <div>
                                <h3 className="text-3xl sm:text-4xl font-extrabold mb-3">
                                    235.000
                                </h3>
                                <h4 className="text-xl font-extrabold">Projects completed</h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div className="flex items-center justify-center h-44 p-6  border-3 border-indigo-900 rounded-2xl shadow-md text-center">
                            <div>
                                <h3 className="text-3xl sm:text-4xl font-extrabold mb-3">$10M</h3>
                                <h4 className="text-xl font-extrabold">APR</h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div className="flex items-center justify-center h-44 p-6  border-3 border-indigo-900 rounded-2xl shadow-md text-center">
                            <div>
                                <h3 className="text-3xl sm:text-4xl font-extrabold mb-3">
                                    +50.000
                                </h3>
                                <h4 className="text-xl font-extrabold">Hours saved annually</h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div className="flex items-center justify-center h-44 p-6  border-3 border-indigo-900 rounded-2xl shadow-md text-center">
                            <div>
                                <h3 className="text-3xl sm:text-4xl font-extrabold mb-3">3.500</h3>
                                <h4 className="text-xl font-extrabold">Unique users</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default StatsRow