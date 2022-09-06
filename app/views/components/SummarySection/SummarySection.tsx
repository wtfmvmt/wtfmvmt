import ReactPlayer from 'react-player'

export type Section = {
  title: string,
  description: string
}


export type SummarySectionProps = {
  heading: string,
  title: string,
  description: string,
  sections: Section[]
}


const SummarySection = ({ heading, title, description, sections }: SummarySectionProps) => {


  const Sections = () => {

    return (

      <div className="flex flex-wrap -mx-4 -mb-10">
        {sections ? sections.map((section, index) => (

          <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-10">
            <div className="max-w-xs">
              <div className="inline-flex items-center justify-center w-18 h-18 mb-6 bg-white rounded-full border-3 border-indigo-900 text-indigo-900 shadow-md">
                <span className="text-3xl font-extrabold leading-8">{index}</span>
              </div>
              <h3 className="text-2xl font-extrabold mb-5">{section.title}</h3>
              <p className="font-bold leading-6">
                {section.description}
              </p>
            </div>
          </div>
        )) : <></>
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
            <img
              className="block w-full h-80 object-cover border-3 border-indigo-900 rounded-2xl shadow-lg"
              src="https://img  s.unsplash.com/photo-1634269395970-1d5c5f116c6a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwzOHx8aGlwcGllc3xlbnwwfHx8fDE2NjAzNTYwOTk&ixlib=rb-1.2.1&q=80&w=1920"
              alt=""
            />
            <a
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center w-20 h-20 bg-indigo-900 hover:bg-indigo-800 rounded-full"
              href="#"
            >
              <svg
                width={22}
                height={24}
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6666 8L6.86665 0.666667C6.19998 0.266667 5.39998 0 4.59998 0C2.06665 0 0.0666504 2 0.0666504 4.53333V19.4667C0.0666504 22 2.06665 24 4.59998 24C5.39998 24 6.19998 23.7333 6.86665 23.3333L19.8 15.8667C20.4667 15.4667 21 14.9333 21.4 14.2667C22.6 12.1333 21.9333 9.33333 19.6666 8Z"
                  fill="#F7F9FB"
                />
              </svg>
            </a>
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

export default SummarySection