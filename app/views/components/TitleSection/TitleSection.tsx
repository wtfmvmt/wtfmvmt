export type TitleSectionProps = {
  title: string,
  heading: string
}


const TitleSection = ({ heading, title }: TitleSectionProps) => {

  
  return (
    <section className="py-20 overflow-x-hidden">
      <div className="container px-4 mx-auto relative">
        <div className="absolute inset-0 my-8 -ml-4 -mr-4" />
        <div className="relative overflow-hidden">
          <img
            className="absolute top-0 left-0 xl:-ml-40 w-full h-full"
            src="yofte-assets/elements/cta-lines.svg"
            alt=""
          />
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
              className="relative ml-auto w-full md:w-2/6 h-96 object-cover"
              src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

  )
}

export default TitleSection