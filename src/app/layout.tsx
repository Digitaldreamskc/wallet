
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react"; // Ensure this is the correct import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Thirdweb SDK + Next Starter",
    description: "Starter template for using Thirdweb SDK with Next.js App Router",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThirdwebProvider>{children}</ThirdwebProvider>
            </body>
        </html>
    );
}
