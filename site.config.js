const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Youngju Jang",
    image: "/app-icon.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "영주의 감자탈출 블로그",
    email: "youngju6143@gmail.com",
    linkedin: "0ju428",
    github: "youngju6143",
    instagram: "0ju_428",
  },
  projects: [
    {
      name: `0ju-log`,
      href: "https://github.com/youngju6143/morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "0ju-log",
    description: "영주의 감자탈출 블로그",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://0ju428-blog.vercel.app",
  since: 2025, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://0ju428-blog.vercel.app/og-image.png", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  // 댓글 기능
  utterances: {
    enable: true,
    config: {
      repo:
        process.env.NEXT_PUBLIC_UTTERANCES_REPO || "youngju6143/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
