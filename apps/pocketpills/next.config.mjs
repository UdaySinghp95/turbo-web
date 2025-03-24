/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/blog',
                destination: `${process.env.BLOG}`,
            },
            {
                source: '/blog/:path+',
                destination: `${process.env.BLOG}/blog/:path+`,
            },
        ];
    }
};

export default nextConfig;
