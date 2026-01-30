module.exports = {
  images: {
    domains: [
      "www.notion.so",
      "lh5.googleusercontent.com",
      "s3-us-west-2.amazonaws.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/0ju-admin-deploy.tsx",
        destination: "/0ju-admin-deploy",
        permanent: true,
      },
    ]
  },
}
