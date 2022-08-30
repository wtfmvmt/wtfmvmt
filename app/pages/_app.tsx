import type { IApplication } from "@typings/Application"
import "@libs/globals.css"
import "@libs/tailwind.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Application({ Component, pageProps }: IApplication) {
  return <Component {...pageProps} />
}

export default Application
