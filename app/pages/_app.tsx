import type { IApplication } from "@typings/Application"
import "@libs/globals.css"
import "@libs/tailwind.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { RecoilRoot } from 'recoil';

function Application({ Component, pageProps }: IApplication) {
  return (
    <RecoilRoot>

      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default Application
