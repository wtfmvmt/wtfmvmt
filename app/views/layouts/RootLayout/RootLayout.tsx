import Meta from "@includes/Meta"
import CssBaseLine from "@mui/material/CssBaseline"

const RootLayout = ({ children, metaData }) => {

    return (
        <>
            <CssBaseLine />
            <Meta {...metaData} />
            {children}
        </>
    )
}

export default RootLayout