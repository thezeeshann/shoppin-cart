import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((arr, curr) => arr + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex flex-row justify-center items-center mt-10 gap-x-20">
          <div>
            {cart.map((item, index) => (
              <CartItem key={item.id} itemIndex={index} item={item} />
            ))}
          </div>
          <div className="flex flex-col">
            <div className="uppercase text-green-600 mt-5">
              <div className="text-xl font-semibold">You Cart</div>
              <div className="text-5xl font-semibold">Summary</div>
            </div>
            <div className="mt-5">
              <p>
                <span className="text-xl mt-3 font-bold">Total Items : {cart.length}</span>
              </p>
              <p className="text-xl mt-3 font-bold">Total Amount: ${totalAmount}</p>
              <button className="bg-green-600 mt-4 py-2.5 text-white rounded-lg font-semibold w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen flex-col">
          <h1 className="font-bold text-xl mb-5">Your cart is empty!</h1>
          <Link to="/">
            <button className="bg-green-600 px-8 py-2.5 text-white rounded-lg font-semibold">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
