import "@libs/dashvars.css"
import "@libs/globals.css"
import "@libs/tailwind.css"
import "@libs/animations.css"
import "@libs/scrollbars.css"

import PageService from "@services/pages"
import PageLayout from "@layouts/PageLayout"

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { PageTransition } from 'next-page-transitions'
import { RecoilRoot } from 'recoil'

function Application({ Component, pageProps, layout }) {

  return (
    <RecoilRoot>
      <PageTransition loadingComponent={<>Loading Application</>} classNames={"page-transition"}>
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
