import PageService from "@services/pages"

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    const { getPage } = PageService

    const pageData = await getPage("home")


    res.status(200).json(pageData)

}
