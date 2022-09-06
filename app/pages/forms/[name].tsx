import RootLayout from "@layouts/RootLayout"
import FormMaster from "@views/components/FormMaster"

const FormPage = ({ formData }) => {

    return (
        <RootLayout metaData={{ pageTitle: 'Forms ' }}>
            <FormMaster />
        </RootLayout>

    )
}

export default FormPage

export async function getStaticProps() {

    const data = [
        {
            name: 'intro',
            fields: []
        }
    ]



    return {
        props: {
            formData: data
        }
    }
}

export async function getStaticPaths() {

    return {
        paths: ["/artists"],
        fallback: true
    }
}