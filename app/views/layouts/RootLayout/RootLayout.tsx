import Meta from "@includes/Meta"

const RootLayout = ({ children, metaData }) => {

    return (
        <>
        <Meta {...metaData}/>
            {children}
        </>
    )
}

export default RootLayout