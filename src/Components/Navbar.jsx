import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/l"}>L</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/reviews"}>Reviews</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/jobs"}>Jobs</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#200000] text-white w-full">
      <div className="navbar-start">
        {/* Logo */}
        <a className="btn btn-ghost normal-case text-xl flex items-center">
          <img
            src="/path/to/logo.png" // Update with your logo path
            alt="RedTilt Logo"
            className="h-8 w-8 mr-2"
          />
          RedTilt
        </a>
      </div>

      {/* Center Nav Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4 space-x-4">{links}</ul>
      </div>

      {/* Start a project button with moon icon */}
      <div className="navbar-end">
        <a className="btn bg-red-600 hover:bg-red-700 border-none flex items-center">
          <i className="fas fa-moon mr-2"></i> {/* Moon Icon */}
          Start a project
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="dropdown lg:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
          className="menu menu-sm dropdown-content bg-[#200000] rounded-box mt-3 p-2 shadow-lg z-[1]"
        >
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
