
import FadeAnimation from "@components/FadeAnimation";
import type { ComponentType } from "@typings/Component";
import type { FooterProps } from "@typings/Footer";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import ReactTypingEffect from 'react-typing-effect';

const Footer: ComponentType<FooterProps> = ({ copyright, impressum, socials, links, favicon }: FooterProps) => {

  const Header = () => {

    return (
      <div className="w-full mb-12 md:w-1/3">
        <a className="inline-block mx-auto mb-8" href={favicon?.url}>
          <Image
            height={75}
            width={75}
            className=""
            src={favicon?.image?.src ?? "FAVICON_NOT_FOUND"}
            alt={"wtfmvmt-logo"}
          />
        </a>

        <p className="max-w-md text-lg font-extrabold leading-8 text-slate-200 font-share_tech">
          {impressum}
        </p>

      </div>
    )
  }

  const Links = () => {

    return (
      links ?
        <div className="w-full text-slate-200 font-share_tech">

          <div className="w-full">
            <div className="flex flex-wrap items-center -mb-6">
              <FadeAnimation triggerOnce duration={400} cascade>

                {
                  links.map((link, index) => {
                    return (

                      <a key={index}
                        className="inline-block p-2 mb-6 mr-4 text-lg font-extrabold transition-all duration-500 ease-in-out cursor-pointer hvr-pop hover:font-major first-line:inline-block sm:mr-8 lg:mr-16 hover:text-blue-300 hover:bg-black hover:bg-opacity-90 hover:rounded"
                        href={link?.url}>
                        <img loading="lazy" alt={link?.name} src={link?.icon} className="inline-block h-8" />{link?.name}
                      </a>
                    )
                  })
                }
              </FadeAnimation>
            </div>
          </div>

        </div > : <>LINKS_NOT_FOUND</>
    )
  }

  const Copyright = () => {
    return (
      <div className="w-full max-w-full min-w-full mt-24 mb-12 lg:w-auto lg:mb-0 text-slate-200 font-share_tech hover:font-major">
        <p className="h-full min-w-full overflow-hidden text-lg font-extrabold text-center">
          <ReactTypingEffect speed={50} eraseSpeed={20} typingDelay={40} text={copyright} />
        </p>
      </div>
    )
  }

  const Socials = () => {

    return (
      socials ? <div className="flex flex-wrap items-center justify-center w-full ml-4 lg:w-auto overflow-clip">
        {
          socials.map((social, index) => {

            return (
              <a
                key={index}
                className="inline-block mt-3 mr-6 transition-all rounded-full hover:scale-90 hover:bg-blue-500"
                href={social?.url ?? "SOCIAL_URL_NOT_FOUND"}
              >
                <SocialIcon bgColor="white" url={social?.url ?? "SOCIAL_URL_NOT_FOUND"} />
              </a>
            )
          })
        }

      </div> : <>SOCIALS_NOT_FOUND</>
    )
  }

  return (

    <section>
      <div className="pt-24">
        <div className="pb-16">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center justify-between">
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
