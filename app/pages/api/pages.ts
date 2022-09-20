// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import HomePageDB from '@models/data/pages/HomePageDB'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const data = await HomePageDB.init()
    res.status(200).json(data)
}
