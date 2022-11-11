import "@libs/animations.css"
import "@libs/dashvars.css"
import "@libs/globals.css"
import "@libs/scrollbars.css"
import "@libs/tailwind.css"

import PageLayout from "@layouts/PageLayout"
import PageService from "@services/pages"

import { PageTransition } from 'next-page-transitions'
import React, { lazy, Suspense } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { RecoilRoot } from 'recoil'
import Loader from "@components/Loader"


function Application({ Component, pageProps, layout }) {


  return (
    <Suspense fallback={<Loader />}>
      <RecoilRoot>
        <PageTransition timeout={1000} showLoading loadingComponent={<Loader />} classNames={"page-transition"}>
          <PageLayout {...layout}>
            <Component {...pageProps} />
          </PageLayout>
        </PageTransition>
      </RecoilRoot>
    </Suspense>
  )
}

Application.getInitialProps = async () => {
  const { getPage } = PageService;
  const { layout } = await getPage("home");
  return { layout }
};


export default Application