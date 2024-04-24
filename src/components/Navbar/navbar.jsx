import Cart from "./cart";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="bg-[#F6F6F7] flex justify-end m-5 h-10 items-center px-20">
      <button onClick={() => setOpen(!open)}>
        My Cart ( {products.length} )
      </button>
      {open && (
        <div className="absolute top-12 r-5">
          <Cart />
        </div>
      )}
    </div>
  );
};

export default Navbar;
