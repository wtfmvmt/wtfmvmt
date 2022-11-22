import ContactSection from "@components/ContactSection"
import FeaturedSection from "@views/components/Featured"
import Hero from "@components/Hero"
import ImageMasonry from "@components/ImageMasonry"
import SimpleFormSection from "@components/SimpleFormSection"
import StatsSection from "@components/StatsSection"
import SummarySection from "@components/SummarySection"

import PageLayout from "@layouts/PageLayout"
import PageService from "@services/pages"

import type { IPage } from "@typings/Page"
import type { ServerSidePageProps } from "@typings/Page"

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

      <ContactSection {...contactSection} />


    </>)
}

export default HomePage

export async function getStaticProps() {

  const { getPage } = PageService

  const page = await getPage("home")

  return {
    props: {
      page
    },
    revalidate: 10
  }
}
