import ContactSection from "@components/ContactSection"
import DataSection from "@components/DataSection"
import FeaturedMedia from "@components/FeaturedMedia"
import FeaturedSection from "@components/FeaturedSection"
import Hero from "@components/Hero"
import ImageMasonry from "@components/ImageMasonry"
import SimpleFormSection from "@components/SimpleFormSection"
import StatsSection from "@components/StatsSection"
import SummarySection from "@components/SummarySection"
import PageLayout from "@layouts/PageLayout"
import HomePageDB from "@pages/HomePageDB"

import type { IPage } from "@typings/Page"
import type { StaticPage } from "@typings/StaticPage"



const HomePage: IPage<StaticPage> = ({ pageData }) => {

  console.log(pageData)


  return (
    <PageLayout {...pageData.layout}>
      <Hero {...pageData.hero} />
      <FeaturedSection {...pageData.featuredSection} />
      <SummarySection {...pageData.summarySection} />
      <DataSection {...pageData.dataSection} />
      <SimpleFormSection {...pageData.simpleFormSection} />
      <StatsSection {...pageData.statsSection} />
      <FeaturedMedia {...pageData.featuredMedia} />
      <ImageMasonry {...pageData.imageMasonry} />
      <ContactSection {...pageData.contactSection} />
    </PageLayout>
  )
}

export default HomePage

export async function getStaticProps() {

  return {
    props: {
      pageData: HomePageDB.init()
    },
    revalidate: 10
  }
}

