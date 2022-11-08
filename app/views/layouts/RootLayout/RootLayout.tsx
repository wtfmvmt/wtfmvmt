import Meta from "@includes/Meta"
import CssBaseLine from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import React from "react"
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
import ContainerSx from "@styles/Container"

const analytics = Analytics({
    app: 'wtfmvmt',
    plugins: [
        googleAnalytics({
            measurementIds: ['UA-1234567']
        })
    ]
})

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