import React from "react";
import { TiSocialAtCircular } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
    const { pathname } = useLocation();
    return (
        <div className="">
            <nav className="w-full px-24 fixed top-0 left-0 z-50">
                <div className="flex bg-white py-4 border-b border-black items-center justify-between">
                    <Link to={"/"}>
                        <a
                            href=""
                            className=" flex items-center justify-center hover:text-blue-300 space-x-2"
                        >
                            <TiSocialAtCircular className="text-2xl" />
                            <h1 className="font-mono">My Portfolio</h1>
                        </a>
                    </Link>
                    <auth className="flex items-center justify-center">
                        <ul className="flex items-center space-x-8">
                            <NavLink to={"/"}>
                                <li
                                    className={`font-mono hover:text-blue-300 cursor-pointer ${
                                        pathname === "/" && "text-blue-300"
                                    } `}
                                >
                                    Home
                                </li>
                            </NavLink>

                            <Link to={"/about"}>
                                <li
                                    className={`font-mono hover:text-blue-300 cursor-pointer ${
                                        pathname === "/about" && "text-blue-300"
                                    } `}
                                >
                                    About
                                </li>
                            </Link>

                            <NavLink to={"/resume"}>
                                <li
                                    className={`font-mono hover:text-blue-300 cursor-pointer ${
                                        pathname === "/resume" &&
                                        "text-blue-300"
                                    }`}
                                >
                                    Resume
                                </li>
                            </NavLink>

                            <NavLink to={"/projects"}>
                                <li
                                    className={`font-mono hover:text-blue-300 cursor-pointer ${
                                        pathname === "/projects" &&
                                        "text-blue-300"
                                    } `}
                                >
                                    Projects
                                </li>
                            </NavLink>
                            <NavLink to={"/contacts"}>
                                <li
                                    className={`font-mono hover:text-blue-300 cursor-pointer ${
                                        pathname === "/contacts" &&
                                        "text-blue-300"
                                    } `}
                                >
                                    Contacts
                                </li>
                            </NavLink>
                        </ul>
                    </auth>
                </div>
            </nav>
        </div>
    );
};

export default Header;
