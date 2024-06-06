// next.config.js

const nextConfig = {
    
    webpack: (config, { isServer }) => {
      // Add support for loading GLSL files
      config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        use: [
          {
            loader: 'raw-loader',
            options: {},
          },
        ],
      });
  
      return config;
    },
    images: {
        domains: ['images.pexels.com'],
      },
  };
  
  export default nextConfig;
  