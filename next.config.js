/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingExcludes: {
      '*': ['node_modules/**/*'],
    },
  },
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination:
          process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:5328/api/:path*' : '/api/',
      },
    ]
  },
}

module.exports = nextConfig
