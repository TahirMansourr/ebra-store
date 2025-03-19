import BreadCrumbs from "@/app/components/product-details-components/BreadCrumbs";
import ImagesOfProduct from "@/app/components/product-details-components/ImageOfProduct";
import ProductInfo from "@/app/components/product-details-components/ProductInfo";
import Footer from "@/app/components/product-list-components/Footer";
import NavBar from "@/app/components/product-list-components/navigation-components/NavBar";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const singleProduct = await fetch(
    `https://fakestoreapi.com/products/${id}`
  ).then((response) => response.json());

  return (
    <div className="flex flex-col w-screen p-[20px] md:px-[160px]">
      <NavBar />
      <BreadCrumbs product={singleProduct} />
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
        <ImagesOfProduct ProductImage={singleProduct.image} />
        <ProductInfo product={singleProduct} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
