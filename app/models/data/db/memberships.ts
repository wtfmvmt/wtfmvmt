import FacadeService from "@services/facade"

export type DatabaseStore = any[]

const memberships = (store: DatabaseStore) => {

    const { types: { memberships } } = FacadeService()

    const membershipsObjects = {

        getMemberships: () => {
            return store
                .filter((data) => {
                    return memberships.predicate(data)
                })
                .map((data) => {
                    return memberships.shape(data)
                })
        }
    }

    return { ...membershipsObjects }
}


export default memberships

