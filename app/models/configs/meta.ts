import links from "@configs/links"



const meta = () => {

    const socialLinks = links().filter((link) => link.type === "social")
    const pageLinks = links().filter((link) => link.type === "internal")

    const metaObject = {
        title: 'WTFMVMT',
        description: ["The community developers for tomorrow.", 'We are a Community of Conscious Builders for the Future',],
        logo: {
            src: '/assets/images/logo-transparent.png'
        },
        impressum: "We are Conscious Creators for The Future",
        copyright: ['©️ 2022 WTFMVMT. All Rights Reserved.',
            'Powered by WTFMVMT Technologies & Love',
            'Site by Desirable Solutions'],
        email: 'info@wtfmvmt.com',
        links: pageLinks,
        socials: socialLinks
    }


    return { ...metaObject } ?? null
}

export default meta