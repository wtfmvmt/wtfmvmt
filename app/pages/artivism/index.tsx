
import PageLayout from "@layouts/PageLayout"
import PageService from "@controllers/services/page"

import type { IPage, ServerSidePageProps } from "@typings/Page"

import { useEffect } from "react"



const HomePage: IPage<ServerSidePageProps> = ({ page }) => {

  const { layout, id, version } = page

  useEffect(() => {
    console.log(`[${id}@${version}] => `, page)
  }, [page, id, version])

  return (
    <PageLayout {...layout}>

    </PageLayout>
  )
}

export default HomePage

export async function getServerSideProps() {

  const { getPage } = PageService()

  const page = await getPage("artivism")

  return {
    props: {
      page
    }
  }
}
