/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "pokemetahub.com"
          }
        ],
        destination: "https://www.pokemetahub.com/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
