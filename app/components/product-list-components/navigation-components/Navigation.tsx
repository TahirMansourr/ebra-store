const Navigation = () => {
  return (
    <nav>
      <ul className="  hidden md:flex md:space-x-4">
        <li className=" hover: cursor-pointer font-bold">Home</li>
        <li className=" hover: cursor-pointer hover:cursor-not-allowed">
          Products
        </li>
        <li className=" hover: cursor-pointer hover:cursor-not-allowed">
          About
        </li>
        <li className=" hover: cursor-pointer hover:cursor-not-allowed">
          Contact Us
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
