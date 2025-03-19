import ProductsSection from "./components/product-list-components/all-products-components/ProductsSection";
import Hero from "./components/product-list-components/Hero";
import NavBar from "./components/product-list-components/navigation-components/NavBar";
import { FilterProvider } from "./contexts/FilterContext";

export default async function Home() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  console.log(products);

  if (!products) return <div>Loading...</div>;

  const randomIndex = Math.floor(Math.random() * products.length);
  const randomProduct = products[2];

  return (
    <div className="flex flex-col w-screen p-[20px] md:px-[160px] ">
      <NavBar />
      <Hero product={randomProduct} />
      <FilterProvider products={products}>
        <ProductsSection />
      </FilterProvider>
      {/* <Footer product={randomProduct} /> */}
    </div>
  );
}
