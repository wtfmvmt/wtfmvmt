import type { NextApiRequest, NextApiResponse } from 'next'
import NotionService from "@services/notion"
import meta from "@db/meta"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    const { getCentralDogma } = NotionService()

    const data = await getCentralDogma()

    const { getFavicon } = meta(data)

    res.status(200).json(data)
}
