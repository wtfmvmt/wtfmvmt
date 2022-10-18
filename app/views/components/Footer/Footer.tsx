
import type { FooterProps } from "@typings/Footer";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { SocialIcon } from "react-social-icons";
import ReactTypingEffect from 'react-typing-effect';
import useNotification from "@hooks/useNotification"


const Footer = ({ copyright, impressum, socials, links, logo }: FooterProps) => {

  const Header = () => {

    return (
      <div className="w-full md:w-1/3 mb-12">


        <a className="inline-block mx-auto mb-8" href={logo.url}>
          <Image
            height={"75px"}
            width={"75px"}
            className=""
            src={logo.src}
            alt={"wtfmvmt-logo"}
          />
        </a>

        <p className="max-w-xs text-lg font-extrabold leading-8">
          {impressum}
        </p>
      </div>
    )
  }


  const Links = () => {

    return (
      links ? <div className="w-full">


        <div className="w-full">
          <div className="flex flex-wrap items-center -mb-6">
            <Fade cascade>

              {
                links.map((link, index) => {
                  return (

                    <a key={index}
                      className="cursor-pointer hvr-pop inline-block first-line:inline-block mr-4 sm:mr-8 lg:mr-16 mb-6 text-lg font-extrabold hover:text-purple-600 p-2 hover:bg-black transition-all hover:bg-opacity-70 hover:rounded"
                      href={link?.url}>
                      <img loading="lazy" alt={link.name} src={link.icon} className="inline-block h-8" />{link?.name}
                    </a>
                  )
                })
              }
            </Fade>
          </div>
        </div>

      </div > : <></>
    )
  }

  const Copyright = () => {
    return (
      <div className="w-full lg:w-auto mb-12 lg:mb-0">
        <p className="text-center text-lg font-extrabold overflow-hidden h-full">
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
              <Copyright />
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
