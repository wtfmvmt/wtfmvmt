import header from "@configs/header"
import footer from "@configs/footer"


const layout = () => {
    const layoutObject = {
        header: header(),
        footer: footer(),
    }


    return layoutObject ?? null
}

export default layout