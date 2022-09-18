import "@libs/dashvars.css"
import "@libs/globals.css"
import "@libs/tailwind.css"
import "@libs/animations.css"
import "@libs/scrollbars.css"

import { PageTransition } from 'next-page-transitions'
import { RecoilRoot } from 'recoil'


import IndexedDBProvider, { useIndexedDBStore } from "use-indexeddb";


import type { IApplication } from "@typings/Application"


const idbConfig = {
  databaseName: "wtfmvmt-db",
  version: 3,
  stores: [
    {
      name: "media",
      id: { keyPath: "id", autoIncrement: true },
      indices: [
        { name: "name", keyPath: "name", options: { unique: false } },
        { name: "type", keyPath: "type" },
        { name: "source", keyPath: "source" },
      ],
    },
  ],
};

function Application({ Component, pageProps }: IApplication) {

  return (
    <RecoilRoot>
      <PageTransition loadingComponent={<></>}
        timeout={700} classNames="page-transition">
        <IndexedDBProvider config={idbConfig} loading="Loading..." fallback="Unsupported">
          <Component {...pageProps} />
        </IndexedDBProvider>
      </PageTransition>
    </RecoilRoot>

  )
}

export default Application
