import type { NextApiRequest, NextApiResponse } from 'next'
import NotionService from '@services/notion'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    const data = await NotionService.loadAllMedia()
    res.status(200).json(data)
}
