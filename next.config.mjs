/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: () => {
        return [{
            source: '/blog',
            destination: '/blog/1',
            permanent: false,
        }
    ]}
};

export default nextConfig;
