"use client"

import type { ComponentType } from "@typings/Component";
<<<<<<< HEAD:app/views/components/Featured/Featured.tsx
import type { FeaturedProps } from "@typings/Featured";
import ButtonSx from "@views/styles/Button";
import { lazy, Suspense } from "react";


const Featured: ComponentType<FeaturedProps> = ({ heading, title, description, features, carousel }: FeaturedProps) => {
=======
import type { FeaturedSectionProps } from "@typings/FeaturedSection";
>>>>>>> parent of f0f3051... [ Last known good build ]!:app/views/components/FeaturedSection/FeaturedSection.tsx

const FeaturedSection: ComponentType<FeaturedSectionProps> = ({ heading, title, description, features, carousel }: FeaturedSectionProps) => {

  const Loader = lazy(() => import("@components/Loader"));
  const DistortionCarousel = lazy(() => import("@components/DistortionCarousel"));


  const Features = () => {


    return (
      <div className="flex flex-wrap -mx-4">

        {
          features ? features.map((feature, index) => {

            return (

<<<<<<< HEAD:app/views/components/Featured/Featured.tsx
              <div key={index} className="w-full px-4 m-0 transition-all cursor-pointer lg:w-1/3 group">
                <div className={buttonSxTw("h-3/4 m-0 max-w-md mx-auto py-10 px-6 rounded-lg text-slate-200 text-center mt-2")}>
=======
              <div key={index} className="cursor-pointer hover:-translate-y-4 ease-in-out duration-500 transition-all shadow-2xl w-full lg:w-1/3 px-4">
                <div className="h-3/4 max-w-md mx-auto py-10 px-6 bg-black bg-opacity-80 backdrop-blur-sm shadow-lg hover:shadow-2xl rounded-lg text-center  text-slate-200 mt-2">
>>>>>>> parent of f0f3051... [ Last known good build ]!:app/views/components/FeaturedSection/FeaturedSection.tsx
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
<<<<<<< HEAD:app/views/components/Featured/Featured.tsx
          <span className="text-lg font-extrabold text-blue-400 font-major">{heading ? heading : "HEADING_NOT_FOUND"}</span>
          <h1 className="mt-4 mb-6 text-3xl font-extrabold font-major md:text-4xl font-heading">
=======
          <span className="text-lg font-major font-extrabold text-purple-900">{heading ? heading : "HEADING_NOT_FOUND"}</span>
          <h1 className="text-3xl font-major md:text-4xl font-extrabold font-heading mt-4 mb-6">
>>>>>>> parent of f0f3051... [ Last known good build ]!:app/views/components/FeaturedSection/FeaturedSection.tsx
            {title ? title : "TITLE_NOT_FOUND"}
          </h1>
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
      <Suspense fallback={<Loader />}>
        <div className="block object-cover w-full mb-16 h-112 lg:h-156">
          <DistortionCarousel displacmentImage="/assets/images/distortions/1.jpg" images={carousel ?? ["IMAGE_NOT_FOUND"]} />
        </div>
      </Suspense>


      <Features />
    </section >
  )
}

export default Featured