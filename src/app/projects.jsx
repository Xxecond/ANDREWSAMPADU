"use client";
import { useEffect, useRef } from "react";
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
    id: 4,
    name: "PORTFOLIO WEBSITE",
    image1: "/assets/port.jpg",
    image2: "/assets/port2.jpg",
    desc: "A showcase of my personal development project, skills, and contact info. Users can view projects and explore my tech stack. Built with React and Vite, responsive and easy to navigate.",
    liveLink: "https://portfolioo-wx2k.vercel.app/",
  },
  {
    id: 3,
    name: "E-COMMERCE STORE",
    image1: "/assets/comin.jpg",
    image2: "/assets/comin2.jpg",
    desc: "An application interface powered by React + Vite framework that highlights a simple, modern layout with search, product grid, and category navigation. Currently under active development.",
    liveLink: "https://your-ecommerce-link.com",
  },
];

export default function Projects() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const images = card.querySelectorAll(".project-image");
      let current = 0;
      let timer = null;

      const showImage = (i) => {
        images.forEach((img, idx) => {
          img.classList.remove("active", "prev");
          if (idx === i) img.classList.add("active");
        });
      };

      // Click toggle
      card.addEventListener("click", () => {
        current = (current + 1) % images.length;
        showImage(current);
      });

      // IntersectionObserver for auto-swipe
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              timer = setTimeout(() => {
                current = (current + 1) % images.length;
                showImage(current);
              }, 3000);
            } else {
              clearTimeout(timer);
              current = 0;
              showImage(0);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section id="projects" className="py-16 bg-blue-100 text-black text-center">
      <h1 className="text-lg md:text-xl font-bold mb-12 tracking-wide">My Projects</h1>
      <div className=" px-10 gap-10 grid px-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, i) => (
          <section
            key={project.id}
            ref={(el) => (cardRefs.current[i] = el)}
            className="flex flex-col items-center justify-center relative h-screen"
          >
            <div className="relative w-full h-[70%] rounded-2xl overflow-hidden shadow-lg cursor-pointer project-card">
              <Image
                src={project.image1}
                alt={`${project.name} preview 1`}
                fill
                className="absolute top-0 left-0 w-full h-full object-fill project-image active transition-transform duration-500 translate-x-0"
              />
              <Image
                src={project.image2}
                alt={`${project.name} preview 2`}
                fill
                className="absolute top-0 left-0 object-fill project-image transition-transform duration-500 translate-x-full"
              />
            </div>

            <div className="w-full border-0 border-bg-blue-500 shadow-2xl mt-4 p-4 rounded-lg text-left">
              <h2 className="md:text-lg font-semibold mb-2 flex items-center">
                {project.name}
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="ml-3 px-3 py-1 border hover:border-0 rounded-lg text-sm m:text-base text-blue-900 hover:bg-blue-900 hover:text-white "
                >
                  Live
                </a>
              </h2>
              <p className="text-sm md:text-base leading-relaxed">{project.desc}</p>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
