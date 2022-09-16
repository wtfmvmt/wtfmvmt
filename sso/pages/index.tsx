import PageLayout from '@layouts/PageLayout'
import Console from '@views/components/Console'
import type { NextPage } from 'next'
import homePage from "@pages/homePage"
import Notifications from '@views/components/Notifications'
import { useEffect } from 'react'


const DashboardPage: NextPage = () => {

 

  const metaData = {
    pageTitle: 'WTFMVMT'
  }

  const { banner } = homePage.init()

  return (
    <PageLayout metaData={metaData}>
      <Console banner={banner} />
      <Notifications />
    </PageLayout>
  )
}

export default DashboardPage
