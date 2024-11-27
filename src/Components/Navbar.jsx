import { NavLink } from "react-router-dom"

const Navbar = () => {
    const links =

        <>
            <li><NavLink to={'/l'}>L</NavLink></li>
            <li><NavLink to={'/services'}>Services</NavLink></li>
            <li><NavLink to={'/reviews'}>Reviews</NavLink></li>
            <li><NavLink to={'/blog'}>Blog</NavLink></li>
            <li><NavLink to={'/jobs'}>Jobs</NavLink></li>

        </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">

                <a className="btn btn-ghost text-xl">RedTilt</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Start a project</a>
            </div>

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 -ml-10 shadow">
                    {links}

                </ul>
            </div>
        </div>
    )
}

export default Navbar