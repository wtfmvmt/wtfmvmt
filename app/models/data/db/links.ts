import FacadeService from '@services/facade';

const links = (store) => {

    const linksObject = {

        getLinks: () => {
            const { links } = FacadeService().types
            return store.filter((data) => {
                return links.predicate(data)
            }).map((data) => {
                return links.shape(data)
            })
        },

        getSitePages: () => {
            const sitePageKey = "📃Site Page"
            return linksObject.getLinks().filter((link) => link.types.includes(sitePageKey))
        }

    }

    return { ...linksObject }
}

export default links

