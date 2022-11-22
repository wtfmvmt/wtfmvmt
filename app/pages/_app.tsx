import "@libs/animations.css"
import "@libs/globals.css"
import "@libs/scrollbars.css"
import "@libs/tailwind.css"

import PageLayout from "@layouts/PageLayout"
import PageService from "@services/pages"
import LoadingBar from 'react-top-loading-bar'
import { RecoilRoot } from 'recoil'


function Application({ Component, pageProps, layout }) {

  return (
    <RecoilRoot>
      <PageLayout {...layout}>
        <LoadingBar progress={100} />
        <Component {...pageProps} />
      </PageLayout>
    </RecoilRoot>
  )
}

Application.getInitialProps = async () => {
  const { getPage } = PageService;
  const { layout } = await getPage("home");
  return { layout }
};


export default Application