export type Partner = {

}

const partners = () => {

    return {
        id: 'partnersDataBase',
        version: `[WTFMVMT: Partners]: ${Date.now()}`,
        predicates: {
isPartner: (data) => data?.properties?.Type?.select?.name === "🛍️Product"
        },
        filters: {
            getPartners: (store) => {
                return store.filter((data) => {
                    return isPartner(data)
                })
            }
        }
    }

}

export default partners