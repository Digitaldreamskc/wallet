import { createThirdwebClient } from "thirdweb";

// Check if clientId is NOT provided (note the negation)
if (!process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID
});
