
import { ILayout } from "@typings/Layout"
import Meta from "@includes/Meta"
import Box from "@mui/material/Box"
import Footer from "@components/Footer"
import footer from "@configs/footer"


const RootLayout = ({ children, metaData }: ILayout) => {

  return (
    <Box>
      <Meta {...metaData} />
      {children}
      <Footer {...footer} />
    </Box>
  )
}
export default RootLayout