const PageService = {

    getPage: async (pageKey: string) => {
        const isProduction = process.env.NODE_ENV === "production"
        return await fetch(`${isProduction ? "https://wtfmvmt.com/api/pages" : `http://localhost:${process.env.PORT || 3000}/api/pages`}`, {
            method: 'POST',
            body: JSON.stringify({ page: `${pageKey ? pageKey : "home"}` }),
        }).then(res => res.json())

    },

    resolveDataPage: async (db) => {
        const query = Object.keys(db).map(async (key) => {
            Object.keys(db[key]).map(async (index) => {
                if (typeof db[key][index] === "function") ({
                    [db[key][index]]: await db[key][index]()
                })
            })
        })

        const data = Object.assign({ ...query }, db)


        return { ...data }
    }
}

export default PageService