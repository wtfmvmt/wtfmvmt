
import PageService from "@services/pages"
import type { IPage, ServerSidePageProps } from "@typings/Page"

const PartnersIndexPage: IPage<ServerSidePageProps> = ({ page: { data } }) => {

  return (
    <>

    </>
  )
}

export default PartnersIndexPage



export async function getStaticProps() {

  const { getPage } = PageService

  const page = await getPage("home")

  return {
    props: {
      page
    },
    revalidate: 1
  }
}
