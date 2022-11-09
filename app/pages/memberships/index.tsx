
import PageService from "@services/pages"
import type { IPage, ServerSidePageProps } from "@typings/Page"
import TableRow from "@components/TableRow"


const MembershipsIndexPage: IPage<ServerSidePageProps> = () => {

  return (
    <>
      <TableRow />
    </>
  )
}

export default MembershipsIndexPage

export async function getStaticProps() {

  const { getPage } = PageService

  const page = getPage("home")

  return {
    props: {
      page
    },
    revalidate: 10
  }
}
