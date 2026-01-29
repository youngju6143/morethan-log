import fs from "fs"
import fetch from "node-fetch"

const cachePath = ".notionsync/published.json"

const prev = new Set(JSON.parse(fs.readFileSync(cachePath, "utf8")).pageIds)

const res = await fetch(
  `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      "Notion-Version": "2025-01-29",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filter: {
        property: "status",
        status: { equals: "Public" },
      },
    }),
  }
)

const data = await res.json()
const current = data.results.map((page) => page.id)

const hasNew = current.some((id) => !prev.has(id))

if (hasNew) {
  await fetch(process.env.VERCEL_DEPLOY_HOOK, { method: "POST" })
  fs.writeFileSync(cachePath, JSON.stringify({ pageIds: current }, null, 2))
}
