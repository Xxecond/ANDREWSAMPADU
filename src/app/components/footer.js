"use client"
import { SiWhatsapp,SiX, SiLinkedin, SiDiscord } from "react-icons/si";
import {BiLinkAlt} from "react-icons/bi";
import { Link } from "react-scroll";
import Image from "next/image";

export default function Footer(){
    const socialLinks =[
        {id:1, icon:SiX, text:"X"},
        {id:2, icon:SiWhatsapp, text:"WhatsApp"},
            {id:3, icon:SiDiscord, text:"Discord"},
        {id:4, icon:SiLinkedin, text:"Linkedin"},
    ]
     
    const navLinks =[
        {id:1, link:"home", text:"Home"},
        {id:2, link:"projects", text:"Project"},
         {id:3, link:"about", text:"About"},
        {id:4,  link:"contact", text:"Contact"},
    ]

    return(
        <footer >
<section className=" py-5 px-5 md:pl-15 grid grid-cols-1 gap-5 md:flex md:gap-20 bg-blue-900 text-white">
<div className="flex-1 flex flex-col ">
<div className=" flex items-center space-x-3">
    <Image  src="/assets/initials.webp"
alt="FooterFavicon" width={40} height={40}
className="border-2 border-white"/>
<span className="md:text-lg font-semibold inline-block tracking-tight ml-3">ANDREWS AMPADU</span>
</div>
<p className="pt-5 font-light leading-relaxed">Frontend developer specializing in UI/UX modern web technologies and building smooth digital experiences with clean code & creative flow.</p>
</div>
<nav className="flex-1 ">
<div className="flex items-center">
<BiLinkAlt className="text-lg md:text-2xl" />
<span className="md:text-xl font-semibold ml-2">
Navigation</span>
</div>
<ul className="grid cols-1 pt-3 md:pt-8 space-y-1 w-max font-light leading-relaxed md:text-xl">
 {navLinks.map((item)=>
     <li key={item.id} className="hover:font-semibold cursor-pointer">
        <Link to={item.link} duration="500" smooth={true}>
        {item.text}</Link>
            </li>
    )}
</ul>
</nav>
<nav className="flex-1 ">
   <div className="relative">
    <span className="absolute top-2 left-0 block h-3
    w-3 rounded-full opacity-75 bg-green-900 animate-ping"></span>
    <span className="absolute top-2 left-0 block h-3
    w-3 rounded-full bg-green-900">
   </span> 
    <h3 className="md:text-xl font-semibold ml-5">Find Me Online</h3>
   </div> 
    <ul className="flex flex-col pt-3 md:pt-8 w-max md:w-full md:ml-0
     ">
    {socialLinks.map((item)=>{
        const Icon = item.icon;
        return(
             <li key={item.id} >
                  <a href={item.link} 
                  className="flex items-center space-x-3 md:text-xl
                   text-gray-300 font-ligh leading-relaxed hover:font-semibold 
                   cursor-pointer hover:font-semibold">
                    <Icon />
                    <span className="">{item.text}</span></a>
                  </li>
        )
    })}
</ul>
</nav>
</section>
<p className="border-t border-white bg-blue-900 text-center py-4 
text-sm text-right font-light pr-5 text-white">
        © {new Date().getFullYear()} MFF. All rights reserved.
      </p>
       </footer>
    )
}