
import Image from "next/image"

import { SocialIcon } from 'react-social-icons';

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
  copyright: string,
  impressum: string,
  socials?: Social[],
  links?: Link[],
  logo?: {
    src: string,
    url?: string
  }
}

const Footer = ({ copyright, impressum, socials, links, logo }: FooterProps) => {

  return (
    <section className="bg-black bg-opacity-20">
      <div className="pt-26 border-3 border-l-0 border-r-0">
        <div className="pb-16 border-b-3 border-indigo-900">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full md:w-1/3 mb-12">


                <a className="inline-block mx-auto mb-8" href={"/"}>
                  <Image
                    height={"70px"}
                    width={"70px"}
                    className="h-12 h-40"
                    src={"/assets/images/logo-transparent.png"}
                    alt={"logo"}
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

                {/* Links */}
                <div className="flex flex-wrap items-center -mb-6">

                  {
                   links && links.map((link, index) => {

                      return (
                        <a
                          key={index}
                          className="inline-block mr-4 sm:mr-8 lg:mr-16 mb-6 text-lg font-extrabold hover:text-indigo-900"
                          href={link.url}
                        >
                          {link.name}
                        </a>
                      )
                    })
                  }

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
                {
                 socials && socials.map((social, index) => {
                    return (
                      <a
                      key={index}
                        className="inline-block text-white hover:text-indigo-800 mr-8"
                        href="#"
                      >
                        <SocialIcon bgColor={""} url={social.url} />

                      </a>

                    )
                  })
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

/*

       <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
              <FreeBreakfastIcon />


import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';

*/