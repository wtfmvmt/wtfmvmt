// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from "@notionhq/client"

const Notion = new Client({
    auth: process.env.FACADE_API_KEY,
})


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {


    res.status(200)
    res.json(data)
}
