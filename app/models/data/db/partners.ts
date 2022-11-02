import FacadeService from "@services/facade"



const partners = (store: []) => {

    const { partners } = FacadeService().types

    const partnersObject = {
        getPartners: () => {
            return store.filter((data) => {
                return partners.predicate(data)
            }).map((data) => {
                return partners.shape(data)
            })
        }

    }

    return { ...partnersObject }
}

export default partners

