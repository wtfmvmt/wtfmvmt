import ContactSection from "@components/ContactSection"
import FeaturedSection from "@components/FeaturedSection"
import Hero from "@components/Hero"
import ImageMasonry from "@components/ImageMasonry"
import SimpleFormSection from "@components/SimpleFormSection"
import StatsSection from "@components/StatsSection"
import SummarySection from "@components/SummarySection"

import PageLayout from "@layouts/PageLayout"
import PageService from "@services/pages"

import type { IPage } from "@typings/Page"
import type { StaticPage } from "@typings/StaticPage"

import { useEffect } from "react"



const HomePage: IPage<StaticPage> = ({ page }) => {

  useEffect(() => {
    console.log(`[Data] => `, page)
  }, [page])

  return (
    <PageLayout {...page.layout}>
      <Hero {...page.data.hero} />
      <FeaturedSection {...page.data.featuredSection} />
      <SummarySection {...page.data.summarySection} />
      <SimpleFormSection {...page.data.simpleFormSection} />
      <StatsSection {...page.data.statsSection} />
      <ImageMasonry {...page.data.imageMasonry} />
      <ContactSection {...page.data.contactSection} />
    </PageLayout>
  )
}

export default HomePage

export async function getServerSideProps() {

  const { getPage } = PageService

  const page = await getPage("home")

  return {
    props: {
      page: page,
    }
  }
}
