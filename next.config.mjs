/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'bit.ly',
          },
        ],
      },
    // webpack: (config) => {
    //       config.externals = [...config.externals, 'bcrypt'];
    //       return config;
    //     },  
};

export default nextConfig;
