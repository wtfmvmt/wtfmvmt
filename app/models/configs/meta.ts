import images from "@configs/images"
import links from "@configs/links"

import { LinkTypes } from "@models/typings/Links"

const meta = () => {

    const siteLogo = images().find(image => image.id === "logo-transparent") || {}
    const socialMediaLinks = links().find(link => link.type === LinkTypes.SOCIAL_MEDIA) || {}
    const siteLinks = links().find(link => link.name !== LinkTypes.SITE_PAGE) || {}

    return {
        title: 'WTFMVMT',
        url: 'https://wtfmvmt.com',
        description: ["The community developers for tomorrow.", 'We are a Community of Conscious Builders for the Future'],
        logo: siteLogo,
        impressum: "We are Conscious Creators for The Future",
        copyright: ['©️ 2022 WTFMVMT. All Rights Reserved.',
            'Powered by WTFMVMT Technologies & Love',
            'Site by Desirable Solutions'],
        phone: '321-350-5177',
        email: 'info@wtfmvmt.com',
        links: siteLinks,
        socials: socialMediaLinks
    }

}

export default meta