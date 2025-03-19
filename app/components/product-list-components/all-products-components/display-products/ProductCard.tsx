import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="block transition-transform hover:scale-[1.02] hover:shadow-lg"
    >
      <div className="bg-white rounded-lg p-4 flex flex-col h-full">
        <div className="relative h-48 w-full mb-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">
            {product.title}
          </h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
            {product.description.slice(0, 90)}...
          </p>
          <div className="mt-auto flex justify-between items-center">
            <span className="text-xl font-bold text-blue-600">
              ${product.price}
            </span>
            <span className="text-sm text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
              {product.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
