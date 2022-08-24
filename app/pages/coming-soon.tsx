import FormSection from "@components/FormSection";
import PageLayout from "@layouts/PageLayout";
import type { IPage } from "@typings/Page";
import comingSoonPage from "@models/data/pages/comingSoonPage";

const ComingSoonPage: IPage = () => {

    return (
        <PageLayout metaData={{
            pageTitle: 'Coming Soon'
        }}>
            <FormSection {...comingSoonPage.formSection} />
        </PageLayout>
    )
}

export default ComingSoonPage




