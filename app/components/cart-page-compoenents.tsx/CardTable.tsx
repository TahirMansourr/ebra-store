import { Product } from "@/types";
import { HiMinus, HiPlus } from "react-icons/hi";

const CardTable = ({
  displayedProducts,
  cart,
  handleDelete,
  isDeleting,
  handleUpdateQuantity,
}: {
  displayedProducts: Product[];
  cart: {
    id: number;
    userId: number;
    products: { productId: number; quantity: number }[];
  };
  handleDelete: (productId: number) => Promise<void>;
  isDeleting: number | null;
  handleUpdateQuantity: (
    productId: number,
    newQuantity: number
  ) => Promise<void>;
}) => {
  return (
    <div className="overflow-x-auto">
      {displayedProducts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No items in cart</p>
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayedProducts.map((product) => {
              const cartItem = cart.products.find(
                (p) => p.productId === product.id
              );
              const quantity = cartItem?.quantity || 0;
              const subtotal = product.price * quantity;

              return (
                <tr key={product.id}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-16 h-16 object-contain"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{product.title}</h3>
                        <button
                          className={`text-red-500 text-sm mt-1 hover:text-red-700 disabled:opacity-50 ${
                            isDeleting === product.id
                              ? "cursor-not-allowed"
                              : "cursor-pointer"
                          }`}
                          onClick={() => handleDelete(product.id)}
                          disabled={isDeleting === product.id}
                        >
                          {isDeleting === product.id ? "Removing..." : "Remove"}
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(product.id, quantity - 1)
                        }
                        className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
                        disabled={quantity <= 1}
                      >
                        <HiMinus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{quantity}</span>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(product.id, quantity + 1)
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <HiPlus className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    ${(product.price * quantity).toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CardTable;
