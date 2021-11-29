/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com", "media.autochek.africa", "th.bing.com", "picsum.photos", "ichef.bbci.co.uk"],
    loader: "custom",
    path: "/"
  }
}
