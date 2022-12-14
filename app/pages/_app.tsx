import "@libs/animations.css"
import "@libs/globals.css"
import "@libs/scrollbars.css"
import "@libs/tailwind.css"

import { RecoilRoot } from 'recoil'


function Application({ Component, pageProps }) {

  return (
    <RecoilRoot>
      {
        Component?.layout ?
          <Component.layout {...pageProps.page.layout}>
            <Component {...pageProps} />
          </Component.layout> :
          <Component {...pageProps} />
      }
    </RecoilRoot>

  )
}


export default Application
