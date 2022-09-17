import type { NextApiRequest, NextApiResponse } from 'next'
import FacadeService from "@controllers/services/notion"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200)
}
