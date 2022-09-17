// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import homePage from "@models/data/pages/HomePageDB"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const data = homePage.init()

  res.status(200)
  res.json(data)
}
