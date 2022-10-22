//📱Social Media

import FacadeService from "@controllers/services/facade"

const socialMedia = (store) => {

    const { social_media } = FacadeService().types

    return {

        getSocialMedia: () => {
            return store.filter((data) => {
                return social_media.predicate(data)
            }).map((data) => {
                return social_media.shape(data)
            })
        }

    }
}

export default socialMedia

