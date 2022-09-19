import ContactSection from "@components/ContactSection"
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

import { useEffect } from "react"


const configs = {
  revalidation: 3
}

const HomePage: IPage<StaticPage> = ({ pageData }) => {

  useEffect(() => {
    console.log(`[FacadeData] => `, pageData.test)
  }, [pageData])

  return (
    <PageLayout {...pageData.layout}>
      <Hero {...pageData.hero} />
      <FeaturedSection {...pageData.featuredSection} />
      <SummarySection {...pageData.summarySection} />
      <SimpleFormSection {...pageData.simpleFormSection} />
      <StatsSection {...pageData.statsSection} />
      <ImageMasonry {...pageData.imageMasonry} />
      <ContactSection {...pageData.contactSection} />
    </PageLayout>
  )
}

export default HomePage

export async function getStaticProps() {

  const pageData = await HomePageDB.init().then((data) => data)

  return {
    props: {
      pageData: pageData,
    }
  }
}

