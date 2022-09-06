import Meta from "@includes/Meta"
import CssBaseLine from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"

const RootLayout = ({ children, metaData }) => {

    return (

        <>
            <Meta {...metaData} />
            {children}
        </>


    )
}

export default RootLayout