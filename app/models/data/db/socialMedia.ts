//📱Social Media

import meta from "@configs/meta"

import NotionService from "@services/notion"

const socialMedia = () => {

    const { title: siteTitle } = meta()

    return {
        id: 'MembershipsDatabase',
        version: `${siteTitle}: Memberships]@ ${Date.now()}`,
        getSiteMeta: (store) => {

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

