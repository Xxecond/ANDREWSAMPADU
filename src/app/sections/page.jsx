"use client";
import Link from "next/link";
import { About, Contact, Projects } from "@/components";

export default function Sections() {
  const contents = [
    {
      id: 1,
      link: "projects",
      header: "Latest Projects",
      content: <Projects />,
    },
    { id: 2, link: "about", header: "About Me", content: <About /> },
    { id: 3, link: "contact", header: "Contact Me", content: <Contact /> },
  ];
  return (
    <div>
      <ol className="py-9 px-4 bg-blue-100 text-white gap-9 flex flex-col">
        {contents.map((item) => {
          return (
            <li
              id={item.link}
              key={item.id}
              className="flex flex-col bg-blue-900 rounded-xl p-4 py-9 relative"
            >
              <header className="block mx-auto py-5">
                <h1
                  className="text-xl text-white
       md:text-2xl font-black leading-loose"
                >
                  {item.header}
                </h1>
              </header>
              <div className="w-full flex gap  ">{item.content}</div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
