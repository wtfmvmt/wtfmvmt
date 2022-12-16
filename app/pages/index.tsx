import ColumnList from "@components/ColumnList"
import Contact from "@views/components/Contact"
import Featured from "@components/Featured"
import Hero from "@components/Hero"
import ImageMasonry from "@components/ImageMasonry"
import LogoArray from "@components/LogoArray"
import RowList from "@components/RowList"
import StatsRow from "@components/StatsRow"
import Summary from "@components/Summary"
import TableRow from "@components/TableRow"
import PageService from "@controllers/services/page"
import PageLayout from "@layouts/PageLayout"

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


  const { hero, summary, rowList, statsRow, featured, columnList, tableRow, logoArray, contact, imageMasonry } = page?.data ?? null

  return (
    <>
      <Hero {...hero} />
      <Featured {...featured} />
      <Summary {...summary} />
      <LogoArray {...logoArray} />
      <StatsRow {...statsRow} />
      <RowList {...rowList} />
      <TableRow {...tableRow} />
      <ColumnList {...columnList} />
      <ImageMasonry {...imageMasonry} />
      <Contact {...contact} />
    </>
  )


}

HomePage.layout = PageLayout

export default HomePage

