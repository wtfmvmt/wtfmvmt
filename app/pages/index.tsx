import ColumnLists from "@components/ColumnLists"
import ContactSection from "@components/ContactSection"
import FeaturedSection from "@components/FeaturedSection"
import Hero from "@components/Hero"
import ImageMasonry from "@components/ImageMasonry"
import LogoArray from "@components/LogoArray"
import SimpleFormSection from "@components/SimpleFormSection"
import SummarySection from "@components/SummarySection"
import PageService from "@services/pages"
import type { PageProps } from "@typings/Page"
import RowList from "@views/components/RowList"
import StatsRow from "@views/components/StatsRow"
import TableRow from "@views/components/TableRow"
import { NextPage } from "next"


const HomePage: NextPage<PageProps> = ({ page: { data } }) => {

  const { hero, summarySection, featuredSection, tableRow, statsSection, logoArray, contactSection, imageMasonry } = data ?? null


  console.log(`[WTFMVMT: ${JSON.stringify(data)}]`)
  return (
    <>
      <Hero {...hero} />
      <FeaturedSection {...featuredSection} />
      <SummarySection {...summarySection} />
      <LogoArray {...logoArray} />
      <StatsRow />
      <RowList />
      <TableRow {...tableRow} />
      <ColumnLists />
      <ImageMasonry {...imageMasonry} />
      <ContactSection {...contactSection} />
    </>
  )
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
