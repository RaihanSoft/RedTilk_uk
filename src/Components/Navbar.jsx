import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle Dark Mode
    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
    
        if (newDarkMode) {
            document.documentElement.classList.add("dark"); // Add the dark class
        } else {
            document.documentElement.classList.remove("dark"); // Remove the dark class
        }
    
        localStorage.setItem("darkMode", newDarkMode); // Store the preference
    };
    

    // Load Dark Mode Preference
    useEffect(() => {
        const savedDarkMode = localStorage.getItem("darkMode") === "true";
        setIsDarkMode(savedDarkMode);
        document.documentElement.classList.toggle("dark", savedDarkMode); // Apply saved dark mode
    }, []);

    const links = (
        <>
            <li>
                <NavLink to={"/"}>L</NavLink>
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
        <div className="navbar text-white w-full sticky top-0  backdrop-blur-lg z-50 ">
            <div className="navbar-start">
                {/* Logo */}
                <a className="btn btn-ghost normal-case text-xl flex items-center">
                    <img
                        src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/461927125_122200445480021094_8667971185301389060_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGUKDnOErefj8nObz_kWtZ8nmAh_zZhCvSeYCH_NmEK9OvIhlvrAFc1whdtTPlfv-WVnam4Te22z55uEw84Z0RM&_nc_ohc=eAGVorOmxHIQ7kNvgEGTUnC&_nc_zt=23&_nc_ht=scontent.fdac8-1.fna&_nc_gid=A37HJQ7ysWMXaTgXcXK1gPq&oh=00_AYCSs7XETiu60gpRPSYN9GewfWEIsKT2hxVDqXrA_fA3dg&oe=674CC586" // Update with your logo path
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

            {/* End: Dark Mode Toggle and Start a Project Button */}
            <div className="navbar-end flex items-center space-x-4">
                {/* Dark Mode Toggle Button */}
                <button
                    className="btn btn-ghost text-white text-3xl"
                    onClick={toggleDarkMode}
                    aria-label="Toggle Dark Mode"
                >
                    {isDarkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
                </button>

                {/* Start a Project Button */}
                <a className="hidden sm:flex btn text-white bg-red-600 hover:bg-red-700 border-none">
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
                    className="menu menu-sm dropdown-content bg-[#200000] rounded-box mt-3 p-2 -ml-20 shadow-lg z-[1]"
                >
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
