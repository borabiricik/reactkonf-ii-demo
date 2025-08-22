"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
import { IconCheck, IconShoppingCart } from "@tabler/icons-react";

const PaymentSuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="flex flex-col gap-3 items-center">
          <div className="bg-green-100 p-3 rounded-full">
            <IconCheck className="text-green-600" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-green-800">Ödeme Başarılı!</h1>
        </CardHeader>
        <CardBody className="gap-4">
          <p className="text-default-600">
            Ödemeniz başarıyla işlendi. Siparişiniz için teşekkür ederiz!
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-default-500">
            <IconShoppingCart size={16} />
            <span>Sipariş durumunuz email ile bildirilecektir</span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default PaymentSuccessPage;
