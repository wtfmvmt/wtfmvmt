import "@libs/animations.css"
import "@libs/dashvars.css"
import "@libs/globals.css"
import "@libs/scrollbars.css"
import "@libs/tailwind.css"

import PageLayout from "@layouts/PageLayout"
import PageService from "@services/pages"

import Loader from "@components/Loader"
import { PageTransition } from 'next-page-transitions'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { RecoilRoot } from 'recoil'


function Application({ Component, pageProps, layout }) {


  return (
    <>
      <RecoilRoot>
        <PageTransition  monkeyPatchScrolling timeout={100} showLoading loadingDelay={0} loadingComponent={<Loader />} classNames={"page-transition"}>
          <PageLayout {...layout}>
            <Component {...pageProps} />
          </PageLayout>
        </PageTransition>
      </RecoilRoot>
    </>
  )
}

Application.getInitialProps = async () => {
  const { getPage } = PageService;
  const { layout } = await getPage("home");
  return { layout }
};


export default Application