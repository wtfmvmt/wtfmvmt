import PageLayout from "@layouts/PageLayout"
import FormMaster from "@views/components/FormMaster"
import forms from "@pages/forms"

const FormPage = ({ formData }) => {

    return (
        <PageLayout {...formData.layout}>
            <FormMaster {...formData.form} />
        </PageLayout>

    )
}

export default FormPage

export async function getStaticProps({ params }) {

    const formData = forms.init()

    const form = formData.forms.find(form => form.name === params.name)

    return {
        props: {
            formData: {
                layout: formData.layout,
                form: form
            }
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