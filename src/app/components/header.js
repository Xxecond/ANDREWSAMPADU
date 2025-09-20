"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AA from "../assets/initials.png";
 import Navbar from "../components/navbar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  const headNav = [
    {id:1, link:"#home", text:"Home"},
    {id:2, link:"#projects", text:"Projects"},
    {id:3, link:"#About", text:"About"},
    {id:4, link:"#Contact", text:"Contact"},
  ]
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !scrolled) {
        setTextVisible(false);
        setTimeout(() => {
          setScrolled(true);
          setTextVisible(true);
        }, 600);
      } else if (window.scrollY <= 50 && scrolled) {
        setTextVisible(false);
        setTimeout(() => {
          setScrolled(false);
          setTextVisible(true);
        }, 600);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`sticky flex justify-between top-0 z-50 transition-all duration-1000 ${
        scrolled ? "py-2 shadow-lg bg-gray-100" : "py-4 bg-white"
      }`}
    >
<Image src={AA} alt="initials" 
className={ `ml-3 h-8 w-8 ${

textVisible?
"":"opacity-0 "}`} />      
      <h1
  className={`hidden md:block font-bold text-black transition-all  duration-1000 transform
    ${textVisible
      ? scrolled
        ? "text-lg opacity-100 scale-100 translate-x-0"   // small, left
        : "text-xl opacity-100 scale-100 translate-x-1/2" // big, center
      : "opacity-0 "
    }`}
>
  PORTFOLIO
</h1>
      <nav>
        <ul className={`flex space-x-4 justify-end px-5  ${textVisible? scrolled?
        "text-base":"text-lg":"opacity-0"

        }`}>
            {headNav.map((item) =>
            <li key={item.id} className="relative hidden md:block after:block after:h-1 after:bg-black 
            after:w-0 hover:after:w-full after:transition-all leading-tight tracking-tight
             after:duration-300 hover:font-bold"><a href={item.link}>
                {item.text}</a>
             </li>)}
        </ul>
      </nav>
      <div className="md:hidden">
      <Navbar textVisible ={textVisible} />
    </div>
    </header>
  );
}
