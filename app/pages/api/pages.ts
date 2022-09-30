import PageService from "@services/pages"

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    const { resolveQuery, loadPage, getLayout } = PageService.methods

    const pageKey = JSON.stringify(req.body.pageKey) || "home";

    const pageData = await resolveQuery(loadPage(pageKey).query)

    const result = {
        version: Date.now(),
        layout: getLayout(),
        data: pageData,
    }

    res.status(200).json(result)

}
