import type { IPage } from "@typings/Page"

import PageLayout from "@layouts/PageLayout"

import Footer from "@components/Footer"
import ContactSection from "@components/ContactSection"
import ImageMasonry from "@components/ImageMasonry/ImageMasonry"
import ContentGrid from "@components/ContentGrid"
import FeaturedSection from "@components/FeaturedSection"
import SummarySection from "@components/SummarySection"
import SimpleFormSection from "@components/SimpleFormSection"
import FeaturedImages from "@components/FeaturedImages"
import FeaturedMedia from "@components/FeaturedMedia"
import DataSection from "@components/DataSection"
import StatsSection from "@components/StatsSection"
import { useEffect } from "react"


const HomePage: IPage = () => {

  useEffect(() => {
    window.location.href = "/coming-soon"
  }, [])

  return (
    <PageLayout>
      <Header />
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
