"use client";
import {HomeIcon, FolderIcon, InformationCircleIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";
import { useState } from "react";

function Spin({ open, setOpen, className }) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className={`md:hidden w-8.5 h-8 flex flex-col justify-center items-center gap-1.5 
        bg-blue-900 rounded-full mr-3 transform transition-transform duration-900 
        ${open ? "rotate-360" : ""} ${className}`}
    >
      <span
        className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${
          open ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <span
        className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${
          open ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navBar = [
    { id: 1, link: "home", icon:HomeIcon, text: "Home" },
    { id: 2, link: "projects", icon:FolderIcon, text: "Projects" },
    { id: 3, link: "about", icon:InformationCircleIcon, text: "About" },
    { id: 4, link: "contact", icon:PhoneIcon, text: "Contact" },
  ];

  return (
    <nav>
      {/* Make sure hamburger stays above menu */}
      <Spin open={open} setOpen={setOpen} 
       className={`z-50 relative transition-all duration-1000`} />
      <div
        className={`fixed inset-0 bg-gradient-to-b from-black/70 to-black/70 
          z-40 transition-opacity duration-300 md:hidden ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 h-full w-64 bg-white shadow-xl transform 
            transition-transform duration-300 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 mt-15 ">
            <nav className="space-y-5">
              {navBar.map((item) => {
                const Icon = item.icon;
                return(
                <Link
                  key={item.id}
                  to={item.link}
                  smooth={true}
                  duration={600} 
                  onClick={()=> setOpen((false))}
                 className="relative block text-lg font-semibold p-2 rounded-lg overflow-hidden
             border border-blue-900 text-black
             before:absolute before:left-0 before:top-0 before:h-full before:w-0
             before:bg-blue-900 before:z-[-1] before:transition-all before:duration-500
             hover:before:w-full hover:text-white"
                ><Icon className="h-5 w-5 inline-block text-blue-900" /><span className="ml-5">
                  {item.text}
                  </span>
                </Link>
              );})}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
