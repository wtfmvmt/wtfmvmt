import type { CallToAction } from "@models/typings/CallToAction"
import type { ImageProps } from "@typings/Image"


export type SimpleFormSectionProps = {

  cover: ImageProps,
  heading: string, 
  title: string,
  description: string, 
  placeHolder: string,
  cta: CallToAction
}
const SimpleFormSection = () => {

  return (

    <section className="py-26  bg-black bg-opacity-10 relative overflow-hidden">

      <div className="container px-4 mx-auto relative">
        <div className="text-center text-white">
          <span className="text-lg font-extrabold text-orange-500">Newsletter</span>
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-3 mb-4">
            Sign up for our newsletter
          </h1>
          <p className="text-xl font-extrabold leading-8 mb-10">
            Stay in the loop with everything you need to know.
          </p>
        </div>
        <div className="max-w-lg mx-auto mt-10 mb-10">
          <div className="flex flex-wrap -mx-2 justify-center">
            <div className="flex-grow w-full md:w-auto px-2 mb-2">
              <input
                className="bg-transparent inline-block w-full p-4 text-lg font-extrabold placeholder-white shadow-xl border-2 border-white rounded outline-none"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="w-full md:w-auto px-2 mb-2">
              <a
                className="inline-flex items-center justify-center w-full md:w-auto h-full py-4 px-5 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 rounded transition duration-200"
                href="#"
              >
                Subscribe
              </a>
            </div>
            <div className="w-full px-2">
              <p className="text-xs font-extrabold">
                We care about your data in our privacy policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SimpleFormSection