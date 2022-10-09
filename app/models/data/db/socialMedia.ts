//📱Social Media

import meta from "@configs/meta"

import NotionService from "@services/notion"

const socialMedia = () => {

    const { title: siteTitle } = meta()

    return {
        id: 'SocialMediaDatabase',
        version: `${siteTitle}: Social Media]@ ${Date.now()}`,
        getSocialMedia: (store) => {

            const { SOCIAL_MEDIA } = NotionService.db

            return store.filter((data) => {
                return SOCIAL_MEDIA.predicate(data)
            }).map((data) => {
                return SOCIAL_MEDIA.shape(data)
            })
        }

    }
}

export default socialMedia

