"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "BLOGGER APPLICATION",
    image1: "/assets/blo.jpg",
    image2: "/assets/blo2.jpg",
    desc: "A highly intuitive, user-friendly platform that allows you to effortlessly create, read, update, and delete blog posts efficiently. Built with React and Vite, with a clean and responsive UI.",
    liveLink: "https://blogger-red.vercel.app/",
  },
  {
    id: 2,
    name: "RESTAURANT WEBSITE",
    image1: "/assets/rest.jpg",
    image2: "/assets/rest2.jpg",
    desc: "A user-friendly interface that allows customers to easily browse a menu, view detailed food items, and place orders online. Built with React and Vite, ideal for showcasing restaurant dishes online.",
    liveLink: "https://restaurant-zeta-khaki.vercel.app/",
  },
  {
    id: 3,
    name: "PORTFOLIO WEBSITE",
    image1: "/assets/port.jpg",
    image2: "/assets/port2.jpg",
    desc: "A showcase of my personal development project, skills, and contact info. Users can view projects and explore my tech stack. Built with React and Vite, responsive and easy to navigate.",
    liveLink: "https://portfolioo-wx2k.vercel.app/",
  },
  {
    id: 4,
    name: "E-COMMERCE STORE",
    image1: "/assets/comin.jpg",
    image2: "/assets/comin2.jpg",
    desc: "An application interface powered by React + Vite framework that highlights a simple, modern layout with search, product grid, and category navigation. Currently under active development.",
    liveLink: "https://your-ecommerce-link.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-blue-100 text-black text-center">
      <h1 className="text-xl md:text-2xl font-bold mb-12 tracking-wide">
        My Projects
      </h1>
      <div className="px-10 gap-10 grid px-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            // when half visible → show second image
            setCurrent(1);
          } else {
            // less than half visible → reset to first image
            setCurrent(0);
          }
        });
      },
      { threshold: [0, 0.5, 1] }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={cardRef}
      className="flex flex-col items-center justify-center relative h-screen"
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

      <div className="w-full border-0 border-bg-blue-500 shadow-2xl mt-4 p-4 rounded-lg text-left">
        <h2 className="md:text-lg font-semibold mb-2 flex items-center">
          {project.name}
          <a
            href={project.liveLink}
            target="_blank"
            className="ml-3 px-3 py-1 border hover:border-0 rounded-lg text-sm md:text-base text-blue-900 hover:bg-blue-900 hover:text-white"
          >
            Live
          </a>
        </h2>
        <p className="text-sm md:text-base leading-relaxed">{project.desc}</p>
      </div>
    </section>
  );
}
