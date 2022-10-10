
import PageLayout from "@layouts/PageLayout"
import PageService from "@services/pages"

import type { IPage, ServerSidePageProps } from "@typings/Page"

import { useEffect } from "react"



const RSVPPage: IPage<ServerSidePageProps> = ({ page }) => {

  const { layout, id, version } = page

  useEffect(() => {
    console.log(`[${id}@${version}] => `, page)
  }, [page, id, version])

  return (
    <PageLayout {...layout}>

    </PageLayout>
  )
}

export default RSVPPage

export async function getServerSideProps() {

  const { getPage } = PageService

  const page = await getPage("rsvp")

  return {
    props: {
      page
    }
  }
}
