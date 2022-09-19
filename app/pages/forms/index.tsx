import PageLayout from "@layouts/PageLayout"

import formsPage from "@pages/formsPage"
import FormMaster from "@views/components/FormMaster"

const IndexFormsPage = ({ pageData }) => {

    return (
        <PageLayout {...pageData.layout}>
            <FormMaster />

        </PageLayout>

    )
}


export async function getStaticProps() {

    return {
        props: {
            pageData: formsPage.init()
        }
    }
}


export default IndexFormsPage