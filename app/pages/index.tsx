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


const HomePage: IPage = () => {

  return (
    <PageLayout>
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
