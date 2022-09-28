import ContactSection from "@components/ContactSection"
import FeaturedSection from "@components/FeaturedSection"
import Hero from "@components/Hero"
import ImageMasonry from "@components/ImageMasonry"
import SimpleFormSection from "@components/SimpleFormSection"
import StatsSection from "@components/StatsSection"
import SummarySection from "@components/SummarySection"

import PageService from "@services/pages"
import PageLayout from "@layouts/PageLayout"

import type { IPage, StaticPage } from "@typings/Page"

import { useEffect } from "react"
import meta from "@configs/meta"


const VisionPage: IPage<StaticPage> = ({ page }) => {

  const { title: siteTitle } = meta()

  useEffect(() => {
    console.log(`[${siteTitle}: Application Version: ${page.version}] => ✅Running `, page)
  }, [page, siteTitle])

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

export default VisionPage

export async function getStaticProps() {

  const { getPage } = PageService

  const { page } = await getPage("home")

  return {
    props: {
      page: page,
    }
  }
}
