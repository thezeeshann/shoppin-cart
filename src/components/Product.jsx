import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const Product = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Item remove from cart");
  }
  function addToCart() {
    dispatch(add(item));
    toast.success("Items added to cart");
  }
  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in p-4 mt-10 ml-5 rounded-xl shadow-lg border">
      <div className="text-center mb-5 mt-5 font-semibold text-lg text-gray-700">
        <p>{item.title.split(" ").slice(0, 3).join(" ") + "..."}</p>
      </div>
      <div className="text-center text-xs text-gray-400 w-40">
        <p>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={item.image} alt="" className="w-full h-full" />
      </div>
      <div className="flex flex-row gap-x-14 mt-5">
        <div className="text-green-600 font-semibold">
          <p>${item.price}</p>
        </div>
        <div>
          {cart.some((p) => p.id === item.id) ? (
            <button
              onClick={removeFromCart}
              className="text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 px-3 hover:bg-gray-900 hover:text-white uppercase"
            >
              Remove Item
            </button>
          ) : (
            <button
              onClick={addToCart}
              className="text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 px-3 hover:bg-gray-900 hover:text-white uppercase"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
