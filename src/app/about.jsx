"use client";
import { useEffect, useRef,useState } from "react";
import Image from "next/image";
import {SiNextdotjs, SiReact, SiHtml5, SiCss3, SiJavascript} from "react-icons/si";

const aboutText = `Hi, i'm Andrews Ampadu, a level 300 I.T student
     at the University of Cape Coast focused on 
     full-stack web development. I have a solid knowledge of Next.js,
       React, HTML, CSS and JavaScript and  experience with Git/Github 
      for version control. Alongside coding, i also use Adobe Photoshop for UI designs
      and creative assets, giving me both developer and designer perspectives.
       i specialize in scalable, user-friendly applications and adapt quickly
        to modern frameworks and backend technologies.
    `

function Typewriter({ fullText }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setInView(true);
      });
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView && text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [inView, text, fullText]);

  return (
    <span ref={ref} className="text-lg leading-relaxed">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function About() {
const leftBox = useRef(null);
const rightBox = useRef(null);
  
useEffect(()=>{
if(!leftBox.current || !rightBox.current) return;

const observer = new IntersectionObserver((entries)=>{
 
  entries.forEach((entry)=>{
    if(!entry.target) return;
    const el = entry.target.classList;
    if(entry.isIntersecting){
      el.add("translate-x-0", "opacity-50");
      el.remove("translate-x-64", "md:translate-x-64", "opacity-0");

    setTimeout(()=>{
      el.add("opacity-100");
      el.remove( "opacity-50");
    }, 600);
  } else {
    if(entry.target === leftBox.current){
      el.add("-translate-x-64", "opacity-0");
      el.remove("translate-x-0", "opacity-50", "opacity-100");
    }else if(entry.target === rightBox.current){
      el.add("md:translate-x-64", "opacity-0");
      el.remove("md:translate-x-0", "opacity-50", "opacity-100");
    }
  }
});
});
observer.observe(leftBox.current);
observer.observe(rightBox.current);

return () =>observer.disconnect();
}, []);

const Stacks = [
  { id:1, icon: SiNextdotjs, color: "text-black" },
  { id:2, icon: SiReact, color: "text-blue-500" },
  { id:3, icon: SiHtml5, color: "text-orange-600" },
  { id:4, icon: SiCss3, color: "text-blue-700" },
  { id:5, icon: SiJavascript, color: "text-yellow-400" },
];


return (
    <section id="about" className="px-4 py-9 w-full bg-blue-100 justify-center">
      <main className=" overflow-x-hidden flex p-9 gap-7 items-center min-h-dvh bg-blue-900 
      rounded-xl relative">  
      <h1  className="absolute top-12 left-1/2 -translate-x-1/2 
      text-white text-xl md:text-2xl font-black leading-loose">About Me</h1>
<div ref={leftBox} className="hidden md:block w-1/2 h-120 bg-red-900 rounded-xl
 transition-transform transition-opacity -translate-x-64 opacity-0 duration-600" >
  <Image 
  src="/assets/Pic.jpg"
  alt="aboutMePic"
  fill className="rounded-xl"
  />
 </div>
<div ref={rightBox}
  className="mt-16 md:mt-0 pb-10 flex justify-center items-center 
  relative h-150 md:h-120 md:w-1/2 bg-blue-100 rounded-xl
   transition-transform transition-opacity translate-x-64 
   opacity-0 duration-700"
>
  <p className=" text-left px-5 py-3 md:text-xl lg:text-2xl 
  leading-tight tracking-tight
  lg:leading-relaxed lg:tracking-tight
   xl:leading-loose xl:tracking-wide" 
  > <Typewriter fullText={aboutText} /> </p>
       <ul className="absolute bottom-0 justify-end  w-full h-10 
       flex space-x-5 mr-10 mb-0 lg:mb-3">
        {Stacks.map((item)=>{
          const Icon = item.icon;
          return(
          <li key={item.id}>
            <Icon className={`text-2xl md:text-xl lg:text-3xl 
            ${item.color}`} /></li>
)})}
       </ul>
  </div>
</main>
</section>
  )
}