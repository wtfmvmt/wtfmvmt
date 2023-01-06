import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {

    if (req.query.secret !== process.env.REVALIDATION_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    try {
        await res.revalidate("/");
        return res.json({
            revalidated: true
        });
    } catch (err) {
        return res.status(500).send('Error revalidating');
    }
}
