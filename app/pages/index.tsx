import type { IPage } from "@typings/Page"

import ContactSection from "@components/ContactSection"
import ContentGrid from "@components/ContentGrid"
import DataSection from "@components/DataSection"
import FeaturedImages from "@components/FeaturedImages"
import FeaturedMedia from "@components/FeaturedMedia"
import FeaturedSection from "@components/FeaturedSection"
import Hero from "@components/Hero"
import ImageMasonry from "@components/ImageMasonry/ImageMasonry"
import SimpleFormSection from "@components/SimpleFormSection"
import StatsSection from "@components/StatsSection"
import SummarySection from "@components/SummarySection"
import PageLayout from "@layouts/PageLayout"
import PaletteIcon from '@mui/icons-material/Palette'
import { useEffect } from "react"
import SchoolIcon from '@mui/icons-material/School';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import StorefrontIcon from '@mui/icons-material/Storefront';
const HomePage: IPage = () => {


  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/coming-soon"
    }, 300000)
  }, [])

  return (
    <PageLayout metaData={{
      pageTitle: 'HQ'
    }}>
      <Hero actionLinks={{
        heading: 'Sign Up Forms',
        links: [
          {
            name: 'For Newbies',
            url: 'forms/newbies',
            icon: <ChildCareIcon />
          },
          {
            name: 'For Artists',
            url: 'forms/artists',
            icon: <PaletteIcon />
          },
          {
            name: 'For Builders',
            url: 'forms/newbies',
            icon: <BuildCircleIcon />
          },
          {
            name: 'For Vendors',
            url: 'forms/investors',
            icon: <StorefrontIcon />
          },
          {
            name: 'For Mentors',
            url: 'forms/newbies',
            icon: <SchoolIcon />
          },
        ]

      }} />
      <FeaturedSection />
      <SummarySection />
      <SimpleFormSection />
      <FeaturedImages />
      <FeaturedMedia />
      <DataSection />
      <StatsSection />
      <ContentGrid />
      <ImageMasonry />
      <ContactSection />
    </PageLayout>

  )
}

export default HomePage
