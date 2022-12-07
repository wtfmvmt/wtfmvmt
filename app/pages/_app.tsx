import "@libs/animations.css"
import "@libs/globals.css"
import "@libs/scrollbars.css"
import "@libs/tailwind.css"

import { RecoilRoot } from 'recoil'


function Application({ Component, pageProps }) {

  const { PageLayout } = Component.layout

  return (
  <RecoilRoot>
  
      <PageLayout {...pageProps.page.layout}>
        <Component {...pageProps} />
      </PageLayout>
    </RecoilRoot>

  )
}


export default Application
