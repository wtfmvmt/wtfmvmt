import Meta from "@includes/Meta"

const RootLayout = ({ children }) => {

    return (
        <>
        <Meta/>
            {children}
        </>
    )
}

export default RootLayout