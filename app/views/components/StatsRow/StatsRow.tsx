import type { ComponentType } from "@typings/Component"
import type { StatsRowProps } from "@typings/StatsRow"

const StatsRow: ComponentType<StatsRowProps> = ({ stats }: StatsRowProps) => {

    return (
        <section className="py-26 text-slate-200 font-major">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-8">

                    {
                        stats ? stats.map((stat, index) => {
                            return (
                                <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                                    <div className="flex items-center justify-center h-44 p-6  border-3 border-indigo-900 rounded-2xl shadow-md text-center">
                                        <div>
                                            <h3 className="text-3xl sm:text-4xl font-extrabold mb-3">
                                                {stat.value ?? "[Client]: STAT_NOT_FOUND"}
                                            </h3>
                                            <h4 className="text-xl font-extrabold">
                                                {stat.value ?? "[Client]: STAT_NOT_FOUND"}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <>[Client]: STATS_NOT_FOUND</>
                    }

                </div>
            </div>
        </section>

    )
}

export default StatsRow