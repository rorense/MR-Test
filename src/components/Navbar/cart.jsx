import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../../redux/cartReducer";
import toast from "react-hot-toast";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total;
  };

  const onReset = () => {
    dispatch(resetCart());
    toast.success("Cart has been reset");
  };

  return (
    <div className="bg-white z-9999 w-[400px] p-2 border border-[#CCCCCC]">
      {products.map((product) => (
        <div key={product.id} className="flex p-3">
          <div className="flex fill w-[200px]">
            <img src={product.img} alt="Image" />
          </div>
          <div className="flex flex-col">
            <h1>{product.title}</h1>
            <p>Size: {product.size}</p>
            <p className="font-bold">
              {product.quantity} x ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
      <h1 className="font-bold">Subtotal: $ {totalPrice()}</h1>
      <button className="rounded-md border-2 border-black  hover:text-white hover:bg-blue-500 hover:border-blue-500 p-2 my-3 text-center cursor-pointer transition duration-200">
        Proceed to Checkout
      </button>
      <br />
      <button className="text-red-500" onClick={onReset}>
        Reset Cart
      </button>
    </div>
  );
};

export default Cart;
