import "@libs/tailwind.css"
import "@libs/globals.css"

import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react"

import type { IApplication } from "@typings/Application"


function Application({ Component, pageProps: { session, ...pageProps } }: IApplication) {

  return (
    <RecoilRoot>
      <SessionProvider>
        <Component session={session} {...pageProps} />

      </SessionProvider>
    </RecoilRoot>
  )
}

export default Application
