import type { NextPage } from 'next'
import PageLayout from "@layouts/PageLayout"
import Header from "@components/Header"
import Footer from "@components/Footer"
import ContactSection from "@components/ContactSection"
import ImageMasonry from "@components/ImageMasonry/ImageMasonry"
import ContentGrid from '@components/ContentGrid'
import FeaturedSection from "@components/FeaturedSection"
import SummarySection from "@components/SummarySection"
import SimpleFormSection from '@views/components/SimpleFormSection'
import FeaturedImages from '@views/components/FeaturedImages'
import FeaturedMedia from '@views/components/FeaturedMedia'
import DataSection from "@views/components/DataSection"
import StatsSection from '@views/components/StatsSection'




const HomePage: NextPage = () => {

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
      <Footer />
    </PageLayout>

  )
}

export default HomePage
