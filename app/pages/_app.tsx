import "@libs/dashvars.css"
import "@libs/globals.css"
import "@libs/tailwind.css"
import "@libs/animations.css"
import "@libs/scrollbars.css"

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { PageTransition } from 'next-page-transitions'
import { RecoilRoot } from 'recoil'

import type { IApplication } from "@typings/Application"


function Application({ Component, pageProps }: IApplication) {

  return (
    <RecoilRoot>
      <PageTransition
        loadingComponent={<>Date.now()</>}
        timeout={20}
        classNames="page-transition">
        <Component {...pageProps} />
      </PageTransition>
    </RecoilRoot>

  )
}

export default Application
