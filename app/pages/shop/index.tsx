
import PageService from "@services/pages"

import type { IPage, ServerSidePageProps } from "@typings/Page"

import { useEffect } from "react"



const HomePage: IPage<ServerSidePageProps> = ({ page }) => {


  return (
    <>

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
