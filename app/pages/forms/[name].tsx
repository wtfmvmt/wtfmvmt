import ContactSection from "@components/ContactSection"
import Hero from "@components/Hero"
import PageService from "@services/pages"
import type { IPage, ServerSidePageProps } from "@typings/Page"




const FormPage: IPage<ServerSidePageProps> = ({ page }) => {

  const { layout, id, version, data:
    { hero, summarySection, featuredSection, statsSection, contactSection, imageMasonry } } = page



  return (
    <>
      <Hero {...hero} />
      <ContactSection {...contactSection} />
    </>
  )
}

export default FormPage

export async function getServerSideProps() {

  const { getPage } = PageService

  const page = await getPage("home")

  return {
    props: {
      page
    }
  }
}
