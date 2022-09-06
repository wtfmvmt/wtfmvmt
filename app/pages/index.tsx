import ContactSection from "@components/ContactSection"
import ContentGrid from "@components/ContentGrid"
import DataSection from "@components/DataSection"
import FeaturedMedia from "@components/FeaturedMedia"
import FeaturedSection from "@components/FeaturedSection"
import Hero from "@components/Hero"
import ImageMasonry from "@components/ImageMasonry/ImageMasonry"
import SimpleFormSection from "@components/SimpleFormSection"
import StatsSection from "@components/StatsSection"
import SummarySection from "@components/SummarySection"
import PageLayout from "@layouts/PageLayout"
import homePage from "@pages/homePage"
import { useEffect } from "react"

import type { IPage } from "@typings/Page"


const HomePage: IPage = ({ pageData }) => {

  useEffect(() => {
    console.log(pageData)
  }, [pageData])

  return (
    <PageLayout {...pageData.layout}>
      <Hero {...pageData.hero} />
      <FeaturedSection />
      <ContactSection {...pageData.contactSection} />
    </PageLayout>
  )
}

export default HomePage

export async function getStaticProps() {

  return {
    props: {
      pageData: homePage.init()
    },
    revalidate: 5
  }
}

/*

      <FeaturedSection />
      <SummarySection />
      <ContentGrid />
      <DataSection />
      <SimpleFormSection />
      <StatsSection />
      <FeaturedMedia />
      <ImageMasonry />

      */