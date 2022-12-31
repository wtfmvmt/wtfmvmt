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
                                <div key={index} className="w-full px-4 mb-8 md:w-1/2 lg:w-1/4">
                                    <div className="flex items-center justify-center p-6 text-center border-indigo-900 shadow-md h-44 border-3 rounded-2xl">
                                        <div>
                                            <h3 className="mb-3 text-3xl font-extrabold sm:text-4xl">
                                                {stat.title ?? "[Client]: STAT_NOT_FOUND"}
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