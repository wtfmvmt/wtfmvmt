import type { IPage } from "@typings/Page"

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
import getDataPage from "@services/getDataPage"
import { useEffect } from "react"
import homePage from "@pages/homePage"

const HomePage: IPage = ({ pageData }) => {

  useEffect(() => {
    console.log(pageData)
  }, [pageData])

  return (
    <PageLayout {...pageData.layout}>
      <Hero {...pageData.hero} />
      <SummarySection />
      <ContentGrid />
      <DataSection/>
      <ContactSection />
    </PageLayout>
  )
}

export default HomePage

export async function getStaticProps() {

  return {
    props: {
      pageData: homePage.init()
    },
    revalidate: 6
  }
}