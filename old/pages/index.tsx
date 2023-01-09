import ColumnList from "@components/ColumnList"
import Featured from "@components/Featured"
import Hero from "@components/Hero"
import ImageMasonry from "@components/ImageMasonry"
import LogoArray from "@components/LogoArray"
import StatsRow from "@components/StatsRow"
import Summary from "@components/Summary"
import TableRow from "@components/TableRow"
import PageLayout from "@layouts/PageLayout"
import FacadeService from "@services/facade"
import { pages as pagesUtils } from "@utils/index"

export async function getStaticProps() {

  const { page: { getPage } } = FacadeService().services

  const { setPageProps } = pagesUtils()

  const page = await getPage("home")

  return setPageProps({ pageData: page, revalidate: 1 })
}


const HomePage = ({ page }) => {

  const { getPageProps } = pagesUtils()

  const { hero, summary, statsRow, featured } = getPageProps(page)

  const { columnList, tableRow, logoArray, imageMasonry } = getPageProps(page)

  return (
    <>
      <Hero {...hero} />
      <Featured {...featured} />
      <Summary {...summary} />
      <LogoArray {...logoArray} />
      <StatsRow {...statsRow} />
      <TableRow {...tableRow} />
      <ColumnList {...columnList} />
      <ImageMasonry {...imageMasonry} />
    </>
  )
}

HomePage.layout = PageLayout

export default HomePage

