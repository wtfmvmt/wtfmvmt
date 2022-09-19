import ContactSection from "@components/ContactSection"
import DataSection from "@components/DataSection"
import FeaturedMedia from "@components/FeaturedMedia"
import FeaturedSection from "@components/FeaturedSection"
import Hero from "@components/Hero"
import ImageMasonry from "@components/ImageMasonry"
import SimpleFormSection from "@components/SimpleFormSection"
import StatsSection from "@components/StatsSection"
import SummarySection from "@components/SummarySection"
import PageLayout from "@layouts/PageLayout"
import HomePageDB from "@pages/HomePageDB"
import Confetti from 'react-confetti'

import type { IPage } from "@typings/Page"
import type { StaticPage } from "@typings/StaticPage"
import { useEffect } from "react"

import { useWindowSize } from "react-use"

const configs = {
  revalidation: 3
}

const HomePage: IPage<StaticPage> = ({ pageData }) => {

  const { width, height } = useWindowSize()

  
  useEffect(() => {
    console.log(`[FacadeData] => `, pageData.test)
  }, [pageData])

  return (
    <PageLayout {...pageData.layout}>
      <Confetti width={width} height={height} />
      <Hero {...pageData.hero} />
      <FeaturedSection {...pageData.featuredSection} />
      <SummarySection {...pageData.summarySection} />
      <SimpleFormSection {...pageData.simpleFormSection} />
      <StatsSection {...pageData.statsSection} />
      <ImageMasonry {...pageData.imageMasonry} />
      <ContactSection {...pageData.contactSection} />
    </PageLayout>
  )
}

export default HomePage

export async function getServerSideProps() {

  const pageData = await HomePageDB.init().then((data) => data)

  return {
    props: {
      pageData: pageData,
     

    }
  }
}

