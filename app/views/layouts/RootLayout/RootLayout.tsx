import Meta from "@includes/Meta"
import Box from "@mui/material/Box"
import CssBaseLine from "@mui/material/CssBaseline"
import React from "react"
import ContainerSx from "@styles/Container"

const RootLayout = ({ children, metaData }) => {

    return (
        <Box sx={ContainerSx}>
            <CssBaseLine />
            <Meta {...metaData} />
            {children}
        </Box>
    )
}

export default React.memo(RootLayout)