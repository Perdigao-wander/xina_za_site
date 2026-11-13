import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "fakelogo.com",
            },
            {
                protocol: "https",
                hostname: "logoipsum.com",
            },
            {
                protocol: "https",
                hostname: "placehold.co", // Caso queiras usar placeholders genéricos
            },
            // Adiciona aqui outros domínios que decidas usar
        ],
    },
};

export default nextConfig;