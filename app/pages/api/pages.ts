import PageService from "@services/pages"
import pages from "@pages/index";

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    if (req.method !== 'POST') {
        res.status(405).send({ message: '[WTFMVMT: API] => Only POST requests allowed' })
        return
    }


    const { resolveDataPage } = PageService;

    const pageKey = JSON.parse(req.body).page

    const pageIndex = pages[pageKey]


    const pageData = await resolveDataPage(pageIndex)
   
    const result = {
        version: Date.now(),
        layout: pages.layout,
        data: pageData.data
    }

    res.status(200).json(result)

}
