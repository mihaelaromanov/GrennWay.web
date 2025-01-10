import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FaSunPlantWilt } from "react-icons/fa6";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    return (
        <div className="fixed w-full z-10 bg-green-950 shadow-[rgba(0, 128, 0, 0.5)]">
            {/* Header Section */}
            <div className="flex flex-row justify-between items-center py-4 px-5 lg:px-32">
                {/* Logo */}
                <div className="text-white flex items-center gap-2 cursor-pointer">
                    <FaSunPlantWilt size={25} />
                    <h1 className="text-xl font-semibold">GreenWay Logistics</h1>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-row items-center text-white text-lg font-medium gap-8">
                    {["home", "aboutus", "services", "contact"].map((item) => (
                        <Link
                            key={item}
                            to={item}
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="group relative inline-block cursor-pointer"
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                    {menu ? (
                        <AiOutlineClose size={25} onClick={handleChange} />
                    ) : (
                        <AiOutlineMenuUnfold size={25} onClick={handleChange} />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${
                    menu ? "translate-x-0" : "-translate-x-full"
                } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-lg text-center pt-8 pb-4 gap-6 w-full h-fit transition-transform duration-300`}
            >
                {["home", "menu", "about", "products", "review"].map((item) => (
                    <Link
                        key={item}
                        to={item}
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-green-500 transition-all cursor-pointer"
                        onClick={closeMenu}
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
