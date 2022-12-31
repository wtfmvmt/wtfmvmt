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
            <style jsx global>{`
            
            .page-transition-enter {
              opacity: 0;
              background-color: black;
            }
            
            .page-transition-enter-active {
              opacity: 1;
              transition: all ease-in-out 900ms;
            }
            
            .page-transition-exit {
              opacity: 1;
            }
            
            .page-transition-exit-active {
              opacity: 0.5;
              background-color: black;
              transition: all ease-in-out 900ms;
            }
            `}</style>
          </Component.layout> :
          <Component {...pageProps} />
      }
    </RecoilRoot>

  )
}


export default Application
