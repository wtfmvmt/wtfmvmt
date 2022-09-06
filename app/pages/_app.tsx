import "@libs/globals.css"
import "@libs/tailwind.css"
import "@libs/animations.css"
import { PageTransition } from 'next-page-transitions'

import type { IApplication } from "@typings/Application"
import { RecoilRoot } from 'recoil';

function Application({ Component, pageProps }: IApplication) {

  return (
    <RecoilRoot>
      <PageTransition timeout={900} classNames="puff-in-hor">
        <Component {...pageProps} />
      </PageTransition>
    </RecoilRoot>

  )
}

export default Application
