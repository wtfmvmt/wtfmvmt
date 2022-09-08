import type { TitleSectionProps } from "@typings/TitleSection"

const TitleSection = ({ heading, title, image, cta }: TitleSectionProps) => {


  return (
    <section className="py-20 overflow-x-hidden">
      <div className="container px-4 mx-auto relative">
        <div className="absolute inset-0 my-8 -ml-4 -mr-4" />
        <div className="relative overflow-hidden">
          <div className="relative flex flex-wrap items-center">
            <div className="w-full md:w-4/6 p-10 lg:pl-40">
              <span className="text-xl md:text-2xl text-white">{heading ? heading : "Heading"}</span>
              <h2 className="mt-4 mb-14 text-4xl md:text-5xl font-bold font-heading text-white">
                {title ? title : "Title"}
              </h2>
              <a
                className="inline-block hvr-pop bg-purple-500 hover:bg-black text-white font-bold font-heading py-4 px-8 rounded uppercase transition-all"
                href={cta.url}
              >
                {cta.name ? cta.name : "Action Call"}
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