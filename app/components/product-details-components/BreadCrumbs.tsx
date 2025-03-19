import { Product } from "@/types";
import Link from "next/link";

const BreadCrumbs = ({ product }: { product: Product }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm">
      <ol className="flex items-center space-x-2">
        <li className="hidden md:block">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
        </li>
        <li className="hidden md:block text-gray-500">{`>`}</li>
        <li className="hidden md:block">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Shop
          </Link>
        </li>
        <li className="hidden md:block text-gray-500">{`>`}</li>
        <li>
          <Link
            href={`/?category=${product.category}`}
            className="text-gray-500 hover:text-gray-700"
          >
            {product.category}
          </Link>
        </li>
        <li className="text-gray-500">{`>`}</li>
        <li className="text-gray-900 font-medium">{product.title}</li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
