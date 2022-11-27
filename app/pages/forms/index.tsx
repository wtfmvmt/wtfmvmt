import ContactSection from "@components/ContactSection"
import Hero from "@components/Hero"
import PageService from "@controllers/services/page"
import type { IPage, ServerSidePageProps } from "@typings/Page"


const FormsIndexPage: IPage<ServerSidePageProps> = ({ page: { data } }) => {

  const { hero, contactSection } = data

  return (
    <>
      <Hero {...hero} />
      <ContactSection {...contactSection} />
    </>
  )
}

export default FormsIndexPage

export async function getStaticProps() {

  const { getPage } = PageService()

  const page = await getPage("home")

  return {
    props: {
      page
    },
    revalidate: 10
  }
}
