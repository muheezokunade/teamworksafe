/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/staff',
        destination: '/staff-login',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
