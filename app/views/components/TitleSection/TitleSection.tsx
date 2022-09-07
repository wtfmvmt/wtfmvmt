import type { Image } from "@typings/Image"


export type TitleSectionProps = {
  title: string,
  heading: string,
  image?: Image
}


const TitleSection = ({ heading, title, image }: TitleSectionProps) => {


  return (
    <section className="py-20 overflow-x-hidden">
      <div className="container px-4 mx-auto relative">
        <div className="absolute inset-0 my-8 -ml-4 -mr-4" />
        <div className="relative overflow-hidden">
          <div className="relative flex flex-wrap items-center">
            <div className="w-full md:w-4/6 p-10 lg:pl-40">
              <span className="text-xl md:text-2xl text-white">{heading}</span>
              <h2 className="mt-4 mb-14 text-4xl md:text-5xl font-bold font-heading text-white">
                {title}
              </h2>
              <a
                className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                href="#"
              >
                More
              </a>
            </div>
            <img
              className="relative ml-auto w-full md:w-2/6 h-96"
              src={image ? image.src : ""}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

  )
}

export default TitleSection