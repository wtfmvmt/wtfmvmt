
import PageService from "@services/pages"

import type { IPage, ServerSidePageProps } from "@typings/Page"

import { useEffect } from "react"



const PartnersIndexPage: IPage<ServerSidePageProps> = ({ page }) => {

  const { layout, id, version, data:
    { hero, summarySection, featuredSection, statsSection, contactSection, imageMasonry } } = page

  useEffect(() => {
    console.log(`[${id}@${version}] => `, page)
  }, [page, id, version])

  return (
    <>

    </>
  )
}

export default PartnersIndexPage

export async function getStaticProps() {

  const { getPage } = PageService

  const page = await getPage("partners")

  return {
    props: {
      page
    },
    revalidate: 10
  }
}
