import type { NextApiRequest, NextApiResponse } from 'next'
import NotionService from "@services/notion"


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    if (req.method !== 'GET') {
        res.send("Method not allowed")
    }

    const { getCentralDogma } = NotionService

    const data = (await getCentralDogma())

    res.status(200).json(data)
}
