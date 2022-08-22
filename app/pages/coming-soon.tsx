import FormSection from "@components/FormSection";
import PageLayout from "@layouts/PageLayout";
import type { IPage } from "@typings/Page";
import comingSoonPage from "@models/data/pages/comingSoonPage";

const ComingSoonPage: IPage = () => {

    return (
        <PageLayout>
            <FormSection {...comingSoonPage.formSection} />
        </PageLayout>
    )
}

export default ComingSoonPage




