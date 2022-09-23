import PageService from "@services/pages"

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    
    const { resolveQuery, loadDataPage, loadLayout } = PageService.methods

    const pageKey = JSON.stringify(req.body.pageKey) || "home";

    const dataQuery = await resolveQuery(loadDataPage(pageKey).data)

    const pageData = {
        version: Date.now(),
        layout: loadLayout(),
        data: dataQuery,
    }

    res.status(200).json(pageData)

}
