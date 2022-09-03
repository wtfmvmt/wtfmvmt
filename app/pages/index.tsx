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



const HomePage: IPage = ({ pageData }) => {

  useEffect(() => {
    console.log(pageData)
  }, [pageData])

  return (
    <PageLayout {...pageData.Layout}>
      <Hero {...pageData.Hero} />
      <FeaturedSection {...pageData.FeaturedSection} />
      <SummarySection {...pageData.SummarySection} />
      <SimpleFormSection {...pageData.SimpleFormSection} />
      <FeaturedMedia {...pageData.FeaturedMedia} />
      <DataSection {...pageData.DataSection} />
      <StatsSection {...pageData.StatsSection} />
      <ContentGrid {...pageData.ContentGrid} />
      <ImageMasonry {...pageData.ImageMasonry} />
      <ContactSection {...pageData.ContactSection} />
    </PageLayout>
  )
}

export default HomePage

export async function getStaticProps() {

  let pageQuery = null;

  getDataPage().then(data => {
    pageQuery = data
  }).catch(err => {
    console.log(err)
  })

  return {
    props: {
      pageData: pageQuery
    },
    revalidate: 6
  }
}