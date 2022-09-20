const PageService = {

    getPage: async (pageKey: string) => {
        return await fetch(`${process.env.NODE_ENV === "production" ? "https://wtfmvmt.com/api/pages" : `http://localhost:${process.env.PORT || 3000}/api/pages`}`, {
            method: 'POST',
            body: JSON.stringify({ page: `${pageKey ? pageKey : "home"}` }),
        }).then(res => res.json())

    }
}

export default PageService