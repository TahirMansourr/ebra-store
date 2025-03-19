import ActionsBar from "./ActionsBar";
import Navigation from "./Navigation";

const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <p className="font-bold text-sm md:text-2xl ">Ebra Store</p>
      </div>
      <Navigation />
      <ActionsBar />
    </div>
  );
};

export default NavBar;
