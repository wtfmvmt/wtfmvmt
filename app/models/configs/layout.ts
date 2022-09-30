import header from "@configs/header"
import footer from "@configs/footer"

const layout = () => {

<<<<<<< HEAD
const layout = () => {
    const layoutObject = {
        header: header(),
        footer: footer(),
    }


    return layoutObject ?? null
=======
    const [headerData, footerData] = [header(), footer()]

    return {
        header: headerData,
        footer: footerData,
    }
>>>>>>> main
}
export default layout