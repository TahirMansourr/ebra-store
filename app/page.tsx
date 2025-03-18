import Hero from "./components/product-list-components/Hero";
import NavBar from "./components/product-list-components/NavBar";

export default async function Home() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  console.log(products);

  if (!products) return <div>Loading...</div>;

  const randomIndex = Math.floor(Math.random() * products.length);
  const randomProduct = products[randomIndex];

  return (
    <div className="flex flex-col w-screen px-[160px] h-screen">
      <NavBar />
      <Hero product={randomProduct} />
    </div>
  );
}
