/// src/app/providers.tsx

"use client";

import {
    ThirdwebProvider,
    useAddress,
    useConnect,
    useCreateWalletInstance,
    metamaskWallet,
    walletConnect,
    coinbaseWallet,
} from "@thirdweb-dev/react";
import { Base, Ethereum, Polygon, Optimism } from "@thirdweb-dev/chains";
import { useEffect } from "react";
import { shortenAddress } from "thirdweb/utils";

function WalletConnectApp() {
    const address = useAddress();
    const connect = useConnect();
    const createWalletInstance = useCreateWalletInstance();

    const handleConnect = async (walletConfig: any) => {
        try {
            const wallet = createWalletInstance(walletConfig);
            await connect(wallet);
        } catch (error) {
            console.error("Failed to connect wallet:", error);
            alert("Wallet connection failed. Please try again.");
        }
    };

    return (
        <ThirdwebProvider
            supportedChains={[Ethereum, Base, Polygon, Optimism]}
            clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
        >
            <div className="p-6 max-w-md mx-auto flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Connect Your Wallet</h2>

                <button
                    className="bg-purple-600 text-white py-2 px-4 rounded"
                    onClick={() => handleConnect(metamaskWallet())}
                >
                    Connect with MetaMask
                </button>
                <button
                    className="bg-blue-600 text-white py-2 px-4 rounded"
                    onClick={() => handleConnect(walletConnect())}
                >
                    Connect with WalletConnect
                </button>
                <button
                    className="bg-gray-800 text-white py-2 px-4 rounded"
                    onClick={() => handleConnect(coinbaseWallet())}
                >
                    Connect with Coinbase Wallet
                </button>

                {address && (
                    <p className="text-green-500 mt-4">
                        Connected as: {shortenAddress(address)}
                    </p>
                )}
            </div>
        </ThirdwebProvider>
    );
}

export default WalletConnectApp;
