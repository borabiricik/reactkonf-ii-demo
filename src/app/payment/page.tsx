"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
} from "@heroui/react";
import { Polar } from "@polar-sh/sdk";
import {
  IconBolt,
  IconCreditCard,
  IconShoppingCart,
  IconStar,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Demo ürünler (gerçek ürün ID'leri ile değiştirilecek)
const demoProducts = [
  {
    id: "prod_demo_1",
    name: "ReactKonf Premium Bilet",
    price: "₺599",
    description: "Tüm konferans erişimi + workshop'lar",
    icon: IconStar,
  },
  {
    id: "prod_demo_2",
    name: "ReactKonf Standart Bilet",
    price: "₺299",
    description: "Ana konferans erişimi",
    icon: IconBolt,
  },
];

const PaymentPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(demoProducts[0].id);
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const polar = new Polar({
        accessToken: process.env.NEXT_PUBLIC_POLAR_ACCESS_TOKEN || "demo-token",
        server: "sandbox",
      });
      const checkout = await polar.checkouts.create({
        products: ["332e90ef-a33a-4210-bd76-47de052ed82f"],
        customerEmail,
        customerName,
      });
      router.push(checkout.url);
    } catch (error) {
      console.error("Checkout hatası:", error);
    } finally {
      setLoading(false);
    }
  };

  const selectedProductInfo = demoProducts.find(
    (p) => p.id === selectedProduct,
  );

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            ReactKonf 2025 Biletleri
          </h1>
          <p className="text-lg text-gray-600">
            Polar.sh ile güvenli ödeme demo'su
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ürün Seçimi */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <IconShoppingCart />
                Bilet Seçimi
              </h2>
            </CardHeader>
            <CardBody className="gap-6">
              <div className="grid gap-4">
                {demoProducts.map((product) => (
                  <Card
                    key={product.id}
                    isPressable
                    isHoverable
                    className={`cursor-pointer transition-all ${
                      selectedProduct === product.id
                        ? "border-2 border-primary bg-primary-50"
                        : "border border-gray-200"
                    }`}
                    onPress={() => setSelectedProduct(product.id)}
                  >
                    <CardBody className="flex-row items-center gap-4">
                      <div className="bg-primary-100 p-2 rounded-lg">
                        <product.icon className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-600">
                          {product.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-blue-600">
                          {product.price}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>

              <Divider />

              <div className="space-y-4">
                <h3 className="font-semibold">
                  Müşteri Bilgileri (İsteğe Bağlı)
                </h3>
                <Input
                  label="E-posta"
                  type="email"
                  placeholder="ornek@email.com"
                  value={customerEmail}
                  onValueChange={setCustomerEmail}
                />
                <Input
                  label="Ad Soyad"
                  placeholder="Adınızı girin"
                  value={customerName}
                  onValueChange={setCustomerName}
                />
              </div>
            </CardBody>
          </Card>

          {/* Checkout Önizleme */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <IconCreditCard />
                Ödeme Özeti
              </h2>
            </CardHeader>
            <CardBody className="gap-6">
              {selectedProductInfo && (
                <div className="space-y-4">
                  <div className="rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <selectedProductInfo.icon
                        className="text-blue-600"
                        size={20}
                      />
                      <h4 className="font-semibold">
                        {selectedProductInfo.name}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      {selectedProductInfo.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span>Bilet Fiyatı:</span>
                      <span className="text-xl font-bold text-blue-600">
                        {selectedProductInfo.price}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Polar.sh Demo Özellikler:
                    </h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Güvenli stripe entegrasyonu</li>
                      <li>• Sandbox ortamında test</li>
                      <li>• Otomatik fatura oluşturma</li>
                      <li>• Webhook desteği</li>
                    </ul>
                  </div>

                  <Button
                    color="primary"
                    size="lg"
                    isLoading={loading}
                    onPress={handleCheckout}
                    className="w-full"
                    startContent={<IconCreditCard />}
                  >
                    Polar.sh ile Ödeme Yap
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Bu bir demo'dur. Gerçek ödeme yapılmayacaktır.
                    <br />
                    Polar.sh sandbox ortamında test edilecektir.
                  </p>
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
