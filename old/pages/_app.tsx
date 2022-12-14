import Loader from "@includes/Loader"
import "@libs/animations.css"
import "@libs/globals.css"
import "@libs/scrollbars.css"
import "@libs/tailwind.css"
import { PageTransition } from 'next-page-transitions'
import { useRouter } from 'next/router'
import { RecoilRoot } from 'recoil'

function Application({ Component, pageProps }) {

  const router = useRouter()

  const transitionParams = {
    loadingComponent: <Loader />,
    timeout: 200,
    classNames: "page-transition"
  }

  const TransitionStyles = () => (
    <style jsx global>{`
    .page-transition-enter {
      opacity: 0;
      filter: blur(50px), grayscale(80%);
    }
    
    .page-transition-enter-active {
      opacity: 1;
      filter: blur(50px), grayscale(80%);
      transition: all ease-in-out ${transitionParams.timeout}ms;
    }
    
    .page-transition-exit {
      opacity: 1;
      filter: blur(0px), grayscale(0%);
    }
    
    .page-transition-exit-active {
      opacity: 0;
      filter: blur(50px), grayscale(50%), drop-shadow(25px, 25px, 25px, 25px);
      transition: all ease-in-out ${transitionParams.timeout}ms;
    }

    `}</style>
  )

  return (
    <RecoilRoot>
      {
        Component?.layout ?
          <PageTransition {...transitionParams}>
            <Component.layout {...pageProps.page.layout}>
              <Component key={router.route} {...pageProps} />
              <TransitionStyles />
            </Component.layout>
          </PageTransition>
          :
          <Component {...pageProps} />
      }
    </RecoilRoot>

  )
}


export default Application
