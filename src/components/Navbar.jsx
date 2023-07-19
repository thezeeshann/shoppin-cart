import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="flex max-w-6xl h-20 justify-between items-center mx-auto">
      <NavLink to="/">
        <img src="../logo.png" alt="logo" className="h-14" />
      </NavLink>
      <div className="flex items-center font-medium mr-5 space-x-5 text-white">
        <NavLink to="/">
          <h1 className="">Home</h1>
        </NavLink>
        <NavLink to="/cart">
          <div className="relative">
            <span className="text-2xl">
              <FaShoppingCart />
            </span>
            <span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 rounded-full w-5 h-5 text-xs flex justify-center items-center animate-bounce">
                  {cart.length}
                </span>
              )}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
