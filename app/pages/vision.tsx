import Post from "@components/Post"
import PageLayout from "@views/layouts/PageLayout"
import visionPage from "@models/data/pages/visionPage"

export default function VisionPage({ pageData }) {

    return (
        <PageLayout {...pageData.layout}>
            <Post />
        </PageLayout>
    )
}


export async function getStaticProps() {

    return {
        props: {
            pageData: visionPage.init()
        }
    }
}