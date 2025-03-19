"use client";
import Image from "next/image";
import { useState } from "react";

const ImagesOfProduct = ({ ProductImage }: { ProductImage: string }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [ProductImage, ProductImage, ProductImage, ProductImage];

  return (
    <div className="w-full max-w-[500px] mb-5">
      <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
        <Image
          src={images[selectedImage]}
          alt="Product"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square rounded-md overflow-hidden border-2 
              ${
                selectedImage === index ? "border-black" : "border-transparent"
              }`}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 25vw, 120px"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImagesOfProduct;
