import { Webhooks } from "@polar-sh/nextjs";

export const POST = Webhooks({
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET || "demo-webhook-secret",
  onPayload: async (payload) => {
    console.log("Polar webhook received:", payload);
    // Tüm webhook olaylarını yakala
  },
  onOrderCreated: async (payload) => {
    console.log("Order created:", payload);
    // Sipariş oluşturulduğunda
  },
  onOrderPaid: async (payload) => {
    console.log("Order paid:", payload);
    // Ödeme tamamlandığında
    // Burada bilet gönderme, email tetikleme vs. yapılabilir
  },
  onCheckoutCreated: async (payload) => {
    console.log("Checkout created:", payload);
    // Checkout oluşturulduğunda
  },
  onCustomerCreated: async (payload) => {
    console.log("Customer created:", payload);
    // Yeni müşteri oluşturulduğunda
  },
});
