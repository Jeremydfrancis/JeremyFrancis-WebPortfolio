/** @type {import('next').NextConfig} */
const nextConfig = {
      experimental: {
            serverActions: true,

      serverComponentsExternalPackages: [
          '@react-email/components',
          '@react-email/tailwind'
      ]
  }};

export default nextConfig;
