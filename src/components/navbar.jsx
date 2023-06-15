import { useState } from "react";
import logo from "../assets/images/logo.svg";
import openMenu from "../assets/images/icon-menu.svg";
import closeMenu from "../assets/images/icon-close.svg";
import Cart from "./cart";
import profileIcon from "../assets/images/image-avatar.png";

const navbar = (handleCartItems) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleCloseMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex justify-between mx-auto py-10 h-24 px-10">
      <div className="flex flex-row space-x-6 items-center justify-between">
        <div className="flex items-center lg:hidden" onClick={handleMenu}>
          {!menu && <img src={openMenu} alt="Open Menu Icon" />}
        </div>
        <img src={logo} alt="Logo" />

        <ul className="hidden lg:flex flex-row space-x-10 items-center">
          <li className="font-medium text-[#70787d] hover:cursor-pointer hover:text-[#b6bcc8]">Collection</li>
          <li className="font-medium text-[#70787d] hover:cursor-pointer hover:text-[#b6bcc8]">Men</li>
          <li className="font-medium text-[#70787d] hover:cursor-pointer hover:text-[#b6bcc8]">Women</li>
          <li className="font-medium text-[#70787d] hover:cursor-pointer hover:text-[#b6bcc8]">About</li>
          <li className="font-medium text-[#70787d] hover:cursor-pointer hover:text-[#b6bcc8]">Contact</li>
        </ul>
      </div>

      <div className="flex flex-row justify-end items-center space-x-4">
        <Cart handleCartItems={handleCartItems}/>
        <img className="h-10" src={profileIcon} alt="Profile Icon" />
      </div>
      <div
        className={
          menu
            ? "fixed bg-[#f8f5fd] h-screen px-6 left-0 w-1/3 top-0"
            : "fixed left-[-100%]"
        }
      >
        <div className="mt-10 mb-4 ml-2" onClick={handleCloseMenu}>
          {menu && <img src={closeMenu} alt="close Menu" />}
        </div>
        <ul className="space-y-8">
          <li className="font-medium text-pink-900">Collection</li>
          <li className="font-medium">Men</li>
          <li className="font-medium">Women</li>
          <li className="font-medium">About</li>
          <li className="font-medium">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
