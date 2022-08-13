import type { IApplication } from "@typings/Application"
import "@libs/globals.css"
import "@libs/tailwind.css"

function Application({ Component, pageProps }: IApplication) {
  return <Component {...pageProps} />
}

export default Application
