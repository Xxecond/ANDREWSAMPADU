"use client";

import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import Image from "next/image";
 import Navbar from "./Navbar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  const headNav = [
    {id:1, link:"home", text:"Home"},
    {id:2, link:"projects", text:"Projects"},
    {id:3, link:"about", text:"About"},
    {id:4, link:"contact", text:"Contact"},
  ]
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !scrolled) {
        setVisible(false);
        setTimeout(() => {
          setScrolled(true);
          setVisible(true);
        }, 600);
      } else if (window.scrollY <= 50 && scrolled) {
        setVisible(false);
        setTimeout(() => {
          setScrolled(false);
          setVisible(true);
        }, 600);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header className={`sticky flex justify-between shadow-xl
       top-0 z-50 transition-all duration-600 ${
        scrolled ? "py-3 bg-white" : "py-4 bg-blue-100"
      }`}
    >
<Image src="/assets/initials.webp" alt="initials"
width={92}
height={92} 
className={ `ml-3 h-8 w-8 ${
visible?  
"":"opacity-0 "}`} />      
      <h1
  className={`md:text-lg lg:text-2xl hidden md:block font-bold text-black transition-all  duration-1000 transform
    ${visible
      ? scrolled
        ? " opacity-100 scale-100 translate-x-0"   // small, left
        : " opacity-100 scale-100 translate-x-1/2" // big, center
      : "opacity-0 "
    }`}
>
  PORTFOLIO
</h1>
      <nav>
        <ul className={`flex space-x-4 justify-end lg:text-xl px-5  ${visible?
        "":"opacity-0"

        }`}>
            {headNav.map((item) =>
            <li key={item.id} className="relative hidden md:block after:block after:h-1 after:bg-black 
            after:w-0 hover:after:w-full after:transition-all leading-tight tracking-tight
             after:duration-300 hover:font-bold cursor-pointer"><Link to={item.link} smooth={true} duration={600}>
                {item.text}</Link>
             </li>)}
        </ul>
      </nav>
      <div className={`md:hidden mr-3 h-8 w-8 ${

visible?
"":"opacity-0 "}`}>
      <Navbar  />
    </div>
    </header>
  );
}

