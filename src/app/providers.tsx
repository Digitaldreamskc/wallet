"use client";

import {
    ThirdwebProvider,
    useAddress,
    useConnect,
    metamaskWallet,
    coinbaseWallet,
    walletConnect,
    WalletConfig,
} from "@thirdweb-dev/react";
import { Ethereum, Base, Polygon, Optimism } from "@thirdweb-dev/chains";
import { shortenAddress } from "thirdweb/utils";

function WalletConnectApp() {
    const address = useAddress();
    const connect = useConnect();

    const handleConnect = async (walletProvider: () => WalletConfig<any>) => {
        try {
            await connect(walletProvider());
        } catch (error) {
            console.error("Failed to connect wallet:", error);
            alert("Wallet connection failed. Please try again.");
        }
    };

    return (
        <div>
            <button onClick={() => handleConnect(metamaskWallet)}>Connect MetaMask</button>
            <button onClick={() => handleConnect(coinbaseWallet)}>Connect Coinbase</button>
            <button onClick={() => handleConnect(walletConnect)}>Connect WalletConnect</button>

            {address && (
                <p style={{ marginTop: "1rem" }}>
                    Connected: {shortenAddress(address)}
                </p>
            )}
        </div>
    );
}

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThirdwebProvider
            activeChain={Ethereum}
            supportedChains={[Ethereum, Base, Polygon, Optimism]}
            clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
        >
            <WalletConnectApp />
            {children}
        </ThirdwebProvider>
    );
}
