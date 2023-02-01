import PageService from "@services/page"

import NotionService from "@services/notion"


export async function get({ params, request }) {


    const { getCentralDogma } = NotionService()

    const DATA = await getCentralDogma()

    const { getPage } = PageService()

    const { data, layout } = await getPage(params.id ?? "home")
    return {
        body: JSON.stringify({
            data, layout
        }),
    };
}