import type { ComponentType } from "@typings/Component";
import type { FeaturedSectionProps } from "@typings/FeaturedSection";
import ButtonSx from "@views/styles/Button";
import { lazy, Suspense } from "react";


const Loader = lazy(() => import("@components/Loader"));
const DistortionCarousel = lazy(() => import("@components/DistortionCarousel"));
const FeaturedSection: ComponentType<FeaturedSectionProps> = ({ heading, title, description, features, carousel }: FeaturedSectionProps) => {

  const { tw: buttonSxTw } = ButtonSx.root

  const Features = () => {


    return (
      <div className="flex flex-wrap -mx-4">

        {
          features ? features.map((feature, index) => {

            return (

              <div key={index} className="cursor-pointer transition-all w-full lg:w-1/3 px-4 m-0 group">
                <div className={buttonSxTw("h-3/4 m-0 max-w-md mx-auto py-10 px-6 rounded-lg text-slate-200 text-center mt-2")}>
                  <img
                    className="block mx-auto mb-4 object-contain rounded"
                    src={feature?.cover ?? ""}
                    alt=""
                  />
                  <h4 className="text-2xl font-extrabold mb-6 font-major">
                    {feature?.title ?? "FEATURED_TITLE_NOT_FOUND"}
                  </h4>
                  <p className="text-lg  translate-x-4 group-hover:-translate-x-4 font-extrabold leading-7 font-share_tech opacity-0 group-hover:opacity-100 ease-in-out duration-500">
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

      <div className="container px-4 mx-auto relative group">
        <div className="max-w-5xl mx-auto mb-16 text-center text-white">
          <span className="text-lg font-major font-extrabold text-blue-400">{heading ? heading : "HEADING_NOT_FOUND"}</span>
          <h1 className="text-3xl font-major md:text-4xl font-extrabold font-heading mt-4 mb-6">
            {title ? title : "TITLE_NOT_FOUND"}
          </h1>
          <p className="text-xl font-share_tech font-extrabold leading-8">
            {description ? description : "DESCRIPTION_NOT_FOUND"}
          </p>
        </div>
      </div>

    )
  }

  return (

    <section className="py-26 relative overflow-hidden">
      <Header />
      <Suspense fallback={<Loader />}>
        <div className="block w-full h-112 lg:h-156 mb-16 object-cover">
          <DistortionCarousel displacmentImage="/assets/images/distortions/1.jpg" images={carousel ?? ["IMAGE_NOT_FOUND"]} />
        </div>
      </Suspense>


      <Features />
    </section >
  )
}

export default FeaturedSection