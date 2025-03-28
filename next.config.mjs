/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_THIRDWEB_CLIENT_ID: process.env.THIRDWEB_CLIENT_ID,
    },
};

export default nextConfig;

