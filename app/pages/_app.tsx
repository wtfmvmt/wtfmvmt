import "@libs/dashvars.css"
import "@libs/globals.css"
import "@libs/tailwind.css"
import "@libs/animations.css"
import "@libs/scrollbars.css"

import "react-responsive-carousel/lib/styles/carousel.min.css";

import RootLayout from "@views/layouts/RootLayout"

import { PageTransition } from 'next-page-transitions'
import { RecoilRoot } from 'recoil'

import type { IApplication } from "@typings/Application"


function Application({ Component, pageProps }: IApplication) {

  return (
    <RecoilRoot>
      <PageTransition loadingComponent={<></>}
        timeout={200} classNames="page-transition">
          <Component {...pageProps} />
      </PageTransition>
    </RecoilRoot>

  )
}

export default Application
