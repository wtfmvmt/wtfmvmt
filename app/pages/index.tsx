import ContactSection from "@components/ContactSection"
import FeaturedSection from "@components/FeaturedSection"
import Hero from "@components/Hero"
import ImageMasonry from "@components/ImageMasonry"
import SimpleFormSection from "@components/SimpleFormSection"
import StatsSection from "@components/StatsSection"
import SummarySection from "@components/SummarySection"
import LogoArray from "@components/LogoArray"
import PageLayout from "@layouts/PageLayout"
import PageService from "@services/pages"

import { useEffect } from "react"
import { NextPage } from "next"

export type PageProps = {
  page: {
    id?: string,
    version?: string,
    layout?: any,
    data?: any
  }
}

const HomePage: NextPage<PageProps> = ({ page }) => {

  const { layout, id, version,
    data: { hero, summarySection, featuredSection, statsSection, logoArray, contactSection, imageMasonry } } = page

  useEffect(() => {
    console.log(`[${id}@${version}] => `, page)
  }, [page, id, version])

  return (
    <PageLayout {...layout}>
      <Hero {...hero} />
      <LogoArray {...logoArray} />
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
