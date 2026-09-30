"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

const aboutText = `Hi, i'm Andrews Ampadu, an I.T graduate
     from the University of Cape Coast focused on 
     full-stack web development. I have a solid knowledge of Next.js,
     React, Node Js, Express , TypeScript and Tailwindcss and  experience with Git/Github 
     for version control. Alongside coding, i also use Adobe Photoshop for UI designs
     and creative assets, giving me both developer and designer perspectives.
     I specialize in scalable, user-friendly applications and adapt quickly
     to modern frameworks and backend technologies.
    `;

const AboutYouText = `Hi, i'm Andrews Takyi is in Accra. And you`;

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
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!leftBox.current || !rightBox.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target.classList;

          if (entry.isIntersecting) {
            // Element is in view: settle at 0px translation and full opacity
            el.remove("opacity-0", "-translate-x-32", "translate-x-32");
            el.add("opacity-100", "translate-x-0");
          } else {
            // Element is out of view: fade out and push outwards
            el.remove("opacity-100", "translate-x-0");
            el.add("opacity-0");

            if (entry.target === leftBox.current) {
              el.add("-translate-x-32"); // Push left box to the left
            } else {
              el.add("translate-x-32"); // Push right box to the right
            }
          }
        });
      },
      { threshold: 0.2 }, // Triggers when 20% of the box is visible
    );

    observer.observe(leftBox.current);
    observer.observe(rightBox.current);

    return () => observer.disconnect();
  }, []);

  const Stacks = [
    { id: 1, icon: SiNextdotjs, color: "text-black" },
    { id: 2, icon: SiReact, color: "text-blue-500" },
    { id: 3, icon: SiNodedotjs, color: "text-emerald-600" },
    { id: 4, icon: SiExpress, color: "text-zinc-800" },
    { id: 5, icon: SiTypescript, color: "text-blue-600" },
    { id: 7, icon: SiTailwindcss, color: "text-cyan-400" },
  ];

  return (
    <section className=" w-full flex gap-4  ">
      <div
        ref={leftBox}
        className="relative hidden md:block w-1/2 minh-h-[75dvh] rounded-xl transition-all duration-1000 ease-out opacity-0 -translate-x-32"
      >
        <Image
          src="/assets/him.jpg"
          alt="aboutMePic"
          fill
          sizes="45vw"
          className="rounded-xl"
        />
      </div>
      <div
        ref={rightBox}
        className="flex flex-col justify-center p-4 min-h-[75dvh] items-evenly w-full md:w-1/2 bg-white rounded-xl transition-all duration-1000 ease-out opacity-0 translate-x-32"
      >
        <p
          className="text-black flex-10 flex items-center  text-left md:text-xl lg:text-2xl 
  leading-tight tracking-tight
  lg:leading-relaxed lg:tracking-tight
   xl:leading-loose xl:tracking-wide"
        >
          {" "}
          <Typewriter fullText={aboutText} />{" "}
        </p>
        <ul
          className="flex-1 flex justify-end items-center w-full 
        space-x-5"
        >
          {Stacks.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <Icon
                  className={`text-2xl md:text-xl lg:text-3xl 
            ${item.color}`}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
