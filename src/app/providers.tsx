import {
    ThirdwebProvider,
    useAddress,
    useCreateAccount,
    useConnect,
    metamaskWallet,
    walletConnect,
    coinbaseWallet,
    WalletConfig,
} from "@thirdweb-dev/react";
import { Base, Ethereum, Polygon, Optimism } from "@thirdweb-dev/chains";
import { shortenAddress } from "thirdweb/utils";
import Image from "next/image";
import React from "react";

// Define ProfileCard Component
function ProfileCard({
    avatar,
    name,
    type,
    bio,
}: {
    avatar?: string;
    name: string;
    type: string;
    bio: string;
}) {
    const imageSrc =
        avatar && avatar.trim() !== "" ? avatar : "/default-avatar.png";

    return (
        <div className="profile-card border p-4 rounded-lg shadow-md">
            {imageSrc && (
                <Image
                    src={imageSrc}
                    alt={name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full"
                />
            )}
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm text-gray-600">{type}</p>
            <p className="text-sm">{bio}</p>
        </div>
    );
}

// Main App Component
function App() {
    const account = useCreateAccount();
    const address = useAddress();
    const connect = useConnect();

    const handleConnect = async (walletProvider: () => WalletConfig<any>) => {
        try {
            const wallet = walletProvider();
            if (connect && typeof connect === "function") {
                await connect(wallet, {}); // ✅ second arg is required
            }
        } catch (error) {
            console.error("Failed to connect wallet:", error);
        }
    };

    return (
        <ThirdwebProvider
            supportedChains={[Ethereum, Base, Polygon, Optimism]}
            clientId="YOUR_CLIENT_ID"
        >
            <div className="flex flex-col gap-4 p-4">
                <h2 className="text-xl font-semibold">Connect Wallet</h2>
                <button
                    className="bg-purple-600 text-white px-4 py-2 rounded"
                    onClick={() => handleConnect(metamaskWallet)}
                >
                    Connect with MetaMask
                </button>
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={() => handleConnect(walletConnect)}
                >
                    Connect with WalletConnect
                </button>
                <button
                    className="bg-gray-800 text-white px-4 py-2 rounded"
                    onClick={() => handleConnect(coinbaseWallet)}
                >
                    Connect with Coinbase Wallet
                </button>

                {address && (
                    <p className="mt-4 text-green-600">
                        Connected as: {shortenAddress(address)}
                    </p>
                )}
            </div>
        </ThirdwebProvider>
    );
}

export default App;

