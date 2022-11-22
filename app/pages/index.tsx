import ContactSection from "@components/ContactSection"
import FeaturedSection from "@views/components/Featured"
import Hero from "@components/Hero"
import ImageMasonry from "@components/ImageMasonry"
import LogoArray from "@components/LogoArray"
import RowList from "@components/RowList"
import StatsRow from "@components/StatsRow"
import SummarySection from "@components/SummarySection"
import TableRow from "@components/TableRow"
import PageService from "@services/pages"
import type { PageProps } from "@typings/Page"
import ColumnList from "@views/components/ColumnList"
import { NextPage } from "next"


const HomePage: NextPage<PageProps> = ({ page: { data } }) => {

  const { hero, summarySection, featuredSection, columnList, tableRow, logoArray, contactSection, imageMasonry } = data

  return (
    <>
      <Hero {...hero} />
      <FeaturedSection {...featuredSection} />
      <SummarySection {...summarySection} />
      <LogoArray {...logoArray} />
      <StatsRow />
      <RowList />
      <TableRow {...tableRow} />
      <ColumnList {...columnList} />
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
    revalidate: 2
  }
}
