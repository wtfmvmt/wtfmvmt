"use client"

import type { ComponentType } from "@typings/Component";
import type { FeaturedProps } from "@typings/Featured";
import DistortionCarousel from "../DistortionCarousel/DistortionCarousel";
import Heading from "@components/Heading"

const Featured: ComponentType<FeaturedProps> = ({ heading, title, description, features, carousel }: FeaturedProps) => {

  const buttonSxTw = (self) => self


  const Features = () => {


    return (
      <div className="flex flex-wrap -mx-4">

        {
          features ? features.map((feature, index) => {

            return (

              <div key={index} className="w-full px-4 m-0 transition-all cursor-pointer lg:w-1/3 group">
                <div className={buttonSxTw("h-3/4 m-0 max-w-md mx-auto py-10 px-6 rounded-lg text-slate-200 text-center mt-2")}>
                  <img
                    className="block object-contain mx-auto mb-4 rounded"
                    src={feature?.cover ?? ""}
                    alt=""
                  />
                  <h4 className="mb-6 text-2xl font-extrabold font-major">
                    {feature?.title ?? "FEATURED_TITLE_NOT_FOUND"}
                  </h4>
                  <p className="text-lg font-extrabold leading-7 duration-500 ease-in-out translate-x-4 opacity-0 group-hover:-translate-x-4 font-share_tech group-hover:opacity-100">
                    {feature?.description ?? "FEATURED_DESCRIPTION_NOT_FOUND"}
                  </p>
                </div>
              </div>
            )
          }) : <>FEATURES_NOT_FOUND</>
        }
      </div>
    )
  }

  const Header = () => {

    return (

      <div className="container relative px-4 mx-auto group">
        <div className="max-w-5xl mx-auto mb-16 text-center text-white">
          <span className="text-lg font-extrabold text-blue-400 font-major">{heading ? heading : "HEADING_NOT_FOUND"}</span>
          <Heading sx={["mt-4 mb-6"]}>
            {title ?? "[Client]: TITLE_NOT_FOUND"}
          </Heading>
          <p className="text-xl font-extrabold leading-8 font-share_tech">
            {description ? description : "DESCRIPTION_NOT_FOUND"}
          </p>
        </div>
      </div>

    )
  }

  return (

    <section className="relative overflow-hidden py-26">
      <Header />
      <div className="block object-cover w-full mb-16 h-112 lg:h-156">
        <DistortionCarousel displacmentImage="/assets/images/distortions/1.jpg" images={carousel ?? ["IMAGE_NOT_FOUND"]} />
      </div>

      <Features />
    </section >
  )
}

export default Featured