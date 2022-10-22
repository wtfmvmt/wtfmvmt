import FacadeService from "@controllers/services/facade"

const team = (store: []) => {

    const { team } = FacadeService().types

    return {
        getTeam: () => {
            return store.filter((data) => {
                return team.predicate(data)
            }).map((data) => {
                return team.shape(data)
            })
        }

    }
}

export default team

