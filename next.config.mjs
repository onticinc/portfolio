

/** @type {import('next').NextConfig} */
const nextConfig = {

  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: 'file-loader',
    });

    return config;
  },

  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ['i.ytimg.com'], // Add the domain here if you're using the latest Next.js version
    // For older versions, use remotePatterns
    remotePatterns: [
      {
        // Configuration for i.ytimg.com
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '',
      },
      // Add other remote patterns if needed
    ],
  },
};



