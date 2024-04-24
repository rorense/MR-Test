import Cart from "./cart";
import { useState } from "react";
import { useSelector } from "react-redux";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="bg-[#F6F6F7] flex justify-end m-5 h-10 items-center px-10">
      <button onClick={() => setOpen(!open)} className="flex">
        <CiShoppingCart size={25} className="sm:hidden" />
        <span className="hidden sm:block">My Cart </span> ( {products.length} )
      </button>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
