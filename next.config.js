/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com", "media.autochek.africa", "th.bing.com"],
    loader: "custom",
    path: "/"
  }
}
