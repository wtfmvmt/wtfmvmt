import PageLayout from '@layouts/PageLayout'
import Console from '@views/components/Console'
import type { NextPage } from 'next'



const BannerData = {
  heading: "WTFMVMT: Admin",
  description: 'Home for Managing Anayltics, Social Media, Content, Forms, Media',
  logo: {
    src: '/assets/images/logo-transparent.png',
    alt: ''
  }
}
const HomePage: NextPage = () => {
  return (
    <PageLayout metaData={{ pageTitle: 'WTFMVMT'}}>
      <Console banner={BannerData} />
    </PageLayout>
  )
}

export default HomePage
