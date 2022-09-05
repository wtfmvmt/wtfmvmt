import Meta from "@includes/Meta"
import CssBaseLine from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"

const RootLayout = ({ children, metaData }) => {

    return (

        <Box>
            <Meta {...metaData} />
            {children}
        </Box>


    )
}

export default RootLayout