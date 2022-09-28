import search from "@configs/search"
import images from "@configs/images"
import links from "@configs/links"

const header = () => {

    const searchParams = search()

    const homePageRelative = links().find((link) => link.name === "Home").url
    const siteLogo = images().find(image => image.id === "logo-transparent")

    return {
        search: searchParams,
        banner: {
            countdown: 10000000000,
            messages: ["Attend our Interest Meeting 09/06", "This site is under construction."]
        },
        favicon: {
            src: siteLogo.src,
            url: homePageRelative
        },
    }
}


export default header