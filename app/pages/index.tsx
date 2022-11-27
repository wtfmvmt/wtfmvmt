/* eslint-disable react/display-name */
import ContactSection from "@components/ContactSection"
import Hero from "@components/Hero"
import ImageMasonry from "@components/ImageMasonry"
import LogoArray from "@components/LogoArray"
import RowList from "@components/RowList"
import StatsRow from "@components/StatsRow"
import SummarySection from "@components/SummarySection"
import TableRow from "@components/TableRow"
import PageService from "@controllers/services/page"
import ColumnList from "@views/components/ColumnList"
import FeaturedSection from "@views/components/Featured"
import PageLayout from "@views/layouts/PageLayout"



export async function getStaticProps() {

  const { getPage } = PageService()
  
  const page = await getPage("home")

  return {
    props: {
      page
    },
    revalidate: 1
  }
}


const HomePage = ({ page }) => {


  const { hero, summarySection, featuredSection, columnList, tableRow, logoArray, contactSection, imageMasonry } = page?.data ?? null

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

HomePage.layout = { PageLayout }

export default HomePage

