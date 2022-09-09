import { Fade } from "react-awesome-reveal"
import DistortionCarousel from "@components/DistortionCarousel";
import images from "@db/images"

export type Feature = {
  title: string,
  description: string
}

export type FeaturedSectionProps = {
  heading: string,
  title: string,
  description: string
  features: Feature[]
}

const imageSrc = images.map((image) => image.src)

const FeaturedSection = ({ heading, title, description, features }: FeaturedSectionProps) => {

  const Features = () => {


    return (
      <div className="flex flex-wrap -mx-4">


        {
          features ? features.map((feature, index) => {
            return (

              <div key={index} className="hover:scale-90 transition-all shadow-2xl w-full lg:w-1/3 px-4">
                <div className="h-full hvr-pop max-w-md mx-auto py-12 px-8 bg-black bg-opacity-75 border-3 border-indigo-900 shadow-md rounded-2xl text-center mt-2">
                  <img
                    className="block mx-auto mb-4"
                    src="/assets/images/events.svg"
                    alt=""
                  />
                  <h4 className="text-2xl font-extrabold mb-6">
                    {feature.title}
                  </h4>
                  <p className="text-lg font-extrabold leading-7">
                    {feature.description}
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
        <DistortionCarousel displacmentImage="/assets/images/distortions/1.jpg" images={imageSrc} />
      </div>

      <Features />
    </section >
  )
}

export default FeaturedSection