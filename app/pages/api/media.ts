import type { NextApiRequest, NextApiResponse } from 'next'
import NotionService from "@services/notion"
import meta from "@db/meta"
import media from "@db/media"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    const { getCentralDogma } = NotionService()

    const data = await getCentralDogma()

    const mediaResponse = media(data)

  

    res.status(200).json(mediaResponse.db.data)
}
