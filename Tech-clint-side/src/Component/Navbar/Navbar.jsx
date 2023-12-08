import { Link, NavLink } from "react-router-dom";
import nav from "./nav_title.jpeg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut, setLoading } = useContext(AuthContext);

  const setDarkMode =() =>{
    document.querySelector("body").setAttribute("data-theme", "dark");
  }

  const setLightMode =() =>{
    document.querySelector("body").setAttribute("data-theme", "light")
  }
  const toggleTheme = e =>{
    if(e.target.checked){
      setDarkMode()
      setLoading(false)
    }
    else setLightMode();
    setLoading(false)
  }
  const handleLogOut = () => {
    logOut();
  };

  const lists = (
    <div className="flex flex-col lg:flex-row gap-2 ">
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-[#FFFFFF] text-lg hover:text-[#FFFFFF] underline font-bold"
              : isPending
              ? ""
              : "btn btn-ghost pt-4 border-0 text-[#ffffff] hover:text-white  hover:bg-[rgba(6,147,227,1)] font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-[#FFFFFF] text-lg hover:text-[#FFFFFF] underline font-bold"
              : isPending
              ? ""
              : "btn btn-ghost pt-4 border-0 text-[#ffffff] hover:text-white  hover:bg-[rgba(6,147,227,1)] font-semibold"
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-[#FFFFFF] text-lg hover:text-[#FFFFFF] underline font-bold"
              : isPending
              ? ""
              : "btn btn-ghost pt-4 border-0 text-[#ffffff] hover:text-white  hover:bg-[rgba(6,147,227,1)] font-semibold"
          }
        >
          My Cart
        </NavLink>
      </li>
    </div>
  );
  return (
    <div className="navbar bg-gradient-to-l from-cyan-500 to-blue-500  text-[#FFF]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm text-center dropdown-content mt-3 z-[1] p-2 shadow bg-[#1111115e] rounded-box w-52"
          >
            {lists}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <img className="w-[50px] rounded-full" src={nav} alt="" />
          <p className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#eaeaea] to-[#db07e6]">
            Tech Devices
          </p>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{lists}</ul>
        </div>
        <button><input onChange={toggleTheme} type="checkbox" className="toggle"/></button>
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-11 rounded-full">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[rgba(6,147,227,1)] rounded-box w-52"
            >
              <li>
                <p className="btn btn-sm  btn-ghost">{user.displayName}</p>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm btn-ghost border-0 text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn border-0 bg-[rgba(6,147,227,1)] hover:bg-[#0c326b] text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
