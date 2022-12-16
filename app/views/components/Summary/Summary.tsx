import ReactPlayer from 'react-player'
import type { ComponentType } from '@models/typings/Component'
import type { SummaryProps } from '@typings/Summary'

const Summary: ComponentType<SummaryProps> = ({ video, heading, title, description, sections }: SummaryProps) => {


  const Sections = () => {

    return (

      <div className="flex flex-wrap -mx-4 -mb-10">
        {sections ? sections.map((section, index) => (

          <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-10">
            <div className="max-w-xs">
              <div className="inline-flex items-center justify-center w-18 h-18 mb-6 bg-white rounded-full border-3 border-indigo-900 text-indigo-900 shadow-md">
                <span className="text-3xl font-extrabold leading-8">{index + 1}</span>
              </div>
              <h3 className="text-2xl font-extrabold mb-5">{section.title}</h3>
              <p className="font-bold leading-6">
                {section.description}
              </p>
            </div>
          </div>
        )) : <>[Client]: SECTIONS_NOT_FOUND</>
        }

      </div>
    )
  }

  const Header = () => {

    return (

      <div className="flex flex-wrap -mx-4 mb-16 items-center">
        <div className="w-full lg:w-1/2 px-4 mb-20 lg:mb-0">
          <span className="text-lg font-extrabold text-indigo-500">
            {heading ? heading : "HEADING"}
          </span>
          <h1 className="max-w-xl text-3xl md:text-4xl font-extrabold font-heading mt-2 mb-4">
            {title ? title : "TITLE"}
          </h1>
          <p className="text-xl font-extrabold">
            {description ? description : "DESCRIPTION"}
          </p>
        </div>


        <div className="w-full lg:w-1/2 px-4">
          <div className="relative">

            <div className="block w-full h-80 object-cover border-3 border-purple-900 rounded-2xl shadow-xl">
              <ReactPlayer playIcon={<>▶️</>} pip={true} url={video?.url ?? "#"} />
            </div>
          </div>
        </div>
      </div>

    )
  }

  return (
    <section className="py-26 relative overflow-hidden">
      <div className="container px-4 mx-auto relative">
        <Header />
        <Sections />
      </div>
    </section>
  )
}

export default Summary