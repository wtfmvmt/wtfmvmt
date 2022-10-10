import Meta from "@includes/Meta"
import CssBaseLine from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import React from "react"

const RootLayout = ({ children, metaData }) => {

    const ContainerSx = {
        margin: 'auto',
        padding: 0,
        width: '100vw'
    }

    return (

        <Box sx={ContainerSx}>
            <CssBaseLine />
            <Meta props={metaData} />
            {children}
        </Box>


    )
}

export default React.memo(RootLayout)