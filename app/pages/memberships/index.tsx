import ContactSection from "@components/ContactSection"
import FeaturedSection from "@components/FeaturedSection"
import Hero from "@components/Hero"
import ImageMasonry from "@components/ImageMasonry"
import SimpleFormSection from "@components/SimpleFormSection"
import StatsSection from "@components/StatsSection"
import SummarySection from "@components/SummarySection"

import PageLayout from "@layouts/PageLayout"
import PageService from "@services/pages"

import type { IPage } from "@typings/Page"
import type { ServerSidePageProps } from "@typings/Page"

import { useEffect } from "react"



const MembershipsIndexPage: IPage<ServerSidePageProps> = ({ page }) => {

  const { layout, id, version, } = page

  useEffect(() => {
    console.log(`[${id}@${version}] => `, page)
  }, [page, id, version])

  return (
    <PageLayout {...layout}>

    </PageLayout>
  )
}

export default MembershipsIndexPage

export async function getServerSideProps() {

  const { getPage } = PageService

  const page = await getPage("memberships")

  return {
    props: {
      page
    }
  }
}
