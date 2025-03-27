// src/client.ts (or lib/client.ts)

import { createThirdwebClient } from "thirdweb";

// Get the client ID from environment variables
const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;

// If it's missing, throw a helpful error
if (!clientId) {
    throw new Error("❌ Environment variable NEXT_PUBLIC_THIRDWEB_CLIENT_ID is missing.");
}

// Create and export the Thirdweb client instance
export default createThirdwebClient({
    clientId,
});
