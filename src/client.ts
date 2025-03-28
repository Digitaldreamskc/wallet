import { createThirdwebClient } from "thirdweb";

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;

if (!clientId) {
    throw new Error("❌ Environment variable NEXT_PUBLIC_THIRDWEB_CLIENT_ID is missing.");
}

const client = createThirdwebClient({ clientId });

export default client;
