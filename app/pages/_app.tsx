import "@libs/animations.css"
import "@libs/dashvars.css"
import "@libs/globals.css"
import "@libs/scrollbars.css"
import "@libs/tailwind.css"

import PageLayout from "@layouts/PageLayout"
import PageService from "@services/pages"

import { PageTransition } from 'next-page-transitions'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { PacmanLoader } from "react-spinners"
import { RecoilRoot } from 'recoil'

function Application({ Component, pageProps, layout }) {

  return (
    <RecoilRoot>
      <PageTransition timeout={365} loadingComponent={<PacmanLoader color="#36d7b7" />} classNames={"page-transition"}>
        <PageLayout {...layout}>
          <Component {...pageProps} />
        </PageLayout>
      </PageTransition>
    </RecoilRoot>

  )
}

Application.getInitialProps = async () => {
  const { getPage } = PageService;
  const { layout } = await getPage("home");
  return { layout }
};


export default Application
