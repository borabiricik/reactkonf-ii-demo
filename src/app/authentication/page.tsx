"use client";

import { Input } from "@heroui/input";
import { Button, Card, CardBody, CardHeader, Tab, Tabs } from "@heroui/react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import type React from "react";
import { useState } from "react";
import { authClient } from "../../lib/auth-client";

const AuthenticationPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
      });
      console.log({ data });

      if (error) {
        console.error("Giriş hatası:", error);
        // TODO: Toast notification ekle
      } else {
        console.log("Başarıyla giriş yapıldı:", data);
        // TODO: Redirect to dashboard or home
      }
    } catch (error) {
      console.error("Beklenmeyen hata:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.error("Şifreler eşleşmiyor");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await authClient.signUp.email({
        email: formData.email,
        password: formData.password,
        name: formData.name,
      });

      if (error) {
        console.error("Kayıt hatası:", error);
        // TODO: Toast notification ekle
      } else {
        console.log("Başarıyla kayıt olundu:", data);
        // TODO: Redirect or show success message
      }
    } catch (error) {
      console.error("Beklenmeyen hata:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col gap-3 text-center">
          <h1 className="text-2xl font-bold">ReactKonf</h1>
          <p className="text-default-500">
            Hesabınıza giriş yapın veya yeni hesap oluşturun
          </p>
        </CardHeader>
        <CardBody>
          <Tabs
            fullWidth
            size="md"
            selectedKey={isSignUp ? "signup" : "signin"}
            onSelectionChange={(key) => setIsSignUp(key === "signup")}
          >
            <Tab key="signin" title="Giriş Yap">
              <form onSubmit={handleSignIn} className="flex flex-col gap-4">
                <Input
                  label="E-posta"
                  type="email"
                  placeholder="ornek@email.com"
                  value={formData.email}
                  onValueChange={(value) => handleInputChange("email", value)}
                  isRequired
                />
                <Input
                  label="Şifre"
                  placeholder="Şifrenizi girin"
                  value={formData.password}
                  onValueChange={(value) =>
                    handleInputChange("password", value)
                  }
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <IconEyeOff className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <IconEye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  isRequired
                />
                <Button
                  type="submit"
                  color="primary"
                  isLoading={loading}
                  className="w-full"
                >
                  Giriş Yap
                </Button>
              </form>
            </Tab>
            <Tab key="signup" title="Kayıt Ol">
              <form onSubmit={handleSignUp} className="flex flex-col gap-4">
                <Input
                  label="Ad Soyad"
                  placeholder="Adınızı girin"
                  value={formData.name}
                  onValueChange={(value) => handleInputChange("name", value)}
                  isRequired
                />
                <Input
                  label="E-posta"
                  type="email"
                  placeholder="ornek@email.com"
                  value={formData.email}
                  onValueChange={(value) => handleInputChange("email", value)}
                  isRequired
                />
                <Input
                  label="Şifre"
                  placeholder="Şifrenizi girin"
                  value={formData.password}
                  onValueChange={(value) =>
                    handleInputChange("password", value)
                  }
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <IconEyeOff className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <IconEye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  isRequired
                />
                <Input
                  label="Şifre Tekrar"
                  placeholder="Şifrenizi tekrar girin"
                  value={formData.confirmPassword}
                  onValueChange={(value) =>
                    handleInputChange("confirmPassword", value)
                  }
                  type={isVisible ? "text" : "password"}
                  isRequired
                />
                <Button
                  type="submit"
                  color="primary"
                  isLoading={loading}
                  className="w-full"
                >
                  Kayıt Ol
                </Button>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default AuthenticationPage;
