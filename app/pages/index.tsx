import ContactSection from "@components/ContactSection"
import FeaturedSection from "@components/FeaturedSection"
import Hero from "@components/Hero"
import ImageMasonry from "@components/ImageMasonry"
import SimpleFormSection from "@components/SimpleFormSection"
import StatsSection from "@components/StatsSection"
import SummarySection from "@components/SummarySection"
import PageLayout from "@layouts/PageLayout"

import type { IPage } from "@typings/Page"
import type { StaticPage } from "@typings/StaticPage"

import { useEffect } from "react"



const HomePage: IPage<StaticPage> = ({ pageData }) => {

  useEffect(() => {
    console.log(`[Data] => `, pageData)
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

export async function getServerSideProps() {

  const pageData = await fetch(`${process.env.NODE_ENV === "production" ? "https://wtfmvmt.com/api/pages" : `http://localhost:${process.env.PORT || 3000}/api/pages`}`, {
    method: 'GET',
  }).then(res => res.json())

  return {
    props: {
      pageData: pageData,
    }
  }
}
