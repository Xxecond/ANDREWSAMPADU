"use client";
import { useState } from "react";
import Image from "next/image";
import {
  EnvelopeIcon,
  UserIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  CheckCircleIcon
} from "@heroicons/react/24/solid";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const formItems = [
    { id: 1, type: "text", icon: UserIcon, placeholder: "Name", name: "name" },
    { id: 2, type: "email", icon: EnvelopeIcon, placeholder: "Email", name: "email" },
    { id: 3, type: "text", icon: ChatBubbleOvalLeftIcon, placeholder: "Message", name: "message" },
  ];

  const dotItems =[
    {id:1, delay:"[animation-delay:0ms]"},
       {id:2, delay:"[animation-delay:300ms]"},
          {id:3, delay:"[animation-delay:600ms]"},
  ]
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" }); // ✅ clear form after success
      } else {
        setStatus("error");
      }

      // Reset status back after 3s
      setTimeout(() => setStatus(""), 3000);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <div id="contact" className="px-4 py-9 w-full bg-blue-100 justify-center">
      
      <div className="flex items-center min-h-dvh bg-blue-900 rounded-xl relative">
      <h1  className="absolute top-12 left-1/2 -translate-x-1/2 text-white text-xl md:text-2xl font-bold">Contact Me</h1>
      <article className="hidden md:block w-1/2">
            <h1 className="text-white leading-tight text-3xl font-semibold -translate-y-30">Questions? ideas? or just a hello?<br />  feel free to ask.</h1>
            <p className="text-white -translate-y-20"><CheckCircleIcon className="h-4 w-4 mr-3 inline-block " />Work with me directly - no bots, no middlemen</p>
            <p className="text-white -translate-y-20 mt-3"><CheckCircleIcon className="h-4 w-4 mr-3 inline-block " />Deliver high-quality and fully satisfactory work</p>
            <p className="text-white -translate-y-20 mt-3"><CheckCircleIcon className="h-4 w-4 mr-3 inline-block" />Drop your message and i'll respond within 24 hours</p>
            <div className="flex bg-white/10 w-[70%] items-center p-4 rounded-lg justify-between relative">
                <Image 
                    src= "/assets/PIC.jpg" 
    alt="Andrews profile pic"
   width={70}
   height={70}
    className=" h-full object-fill border-2 shadow-2xl rounded-4xl"
 />
                <p className="text-sm text-white font-semibold tracking-wider absolute left-25 top-1/2 -translate-y-1/2 ">
                Andrews<span className="block font-thin tracking-tighter text-xs">Developer</span>
                </p>
                <button className=" hidden lg:block flex-shrink-0 bg-green-600 text-sm py-3 text-white rounded-2xl px-4">whatApp<ChatBubbleOvalLeftIcon className="h-5 w-5 inline-block" /></button>
            </div>
            </article>
            <form
        onSubmit={handleSubmit}
        className=" p-9 w-full md:w-1/2"
      >
        <section className="grid grid-cols-1 p-9 space-y-8 shadow-xl bg-blue-100 rounded-xl">
          <h1 className="text-center  my-auto  h-20 text-xl md:text-2xl font-bold">Get in touch!</h1>

          {formItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="relative w-full">
                <Icon
                  className={`absolute left-3 text-gray-600 h-5 w-5 
                  ${item.id === 3 ? "top-4" : "top-1/2 -translate-y-1/2"}`}
                />
                {item.id === 3 ? (
                  <textarea
                    id={item.id}
                    name={item.name}
                    value={formData[item.name]}
                    onChange={handleChange}
                    placeholder={item.placeholder}
                    className="pl-10 w-full border-1 border-gray-600 p-3 rounded-xl h-32"
                    required
                  />
                ) : (
                  <input
                    id={item.id}
                    name={item.name}
                    value={formData[item.name]}
                    onChange={handleChange}
                    type={item.type}
                    placeholder={item.placeholder}
                    className="pl-10 w-full border-1 border-gray-600 p-3 rounded-xl"
                    required
                  />
                )}
              </div>
            );
          })}

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-blue-900 text-white text-sm md:text-base rounded-xl p-2 group relative flex justify-center items-center h-12"
          >
            {status === "loading" ? (
              <div className="flex gap-3">
               {dotItems.map((item)=>(
                 <span key={item.id} className={`w-2 h-2 bg-white rounded-full animate-pulseDot ${item.delay}`}>  
                 </span>))}
              </div>
            ) : status === "sent" ? (
              "✅ Sent!"
            ) : status === "error" ? (
              "❌ Failed"
            ) : (
              <>
                <PaperAirplaneIcon className="h-5 w-5 absolute -rotate-28 group-hover:rotate-0 transition-all duration-500 right-3" />
                Send Message
              </>
            )}
          </button>
        </section>
      </form>
      </div>
    </div>
  );
}