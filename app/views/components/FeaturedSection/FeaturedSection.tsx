import FadeAnimaiton from "@components/FadeAnimation"
import DistortionCarousel from "@components/DistortionCarousel";

export type Feature = {
  title?: string,
  description?: string,
  cover?: string
}

export type FeaturedSectionProps = {
  heading?: string,
  carousel?: string[],
  title?: string,
  description?: string
  features?: Feature[]
}


const FeaturedSection = ({ heading, title, description, features, carousel }: FeaturedSectionProps) => {

  const Features = () => {


    return (
      <div className="flex flex-wrap -mx-4">


        {
          features ? features.map((feature, index) => {
            return (

              <div key={index} className="cursor-pointer hover:translate-y-4 ease-in-out duration-1000 transition-all shadow-2xl w-full lg:w-1/3 px-4">
                <div className="h-3/4 max-w-md mx-auto py-10 px-6 bg-purple-800 bg-opacity-90 border-3 border-indigo-900 shadow-xl rounded-xl text-center mt-2">
                  <img
                    className="block mx-auto mb-4"
                    src={feature?.cover ?? ""}
                    alt=""
                  />
                  <h4 className="text-2xl font-extrabold mb-6">
                    {feature?.title}
                  </h4>
                  <p className="text-lg font-extrabold leading-7">
                    {feature?.description}
                  </p>
                </div>
              </div>
            )
          }) : <></>
        }





      </div>
    )
  }

  const Header = () => {

    return (

      <div className="container px-4 mx-auto relative">
        <div className="max-w-5xl mx-auto mb-16 text-center text-white">
          <span className="text-lg font-extrabold text-orange-500">{heading ? heading : "HEADING"}</span>
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6">
            {title ? title : "TITLE"}
          </h1>
          <p className="text-xl font-extrabold leading-8">
            {description ? description : "DESCRIPTION"}
          </p>
        </div>
      </div>

    )
  }

  return (
    <section className="py-26 relative overflow-hidden">
      <Header />

      <div className="block w-full h-112 lg:h-156 mb-16 object-cover border-3 border-indigo-900 rounded-2xl shadow-lg">
        <DistortionCarousel displacmentImage="/assets/images/distortions/1.jpg" images={carousel ?? ["#", "#"]} />
      </div>

      <Features />
    </section >
  )
}

export default FeaturedSection