import type { NextApiRequest, NextApiResponse } from 'next'
import meta from "@configs/meta"

import NotionService from '@services/notion'
import PageService from "@services/pages"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    const { getPage } = PageService
    
    const pageData = await getPage("home")

    res.status(200).json(pageData)

}