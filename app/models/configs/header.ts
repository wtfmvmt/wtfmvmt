<<<<<<< HEAD
import type { IConfiguration } from "@typings/Configuration"

const header = () => {

    const headerObject = {}

    return { ...headerObject } ?? null
=======
import search from "@configs/search"

const header = () => {

    return {
        search: [...search.collections],
        banner: {
            countdown: 10000000000,
            messages: ["Attend our Interest Meeting 09/06", "This site is under construction."]
        },
        favicon: {
            src: '/assets/images/logo-transparent.png',
            url: '/'
        },
    }
>>>>>>> main
}


export default header