/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/vote/team',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/vote/team`,
      },
      {
        source: '/api/vote/team-vote',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/vote/team-vote`,
      },
      {
        source: '/api/vote/fe',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/vote/fe`,
      },
      {
        source: '/api/vote/fe-vote',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/vote/fe-vote`,
      },
      {
        source: '/api/vote/be',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/vote/be`,
      },
      {
        source: '/api/vote/be-vote',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/vote/be-vote`,
      },
      {
        source: '/api/vote/team-result',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/vote/team-result`,
      },
      {
        source: '/api/vote/fe-result',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/vote/fe-result`,
      },
      {
        source: '/api/vote/be-result',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/vote/be-result`,
      },
      {
        source: '/api/user/signup',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/user/signup`,
      },
      {
        source: '/api/user/login',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/user/login`,
      },
    ];
  },
};

export default nextConfig;
