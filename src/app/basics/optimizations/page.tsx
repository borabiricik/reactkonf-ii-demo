import { Fira_Code } from "next/font/google";
import Image from "next/image";
import React from "react";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Optimizations = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Outfit:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <div className={`flex flex-col gap-4`}>
        <h1 className="text-4xl font-bold text-center">Optimizations</h1>
        <div className="px-16">
          <h2 className="text-2xl font-bold">1. Image Optimization</h2>
          <div className="flex items-center gap-4 mt-4">
            <div>
              <h3 className="text-lg font-bold">With next/image</h3>
              <Image
                src="https://picsum.photos/200"
                alt="Image Optimization"
                width={200}
                height={200}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">Without next/image</h3>

              <img src="https://picsum.photos/200" alt="Image Optimization" />
            </div>
          </div>
        </div>
        <div className="px-16">
          <h2 className="text-2xl font-bold">2. Font Optimization</h2>
          <div className="grid grid-cols-2 w-3/4 gap-4 mt-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">With next/font</h3>
              <p className={`${firaCode.className}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Without next/font</h3>
              <p style={{ fontFamily: "Fira Code" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Optimizations;
