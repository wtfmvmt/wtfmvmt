import type { NextApiRequest, NextApiResponse } from 'next'
import FacadeService from "@services/facade"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200)
}
