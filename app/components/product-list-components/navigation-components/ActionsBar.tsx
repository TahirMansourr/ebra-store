import { CgShoppingBag } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";

const ActionsBar = () => {
  return (
    <div className="actions-bar">
      <CiSearch size={25} />
      <RiAccountCircleLine size={25} />
      <CgShoppingBag size={25} />
    </div>
  );
};

export default ActionsBar;
