import ReactPlayer from 'react-player'
import type { ComponentType } from '@typings/Component'
import type { SummaryProps } from '@typings/Summary'
import { twMerge } from "tailwind-merge"
import { memo } from "react"

const Summary: ComponentType<SummaryProps> = ({ video, heading, title, description, sections }: SummaryProps) => {

  const Sections = () => {

    return (

      <div className="flex flex-wrap -mx-4 divide-x-2 ">
        {sections ?
          sections.map((section, index) => (

            <div key={index} className="w-full p-2 px-2 mb-10 duration-500 ease-in-out rounded cursor-pointer group shadow-black hover:scale-90 hover:shadow-2xl sm:w-1/2 md:w-1/3">
              <div className="max-w-xs">
                <div className="inline-flex items-center justify-center mb-6 text-indigo-900 bg-white border-indigo-900 rounded-full shadow-md w-18 h-18 border-3">
                  <span className="text-3xl font-extrabold leading-8 font-major">{index + 1}</span>
                </div>
                <h3 className="mb-5 text-2xl font-extrabold text-white font-major">{section?.title}</h3>
                <p className="px-2 text-xl font-bold leading-6 text-white group-hover:line-clamp-none line-clamp-3 font-share_tech">
                  {section?.description}
                </p>
              </div>
            </div>
          )) :
          <>[CLIENT]: SECTIONS_NOT_FOUND</>
        }
      </div>
    )
  }

  const Header = () => {

    return (

      <div className="flex flex-wrap items-center mb-16 -mx-4">
        <div className="w-full px-4 mb-20 lg:w-1/2 lg:mb-0">
          <span className={twMerge(`text-lg font-major font-extrabold text-indigo-500`)}>
            {heading ? heading : "HEADING"}
          </span>
          <h1 className="max-w-xl mt-2 mb-4 text-3xl font-extrabold text-white font-major md:text-4xl font-heading">
            {title ? title : "TITLE"}
          </h1>
          <p className="text-xl font-extrabold text-white font-share_tech">
            {description ? description : "DESCRIPTION"}
          </p>
        </div>


        <div className="w-full px-4 lg:w-1/2">
          <div className="relative">

            <div className="block object-cover w-full border-purple-900 shadow-xl h-80 border-3 rounded-2xl">
              <ReactPlayer playIcon={<>▶️</>} pip={true} url={video?.url ?? "#"} />
            </div>
          </div>
        </div>
      </div>

    )
  }

  return (
    <section className="relative overflow-hidden py-26">
      <div className="container relative px-4 mx-auto">
        <Header />
        <Sections />
      </div>
    </section>
  )
}

export default memo(Summary)