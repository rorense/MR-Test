import toast from "react-hot-toast";
import useFetch from "../../../hooks/useFetch";
import { addToCart } from "../../../redux/cartReducer";
import SizeButton from "./size-button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TailSpin } from "react-loader-spinner";

const Product = () => {
  const { data, loading, error } = useFetch();
  const [size, setSize] = useState("");
  const [sizeID, setSizeID] = useState("");
  const dispatch = useDispatch();

  // Spinner component while fetching data
  if (loading)
    return (
      <div className="flex justify-center items-center">
        <TailSpin />
      </div>
    );

  // Error component if fetch fails
  if (error) return <div>Error: {error}</div>;

  // Function to add item to cart
  const handleAddToCart = () => {
    if (size === "") {
      toast.error("Please Select a size");
      return;
    }

    dispatch(
      addToCart({
        id: data.id,
        title: data.title,
        price: data.price,
        img: data.imageURL,
        size: size,
        quantity: 1,
      })
    );
    toast.success("Added to cart");
  };

  return (
    <div className="mx-8 sm:flex sm:gap-11">
      <div className="mb-4 sm:w-1/2 sm:justify-center sm:flex">
        {data && <img src={data.imageURL} alt="" />}
      </div>

      <div className="sm:w-1/2">
        {data && (
          <>
            <h1 className="text-2xl">{data.title}</h1>
            <hr />
            <p className="py-4 text-lg font-bold">${data.price.toFixed(2)}</p>
            <hr />
            <p>{data.description}</p>
            <br />
            <p>
              Sizes<span className="text-[#C90000]">*</span> :
              <span>{size}</span>
            </p>
            <div className="flex flex-row gap-3 items-center">
              {data.sizeOptions.map((options) => (
                <SizeButton
                  value={options.label}
                  key={options.key}
                  size={size}
                  sizeID={sizeID}
                  selected={options.label === size ? true : false}
                  onClick={() => {
                    setSizeID(options.id);
                    setSize(options.label);
                  }}
                />
              ))}
            </div>
            <button
              className="rounded-md border-2 border-black hover:text-white hover:bg-black p-3 w-40 text-center mt-10 cursor-pointer transition duration-200"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
