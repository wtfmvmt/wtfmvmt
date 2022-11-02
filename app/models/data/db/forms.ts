import FacadeService from "@services/facade"

const forms = (store: []) => {

    const { forms } = FacadeService().types

    return {
        getForms: () => {
            return store.filter((data) => {
                return forms.predicate(data)
            }).map((data) => {
                return forms.shape(data)
            })
        }

    }
}

export default forms

