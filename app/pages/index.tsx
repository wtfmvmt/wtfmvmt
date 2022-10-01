import ContactSection from "@components/ContactSection"
import FeaturedSection from "@components/FeaturedSection"
import Hero from "@components/Hero"
import ImageMasonry from "@components/ImageMasonry"
import SimpleFormSection from "@components/SimpleFormSection"
import StatsSection from "@components/StatsSection"
import SummarySection from "@components/SummarySection"

import PageService from "@services/pages"
import PageLayout from "@layouts/PageLayout"

import type { IPage } from "@typings/Page"

import meta from "@configs/meta"

import type { StaticPage } from "@typings/StaticPage"

import { useEffect } from "react"



const HomePage: IPage<StaticPage> = ({ page }) => {

  const { layout, version, data: { hero, summarySection, featuredSection, statsSection, contactSection, imageMasonry } } = page
  const { title: siteTitle } = meta()

  useEffect(() => {
    console.log(`[${siteTitle}@${version}] => `, page)
  }, [page, siteTitle, version])

  return (
    <PageLayout {...layout}>
      <Hero {...hero} />
      <FeaturedSection {...featuredSection} />
      <SummarySection {...summarySection} />
      <SimpleFormSection {...statsSection} />
      <StatsSection {...statsSection} />
      <ImageMasonry {...imageMasonry} />
      <ContactSection {...contactSection} />
    </PageLayout>
  )
}

export default HomePage

export async function getServerSideProps() {

  const { getPage } = PageService

  const page = await getPage("home")

  return {
    props: {
      page
    }
  }
}
