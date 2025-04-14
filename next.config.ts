import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    typedEnv: true,
  },
  eslint: {
    dirs: ['app', 'components', 'lib'],
  },
};

export default nextConfig;
