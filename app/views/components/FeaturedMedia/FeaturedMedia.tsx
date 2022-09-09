import type { Feature } from "@typings/Feature"


export type FeaturedMediaProps = {
  title: string,
  features: Feature[]
}


const FeaturedMedia = ({ title, features }: FeaturedMediaProps) => {

  const Features = () => {
    return (
      features ? <div className="flex flex-wrap border-3 border-indigo-900 rounded-2xl shadow-md">



        <div className="w-1/2 lg:w-1/3 xl:w-1/6 border-b-3 border-indigo-900 xl:border-0">
          <div className="flex items-center justify-center h-44 p-6 xl:border-r-3 border-indigo-900">
            <img
              className="block mx-auto h-38"
              src="/assets/images/wtfmedia-logo.png"
              alt=""
            />
          </div>
        </div>


        <div className="w-1/2 lg:w-1/3 xl:w-1/6 border-b-3 border-indigo-900 xl:border-0">
          <div className="flex items-center justify-center h-44 p-6 xl:border-r-3 border-indigo-900">
            <img
              className="block mx-auto h-38"
              src="/assets/images/wtfmedia-logo.png"
              alt=""
            />
          </div>
        </div>

        <div className="w-1/2 lg:w-1/3 xl:w-1/6 border-b-3 border-indigo-900 xl:border-0">
          <div className="flex items-center justify-center h-44 p-6 xl:border-r-3 border-indigo-900">
            <img
              className="block mx-auto h-38"
              src="/assets/images/wtfmedia-logo.png"
              alt=""
            />
          </div>
        </div>

        <div className="w-1/2 lg:w-1/3 xl:w-1/6 border-b-3 border-indigo-900 xl:border-0">
          <div className="flex items-center justify-center h-44 p-6 xl:border-r-3 border-indigo-900">
            <img
              className="block mx-auto h-38"
              src="/assets/images/desirable-solutions-logo.png"
              alt=""
            />
          </div>
        </div>


        <div className="w-1/2 lg:w-1/3 xl:w-1/6 border-b-3 border-indigo-900 xl:border-0">
          <div className="flex items-center justify-center h-44 p-6 xl:border-r-3 border-indigo-900">
            <img
              className="block mx-auto h-38"
              src="/assets/images/wtfmedia-logo.png"
              alt=""
            />
          </div>
        </div>


        <div className="w-1/2 lg:w-1/3 xl:w-1/6 border-b-3 border-indigo-900 xl:border-0">
          <div className="flex items-center justify-center h-44 p-6 xl:border-r-3 border-indigo-900">
            <img
              className="block mx-auto h-38"
              src="/assets/images/wtfmedia-logo.png"
              alt=""
            />
          </div>
        </div>


      </div> : <></>
    )
  }
  const Title = () => {
    return (
      <h2 className="text-center text-xl font-extrabold mb-6">
        {title ? title : "Title"}
      </h2>
    )
  }

  
  return (
    <section className="py-26 mt-8 mb-8  bg-black bg-opacity-70 relative overflow-hidden">

      <div className="container px-4 mx-auto relative">
        <Title />
        <Features />
      </div>
    </section>
  )
}

export default FeaturedMedia