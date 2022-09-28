import meta from "@configs/meta"

const footer = () => {

    const { impressum, links, socials, copyright, logo } = meta()

    return {
        impressum,
        links,
        copyright,
        socials,
        logo,
    }
}

export default footer
