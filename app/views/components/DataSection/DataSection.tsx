import type { CallToAction } from "@models/typings/CallToAction"
import type { Image } from "@typings/Image"


export type Content = {
  cover?: Image,
  title: string,
  tags?: string[],
  url?: string,
  cta?: CallToAction

}
export type Filter = {
  name: string,
  url: string,
}

export type DataSectionProps = {

  heading: string,
  title: string,
  description: string,
  filters?: Filter[],
  data?: Content[]
}


const DataSection = ({ heading, title, description, filters, data }: DataSectionProps) => {

  const Header = () => {
    return (
      <div className="max-w-4xl mx-auto mb-16 text-center text-white">
        <span className="text-lg font-extrabold text-orange-500">
          {heading ? heading : "Heading"}
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-2 mb-4">
          {title ? title : "Data Section"}
        </h1>
        <p className="text-xl font-extrabold leading-8 mb-12">
          {description ? description : "Description"}
        </p>
      </div>
    )
  }


  const Filters = () => {

    return (
      filters ?
        <div className="mb-10">
          <div className="lg:flex items-center -mb-4">
            <a
              className="inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold text-white"
              href="#"
            >
              All Categories
            </a>
            <a
              className="inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold text-orange-400 hover:text-orange-500"
              href="#"
            >
              Technology
            </a>
            <a
              className="inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold text-orange-400 hover:text-orange-500"
              href="#"
            >
              Development
            </a>
            <a
              className="inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold text-orange-400 hover:text-orange-500"
              href="#"
            >
              Marketing
            </a>
            <a
              className="inline-block mb-4 text-xl font-extrabold text-orange-400 hover:text-orange-500"
              href="#"
            >
              Startup
            </a>
          </div>
        </div> : <></>

    )
  }


  const DataRow = () => {

    return (

      data ? <div className="flex flex-wrap -mx-4 -mb-8">


        <div className="w-full lg:w-1/2 px-4 mb-8">

          {
            data.map((item, index) => {

              return (
                <div key={index}
                  className="md:flex hover:scale-90 transition-all  border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden">
                  <div className="w-full md:w-1/2">
                    <img
                      className="h-72 lg:h-full w-full block object-cover"
                      src="https://img  s.unsplash.com/photo-1481833761820-0509d3217039?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHw1fHxjYWZlfGVufDB8fHx8MTY2MDM1NDg5Ng&ixlib=rb-1.2.1&q=80&w=1920"
                      alt=""
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="p-8">
                      <h2 className="text-2xl font-extrabold mb-16">
                        {item.title ? item.title : "Title"}
                      </h2>
                      <a
                        className="inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600"
                        href="#"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>

      </div> : <></>
    )
  }



  return (

    <section className="mt-4 mb-6 bg-black bg-opacity-70 py-26 relative overflow-hidden">
      <div className="container px-4 mx-auto relative">
        <Header />
        <Filters />
        <DataRow />
      </div>
    </section>
  )
}

export default DataSection