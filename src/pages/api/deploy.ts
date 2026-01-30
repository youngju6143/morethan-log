import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end()
  }

  const password = req.body?.password
  if (!process.env.PASSWORD || password !== process.env.PASSWORD) {
    return res.status(401).json({ ok: false })
  }

  await fetch(process.env.VERCEL_DEPLOY_HOOK!, {
    method: "POST",
  })

  return res.status(200).json({ ok: true })
}
