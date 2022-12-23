import "@libs/animations.css"
import "@libs/globals.css"
import "@libs/scrollbars.css"
import "@libs/tailwind.css"
import { PageTransition } from 'next-page-transitions'
import { RecoilRoot } from 'recoil'


function Application({ Component, pageProps }) {

  return (
    <RecoilRoot>
      {
        Component?.layout ?
          <Component.layout {...pageProps.page.layout}>
            <PageTransition timeout={500} classNames="page-transition">
              <Component {...pageProps} />
            </PageTransition>
          </Component.layout> :
          <Component {...pageProps} />
      }
    </RecoilRoot>

  )
}


export default Application
