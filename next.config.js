/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'rb.gy'],
  },
  i18n: {
    locales: ['en', 'vn-en', 'nl'],
    defaultLocale: 'vn-en',
  },
}
