/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lastfm.freetls.fastly.net']
    },
    env: {
        API_KEY: process.env.API_KEY
    }
}

module.exports = nextConfig
