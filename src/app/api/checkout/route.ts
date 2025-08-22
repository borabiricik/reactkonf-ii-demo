import { Checkout } from "@polar-sh/nextjs";

export const GET = Checkout({
  accessToken: process.env.POLAR_ACCESS_TOKEN || "demo-token", // Fallback for demo
  server: "sandbox", // Use sandbox for testing
  theme: "dark", // Enforces dark theme
});
