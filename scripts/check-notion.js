const fs = require("fs")

const CACHE_PATH = ".notionsync/published.json"

async function run() {
  const prev = new Set(JSON.parse(fs.readFileSync(CACHE_PATH, "utf8")).pageIds)

  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
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
    console.log("✨ New public posts detected")
    await fetch(process.env.VERCEL_DEPLOY_HOOK, { method: "POST" })

    fs.writeFileSync(CACHE_PATH, JSON.stringify({ pageIds: current }, null, 2))
  } else {
    console.log("No changes")
  }
}

run()
