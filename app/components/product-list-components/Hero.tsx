import { Product } from "@/types";
import Image from "next/image";

const Hero = ({ product }: { product: Product }) => {
  return (
    <div className="relative w-full h-[300px] ">
      <Image
        src={product.image}
        alt={product.title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="text-white text-center p-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl mb-2">🔥 Trending </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
