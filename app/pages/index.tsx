import type { IPage } from "@typings/Page"

import PageLayout from "@layouts/PageLayout"
import ContactSection from "@components/ContactSection"
import ContentGrid from "@components/ContentGrid"
import DataSection from "@components/DataSection"
import FeaturedImages from "@components/FeaturedImages"
import FeaturedMedia from "@components/FeaturedMedia"
import FeaturedSection from "@components/FeaturedSection"
import ImageMasonry from "@components/ImageMasonry/ImageMasonry"
import SimpleFormSection from "@components/SimpleFormSection"
import StatsSection from "@components/StatsSection"
import SummarySection from "@components/SummarySection"
import Hero from "@components/Hero"
import { useEffect } from "react"

const HomePage: IPage = () => {


  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/coming-soon"
    }, 300000)
  }, [])

  return (
    <PageLayout metaData={{
      pageTitle: 'HQ'
    }}>
      <Hero actionLinks={{
        heading: 'Sign Up Forms',
        links: [
          {
            name: 'For Artists',
            url: 'forms/artists'
          },
          {
            name: 'For Newbies',
            url: 'forms/newbies'
          },
          {
            name: 'For Investors',
            url: 'forms/investors'
          }
        ]

      }} />
      <FeaturedSection />
      <SummarySection />
      <SimpleFormSection />
      <FeaturedImages />
      <FeaturedMedia />
      <DataSection />
      <StatsSection />
      <ContentGrid />
      <ImageMasonry />
      <ContactSection />
    </PageLayout>

  )
}

export default HomePage
