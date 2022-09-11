
import Image from "next/image"
import Icon from "@components/Icon"
import { SocialIcon } from 'react-social-icons';
import { Fade } from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';

export type Link = {
  name: string,
  url: string,
  icon?: string
}

export type Social = {
  name: string,
  url: string,
}

export type FooterProps = {
  copyright: string[],
  impressum: string,
  socials?: Social[],
  links?: Link[],
  logo?: {
    src: string,
    url?: string
  }
}

const Footer = ({ copyright, impressum, socials, links, logo }: FooterProps) => {


  const Header = () => {

    return (
      <div className="w-full md:w-1/3 mb-12">


        <a className="inline-block mx-auto mb-8" href={logo.url}>
          <Image
            height={"75px"}
            width={"75px"}
            className="h-12 h-40"
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
                      className="hvr-pop first-line:inline-block mr-4 sm:mr-8 lg:mr-16 mb-6 text-lg font-extrabold hover:text-purple-600 p-2 hover:bg-black transition-all hover:bg-opacity-60 hover:rounded"
                      href={""}
                    >
                      <Icon id={link.icon} />
                      {link.name}
                    </a>
                  )
                })
              }
            </Fade>
          </div>
        </div>

      </div> : <></>
    )
  }

  const Copyright = () => {
    return (
      <div className="w-full lg:w-auto mb-12 lg:mb-0">
        <p className="text-center text-lg font-extrabold">
          <ReactTypingEffect speed={50} eraseSpeed={20} typingDelay={40} text={copyright} />

        </p>
      </div>
    )
  }


  const Socials = () => {

    return (
      <div className="w-full ml-4 lg:w-auto flex items-center justify-center">
        {
          socials && socials.map((social, index) => {

            return (
              <a
                key={index}
                className="inline-block text-white hover:text-indigo-800 mr-8 hvr-pop transition-all"
                href={social.url}
              >
                <SocialIcon bgColor={"white"} url={social.url} />

              </a>
            )
          })
        }

      </div>
    )
  }



  return (

    <section style={{ borderTop: '1px solid gray' }} className="bg-black bg-opacity-50">

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
