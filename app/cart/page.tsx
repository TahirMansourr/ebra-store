import Main from "../components/cart-page-compoenents.tsx/Main";

const Cart = async () => {
  const cart = await fetch("https://fakestoreapi.com/carts/1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
  if (!cart) {
    return <h1>loading</h1>;
  }
  return <Main cart={cart} />;
};

export default Cart;
