import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-sm">
      {/* Logo */}
      <p className="font-poppins font-bold text-xl">Sourav's Stay</p>

      {/* Centered Nav Links (Hidden on Mobile) */}
      <div className="hidden md:flex gap-8">
        {["Home", "Hotel", "Contacts"].map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `font-poppins text-lg font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-sky-700 after:scale-x-0 hover:after:scale-x-100 transition-transform ${
                isActive ? "after:scale-x-100" : "text-gray-600"
              }`
            }
          >
            {item}
          </NavLink>
        ))}
      </div>

      {/* Sign In Button */}
      <Button className="font-poppins text-sm font-normal px-6 py-2 bg-sky-700 text-white">
        Sign In
      </Button>
    </nav>
  );
};

export default Navbar;
