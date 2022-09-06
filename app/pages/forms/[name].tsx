import PageLayout from "@layouts/PageLayout"
import FormMaster from "@views/components/FormMaster"
import forms from "@pages/forms"

const FormPage = ({ formData }) => {

    return (
        <PageLayout {...formData.layout}>
            <FormMaster {...formData.forms} />
        </PageLayout>

    )
}

export default FormPage

export async function getStaticProps() {

    return {
        props: {
            formData: forms.init()
        }
    }
}



export async function getStaticPaths() {

    const formData = forms.init()

    const paths = formData.forms.map((form) => ({ params: { name: form.name } }))
    return {
        paths: paths,
        fallback: false,
    }
}