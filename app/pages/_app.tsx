import "@libs/animations.css"
import "@libs/globals.css"
import "@libs/scrollbars.css"
import "@libs/tailwind.css"

<<<<<<< HEAD
import { Suspense } from "react"
=======
import PageLayout from "@layouts/PageLayout"
import PageService from "@services/pages"

import { PageTransition } from 'next-page-transitions'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { PacmanLoader } from "react-spinners"
>>>>>>> parent of f0f3051... [ Last known good build ]!
import { RecoilRoot } from 'recoil'
import { Suspense } from "react"
import PositionSx from "@styles/Position";


function Application({ Component, pageProps }) {

<<<<<<< HEAD
  const { PageLayout } = Component.layout

  return (
  <RecoilRoot>
  
      <PageLayout {...pageProps.page.layout}>
        <Component {...pageProps} />
      </PageLayout>
    </RecoilRoot>
=======
const { absolute_center: { tw: tw_center } } = PositionSx()

function Application({ Component, pageProps, layout }) {

  const Loader = () => {
    return (
      <div className={`${tw_center}`}>
        <PacmanLoader color="#9200CC" />
      </div>
    )
  }


  return (
    <Suspense fallback={<Loader />}>
      <RecoilRoot>
        <PageTransition timeout={300} loadingComponent={<Loader />} classNames={"page-transition"}>
          <PageLayout {...layout}>
            <Component {...pageProps} />
          </PageLayout>
        </PageTransition>
      </RecoilRoot>
    </Suspense>
>>>>>>> parent of f0f3051... [ Last known good build ]!

  )
}


export default Application
