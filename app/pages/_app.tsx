import "@libs/dashvars.css"
import "@libs/globals.css"
import "@libs/tailwind.css"
import "@libs/animations.css"
import "@libs/scrollbars.css"

import { PageTransition } from 'next-page-transitions'
import { RecoilRoot } from 'recoil'

import type { IApplication } from "@typings/Application"


function Application({ Component, pageProps }: IApplication) {

  return (
    <RecoilRoot>
      <PageTransition loadingComponent={<></>}
        timeout={1400} classNames="page-transition">
        
        <Component {...pageProps} />
      </PageTransition>
      <style>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 450ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 450ms;
          }
        `}</style>
    </RecoilRoot>

  )
}

export default Application
