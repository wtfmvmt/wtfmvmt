
import search from "@configs/search"

const header = () => {

    const headerObject = {
        search: [...search().collections],
        banner: {
            countdown: 10000000000,
            messages: ["Attend our Interest Meeting 09/06", "This site is under construction."]
        },
        favicon: {
            src: '/assets/images/logo-transparent.png',
            url: '/'
        },
    }

    return { ...headerObject } ?? null
}


export default header