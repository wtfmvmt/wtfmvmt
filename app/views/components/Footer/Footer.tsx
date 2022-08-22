

const Footer = ({ copyright, impressum }) => {

  return (
    <section style={{ backdropFilter: 'blur(4px)' }}>
      <div className="pt-26 border-3 border-l-0 border-r-0">
        <div className="pb-16 border-b-3 border-indigo-900">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full md:w-1/3 mb-12">
                <a className="inline-block mx-auto mb-8" href="#">
                  <img
                    className="h-12 h-40"
                    src="https://static.shuffle.dev/uploads/files/c5/c588f2e6e97dec56040c09794a6a944110e98d9d/Untitled-design.png"
                    alt=""
                  />
                </a>
                <p className="max-w-xs text-lg font-extrabold leading-8">
                  {impressum}
                </p>
              </div>
              <div className="w-full md:w-1/3 mb-12 md:text-right">
                <div className="mb-4">
                  <a className="inline-block w-auto" href="#">
                    <img src="nigodo-assets/footers/google-play.svg" alt="" />
                  </a>
                </div>
                <div>
                  <a className="inline-block w-auto" href="#">
                    <img src="nigodo-assets/footers/app-store.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-wrap items-center -mb-6">
                  <a
                    className="inline-block mr-4 sm:mr-8 lg:mr-16 mb-6 text-lg font-extrabold hover:text-indigo-800"
                    href="#"
                  >
                    Projects
                  </a>
                  <a
                    className="inline-block mr-4 sm:mr-8 lg:mr-16 mb-6 text-lg font-extrabold hover:text-indigo-800"
                    href="#"
                  >
                    Vision
                  </a>
                  <a
                    className="inline-block mr-4 sm:mr-8 lg:mr-16 mb-6 text-lg font-extrabold hover:text-indigo-800"
                    href="#"
                  >
                    Services
                  </a>
                  <a
                    className="inline-block mr-4 sm:mr-8 lg:mr-16 mb-6 text-lg font-extrabold hover:text-indigo-800"
                    href="#"
                  >
                    Resources
                  </a>
                  <a
                    className="inline-block mr-4 sm:mr-8 lg:mr-16 mb-6 text-lg font-extrabold hover:text-indigo-800"
                    href="#"
                  >
                    Carrers
                  </a>
                  <a
                    className="inline-block mr-4 sm:mr-8 lg:mr-16 mb-6 text-lg font-extrabold hover:text-indigo-800"
                    href="#"
                  >
                    Help
                  </a>
                  <a
                    className="inline-block mb-6 text-lg font-extrabold hover:text-indigo-800"
                    href="#"
                  >
                    Privacy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4 pt-16 pb-24 mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-auto mb-12 lg:mb-0">
              <p className="text-center text-lg font-extrabold">
                {copyright}
              </p>
            </div>


            {/* Icons Row */}
            <div className="w-full lg:w-auto flex items-center justify-center">
        

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer