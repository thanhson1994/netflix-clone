/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'rb.gy'],
  },
  i18n: {
    locales: ['vn-en', 'vn'],
    defaultLocale: 'vn-en',
    localeDetection: false,
  },
}
