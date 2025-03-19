import ProductsSection from "./components/product-list-components/all-products-components/ProductsSection";
import Footer from "./components/product-list-components/Footer";
import Hero from "./components/product-list-components/Hero";
import NavBar from "./components/product-list-components/navigation-components/NavBar";
import { FilterProvider } from "./contexts/FilterContext";

export default async function Home() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  if (!products) return <div>Loading...</div>;

  const productToShow = products[2];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 p-[20px] md:px-[160px]">
        <NavBar />
        <Hero product={productToShow} />
        <FilterProvider products={products}>
          <ProductsSection />
        </FilterProvider>
      </div>
    </div>
  );
}
