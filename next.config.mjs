/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/page1.html' },
        { source: '/page1', destination: '/page1.html' },
        { source: '/page2', destination: '/page2.html' },
        { source: '/page3', destination: '/page3.html' },
        { source: '/page4', destination: '/page4.html' }
      ],
      afterFiles: [],
      fallback: []
    };
  }
};

export default nextConfig;
