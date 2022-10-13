import ColumnLists from "@components/ColumnLists"
import ContactSection from "@components/ContactSection"
import FeaturedSection from "@components/FeaturedSection"
import Hero from "@components/Hero"
import ImageMasonry from "@components/ImageMasonry"
import LogoArray from "@components/LogoArray"
import SimpleFormSection from "@components/SimpleFormSection"
import StatsSection from "@components/StatsSection"
import SummarySection from "@components/SummarySection"
import PageLayout from "@layouts/PageLayout"
import PageService from "@services/pages"
import type { PageProps } from "@typings/Page"
import RowList from "@views/components/RowList"
import StatsRow from "@views/components/StatsRow"
import { NextPage } from "next"
import { useEffect } from "react"

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
      <StatsRow />
      <SummarySection {...summarySection} />
      <SimpleFormSection {...statsSection} />
      <StatsSection {...statsSection} />
      <RowList />
      <ColumnLists />
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
