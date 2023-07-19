import {FaTrash} from "react-icons/fa"
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/cartSlice"
import { toast } from "react-hot-toast";

const CartItem = ({item,itemIndex}) => {

  const dispatch = useDispatch()
  function removeFromCart(){
    dispatch(remove(item.id))
    toast.error("Item remove from card")
  }
  return <div>
    <div className="flex flex-row gap-x-10">
      <div className="w-[180px]">
        <img src={item.image} alt="" className="w-full h-full"/>
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold mb-3 w-96">{item.title}</h1>
        <p className="w-96 mb-3">{item.description.split(" ").slice(0, 20).join(" ") + "..."}</p>
        <div className="flex flex-row gap-x-64 w-96">
        <p className="font-bold text-green-600">${item.price}</p>
        <button className="bg-red-200 p-3 rounded-full " onClick={removeFromCart}><FaTrash/></button>
        </div>
      </div>
    </div>
  </div>;
};

export default CartItem;
