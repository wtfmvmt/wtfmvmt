import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"

export async function getStaticProps() {

    const { getPage } = PageService()

    const page = await getPage("projects")

    return {
        page
    }
}

function ProjectsIndexPage() {

    return (
        <>

        </>
    )
}

ProjectsIndexPage.layout = PageLayout

export default ProjectsIndexPage