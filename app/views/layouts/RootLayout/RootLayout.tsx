import React from "react"
import Meta from "@includes/Meta"
import CssBaseLine from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"

import { AppContainerSx } from "@styles/Container"

const RootLayout = ({ children, metaData }) => {

    return (

        <Box sx={{ ...AppContainerSx() }}>
            <CssBaseLine />
            <Meta {...metaData} />
            {children}
        </Box>


    )
}

export default React.memo(RootLayout)