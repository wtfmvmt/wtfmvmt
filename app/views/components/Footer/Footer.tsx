
import type { FooterProps } from "@typings/Footer";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import ReactTypingEffect from 'react-typing-effect';
import FadeAnimation from "../FadeAnimation";
import type { ComponentType } from "@typings/Component"

const Footer: ComponentType<FooterProps> = ({ copyright, impressum, socials, links, favicon }: FooterProps) => {

  const Header = () => {

    return (
      <div className="w-full md:w-1/3 mb-12">
        <a className="inline-block mx-auto mb-8" href={favicon?.url}>
          <Image
            height={"75px"}
            width={"75px"}
            className=""
            src={favicon?.image?.src ?? "FAVICON_NOT_FOUND"}
            alt={"wtfmvmt-logo"}
          />
        </a>

        <p className="max-w-sm text-lg text-slate-200 font-extrabold leading-8 font-share_tech">
          {impressum}
        </p>




      </div>
    )
  }


  const Links = () => {

    return (
      links ? <div className="w-full text-slate-200 font-share_tech">


        <div className="w-full">
          <div className="flex flex-wrap items-center -mb-6">
            <FadeAnimation triggerOnce duration={500} cascade>

              {
                links.map((link, index) => {
                  return (

                    <a key={index}
                      className="cursor-pointer duration-500 ease-in-out hvr-pop hover:font-major inline-block first-line:inline-block mr-4 sm:mr-8 lg:mr-16 mb-6 text-lg font-extrabold hover:text-purple-600 p-2 hover:bg-black transition-all hover:bg-opacity-90 hover:rounded"
                      href={link?.url}>
                      <img loading="lazy" alt={link.name} src={link.icon} className="inline-block h-8" />{link?.name}
                    </a>
                  )
                })
              }
            </FadeAnimation>
          </div>
        </div>

      </div > : <></>
    )
  }

  const Copyright = () => {
    return (
      <div className="w-full lg:w-auto mb-12 lg:mb-0 min-w-full max-w-full mt-24 text-slate-200 font-share_tech hover:font-major">
        <p className="text-center text-lg font-extrabold overflow-hidden h-full min-w-full">
          <ReactTypingEffect speed={50} eraseSpeed={20} typingDelay={40} text={copyright} />

        </p>
      </div>
    )
  }


  const Socials = () => {

    return (
      socials ? <div className="w-full ml-4 lg:w-auto flex flex-wrap overflow-clip items-center justify-center">
        {
          socials.map((social, index) => {

            return (
              <a
                key={index}
                className="inline-block mt-3 mr-6 rounded-full hover:scale-90 hover:bg-purple-500 transition-all"
                href={social?.url ?? "#"}
              >
                <SocialIcon bgColor="white" url={social?.url} />

              </a>
            )
          })
        }

      </div> : <></>
    )
  }



  return (

    <section>

      <div className="pt-26 border-3 border-l-0 border-r-0">
        <div className="pb-16 border-b-3 border-indigo-900">

          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-between items-center">
              <Header />

              <Links />
            </div>
          </div>



          <div className="container px-4 pt-16 pb-24 mx-auto">
            <div className="flex flex-wrap justify-between">

              <Socials />
              <Copyright />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
