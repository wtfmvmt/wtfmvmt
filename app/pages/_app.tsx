import "@libs/globals.css"
import "@libs/tailwind.css"
import "@libs/animations.css"
import { PageTransition } from 'next-page-transitions'

import type { IApplication } from "@typings/Application"
import { RecoilRoot } from 'recoil';

function Application({ Component, pageProps }: IApplication) {

  return (
    <RecoilRoot>
      <PageTransition timeout={900} classNames="page-transition">
        <Component {...pageProps} />
      </PageTransition>
      <style>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
    </RecoilRoot>

  )
}

export default Application
