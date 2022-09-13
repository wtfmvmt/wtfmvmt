import PageLayout from "@layouts/PageLayout"
import FormMaster from "@components/FormMaster"
import formPages from "@pages/formPages"

const FormPage = ({ formData }) => {

    return (
        <PageLayout {...formData.layout}>
            <FormMaster {...formData.form} />
        </PageLayout>

    )
}

export default FormPage

export async function getStaticProps({ params }) {

    const formData = formPages.init()
    const form = formData.forms.find(form => form.name === params.name)

    return {
        props: {
            formData: {
                layout: formData.layout,
                form: form
            }
        },
        revalidate: 5
    }
}



export async function getStaticPaths() {

    const formData = formPages.init()
    const paths = formData.forms.map((form) => ({ params: { name: form.name } }))

    return {
        paths: paths,
        fallback: false,
    }
}