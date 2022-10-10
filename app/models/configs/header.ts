
import images from "@configs/images"
import links from "@configs/links"
import search from "@configs/search"


const header = ({ banner }) => {

    const collections = search().collections

    const logoTransparent = images().find((image) => image.id === 'logo-transparent')
    const homeLinkRelative = links().find((link) => link.name === 'Home')

    
    const headerObject = {
        search: collections,
        banner,
        favicon: {
            ...logoTransparent,
            url: homeLinkRelative.url
        },
    }

    return { ...headerObject } ?? null
}


export default header