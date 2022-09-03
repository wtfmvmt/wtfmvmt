import PageLayout from '@layouts/PageLayout'
import Console from '@views/components/Console'
import type { NextPage } from 'next'
import homePage from "@pages/homePage"
import Notifications from '@views/components/Notifications'

const HomePage: NextPage = () => {

  const { Banner } = homePage.init()

  return (
    <PageLayout metaData={{ pageTitle: 'WTFMVMT'}}>
      <Console banner={Banner} />
      <Notifications/>
    </PageLayout>
  )
}

export default HomePage
