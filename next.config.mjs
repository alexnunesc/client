/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['linkedin.com', 'images.unsplash.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true, // Se você deseja que o SVG seja tratado como um ícone
          },
        },
      ],
    });
    return config;
  },
};


export default nextConfig;
