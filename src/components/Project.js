"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "JOT APPLICATION",
    image1: "/assets/jot-1.PNG",
    image2: "/assets/jot-2.PNG",
    desc: "A highly intuitive, user-friendly platform that allows you to effortlessly create, read, update, and delete jot posts with ease and clarity. Built with Next.js, with a clean and responsive UI.",
    liveLink: "https://jot-9.vercel.app/",
  },
  {
    id: 2,
    name: "RESTAURANT WEBSITE",
    image1: "/assets/rest.webp",
    image2: "/assets/rest2.webp",
    desc: "A user-friendly interface that allows customers to easily browse a menu, view detailed food items, and place orders online. Built with React and Vite, ideal for showcasing restaurant dishes online.",
    liveLink: "https://restaurant-zeta-khaki.vercel.app/",
  },
  ,
  {
    id: 3,
    name: "SHOPLY WEBSITE",
    image1: "/assets/shoply.jpg",
    image2: "/assets/comin2.webp",
    desc: "A modern e-commerce platform using Next.js, Express, PostgreSQL, for buying and selling fashion, offering dedicated experiences for buyers, sellers, and admins. Currently under development.",
    liveLink: "######",
  },
];

export default function Projects() {
  return (
    <section className="w-full" >
      <div className="gap-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [current, setCurrent] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth < 768) {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let autoSlideTimer;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            autoSlideTimer = setTimeout(() => {
              setCurrent(1);
            }, 3000);
            if (!hasAnimated && isMobile) {
              setIsVisible(true);
              setHasAnimated(true);
            }
          } else {
            clearTimeout(autoSlideTimer);
            setCurrent(0);
          }
        });
      },
      { threshold: [0, 0.5, 1] }
    );

    observer.observe(card);
    return () => {
      observer.disconnect();
      clearTimeout(autoSlideTimer);
    };
  }, [hasAnimated, isMobile]);

  return (
    <section
      ref={cardRef}
      className={`flex flex-col items-center justify-center relative h-screen transition-opacity duration-1000 ${
        isMobile ? (isVisible ? 'opacity-100' : 'opacity-0') : 'opacity-100'
      }`}
    >
      <div
        onClick={() => setCurrent((prev) => (prev === 0 ? 1 : 0))}
        className="relative w-full h-[70%] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
      >
        <Image
          src={project.image1}
          alt={`${project.name} preview 1`}
          fill
          className={`absolute top-0 left-0 w-full h-full object-fill transition-opacity duration-700 ${
            current === 0 ? "opacity-100" : "opacity-0"
          }`}
        />
        <Image
          src={project.image2}
          alt={`${project.name} preview 2`}
          fill
          className={`absolute top-0 left-0 w-full h-full object-fill transition-opacity duration-700 ${
            current === 1 ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="w-full border-0 bg-blue-100 shadow-2xl 
      mt-4
       p-4 rounded-lg text-left text-black">
        <h2 className="md:text-lg font-semibold mb-2 flex items-center">
          {project.name}
          <a
            href={project.liveLink}
            target="_blank"
            className="ring-1 ring-blue-900 ml-3 px-3 py-1 border hover:border-0 rounded-lg text-sm md:text-base text-blue-900 hover:bg-blue-900 hover:text-white"
          >
            Live
          </a>
        </h2>
        <p className="text-sm md:text-base leading-relaxed">{project.desc}</p>
      </div>
    </section>
  );
}
