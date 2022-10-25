import FacadeService from "@services/facade"

const memberships = (store: []) => {

    const { memberships } = FacadeService().types

    return {

        getMemberships: () => {
            return store.filter((data) => {
                return memberships.predicate(data)
            }).map((data) => {
                return memberships.shape(data)
            })
        }

    }
}

export default memberships

