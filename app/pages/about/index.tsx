import Hero from "@components/Hero"
import PageService from "@controllers/services/page"
import type { PageProps } from "@typings/Page"
import { NextPage } from "next"


const AboutIndexPage: NextPage<PageProps> = ({ page: { data } }) => {

    const { hero } = data

    return (
        <>
            <Hero {...hero} />
        </>
    )
}



export default AboutIndexPage

export async function getStaticProps() {

    const { getPage } = PageService()

    const page = await getPage("home")

    return {
        props: {
            page
        },

        revalidate: 15
    }
}
