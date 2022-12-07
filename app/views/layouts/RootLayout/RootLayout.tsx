import Meta from "@includes/Meta"
import CssBaseLine from "@mui/material/CssBaseline"
import { memo } from "react"

const RootLayout = ({ children, metaData }) => {

    return (
        <div className="m-0">
            <CssBaseLine />
            <Meta {...metaData} />
            {children}
        </div>
    )
}

export default memo(RootLayout)