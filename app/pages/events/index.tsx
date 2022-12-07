<<<<<<< HEAD
import PageService from "@controllers/services/page"
import ContentSearch from "@views/components/ContentSearch"
=======
import ContactSection from "@components/ContactSection"
import FeaturedSection from "@components/FeaturedSection"
import Hero from "@components/Hero"
import ImageMasonry from "@components/ImageMasonry"
import SimpleFormSection from "@components/SimpleFormSection"
import StatsSection from "@components/StatsSection"
import SummarySection from "@components/SummarySection"

import PageService from "@services/pages"
>>>>>>> parent of f0f3051... [ Last known good build ]!

import type { IPage, ServerSidePageProps } from "@typings/Page"

import { useEffect } from "react"



const HomePage: IPage<ServerSidePageProps> = ({ page }) => {

  const { layout, id, version, data:
    { hero, summarySection, featuredSection, statsSection, contactSection, imageMasonry } } = page

  useEffect(() => {
    console.log(`[${id}@${version}] => `, page)
  }, [page, id, version])

  return (
    <>
      <Hero {...hero} />
      <FeaturedSection {...featuredSection} />
      <SummarySection {...summarySection} />
      <SimpleFormSection {...statsSection} />
      <StatsSection {...statsSection} />
      <ImageMasonry {...imageMasonry} />
      <ContactSection {...contactSection} />
    </>
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
