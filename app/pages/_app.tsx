import "@libs/globals.css"
import "@libs/tailwind.css"
import "@libs/animations.css"

import type { IApplication } from "@typings/Application"
import { RecoilRoot } from 'recoil';

function Application({ Component, pageProps }: IApplication) {
  
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default Application
