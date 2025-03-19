import { Product } from "@/types";
import Image from "next/image";

const Hero = ({ product }: { product: Product }) => {
  return (
    <div className="relative w-full min-w-[320px] max-w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] mx-auto">
      <Image
        src={product.image}
        alt={product.title}
        fill
        className="object-contain md:object-cover"
        priority
        sizes="(max-width: 640px) 100vw,
               (max-width: 768px) 100vw,
               (max-width: 1024px) 100vw,
               100vw"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="text-white text-center w-full max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 line-clamp-2">
            {product.title}
          </h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-2">
            🔥 Trending
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
