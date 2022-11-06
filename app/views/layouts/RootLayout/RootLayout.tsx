import Meta from "@includes/Meta"
import CssBaseLine from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import React from "react"
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

const analytics = Analytics({
    app: 'awesome-app',
    plugins: [
        googleAnalytics({
            measurementIds: ['UA-1234567']
        })
    ]
})

const RootLayout = ({ children, metaData }) => {

    const ContainerSx = {
        margin: 'auto',
        padding: 0,
        width: '100vw'
    }

    return (

        <Box sx={ContainerSx}>
            <CssBaseLine />
            <Meta {...metaData} />
            {children}
        </Box>


    )
}

export default React.memo(RootLayout)