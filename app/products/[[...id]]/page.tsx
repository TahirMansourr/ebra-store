import BreadCrumbs from "@/app/components/product-details-components/BreadCrumbs";
import ImagesOfProduct from "@/app/components/product-details-components/ImageOfProduct";
import ProductInfo from "@/app/components/product-details-components/ProductInfo";
import NavBar from "@/app/components/product-list-components/navigation-components/NavBar";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const singleProduct = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  ).then((response) => response.json());
  console.log(singleProduct);
  return (
    <div className="flex flex-col w-screen p-[20px] md:px-[160px]">
      <NavBar />
      <BreadCrumbs product={singleProduct} />
      <div className="flex gap-10 justify-between">
        <ImagesOfProduct ProductImage={singleProduct.image} />
        <ProductInfo product={singleProduct} />
      </div>
    </div>
  );
};

export default ProductDetails;
