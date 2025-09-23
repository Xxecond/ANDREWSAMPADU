"use client";
import { useState } from "react";
import {
  EnvelopeIcon,
  UserIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const formItems = [
    { id: 1, type: "text", icon: UserIcon, placeholder: "Name", name: "name" },
    { id: 2, type: "email", icon: EnvelopeIcon, placeholder: "Email", name: "email" },
    { id: 3, type: "text", icon: ChatBubbleOvalLeftIcon, placeholder: "Message", name: "message" },
  ];

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
      setStatus(data.success ? "sent" : "error");

      // Reset back after 3s
      setTimeout(() => setStatus(""), 3000);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <div className="flex w-full justify-center">
      <form
        id="contact"
        onSubmit={handleSubmit}
        className="p-9 w-full md:w-1/2"
      >
        <section className="grid grid-cols-1 p-9 space-y-9 border-2 border-blue-900 rounded-xl">
          <h1 className="text-center text-2xl font-bold">Get in touch!</h1>

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
                    className="pl-10 w-full border-2 border-blue-900 p-3 rounded-xl h-32"
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
                    className="pl-10 w-full border-2 border-blue-900 p-3 rounded-xl"
                    required
                  />
                )}
              </div>
            );
          })}

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-black text-white rounded-xl p-2 group relative flex justify-center items-center h-12"
          >
            {status === "loading" ? (
             <div className="flex gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulseDot [animation-delay:0ms]"></span>
                <span className="w-2 h-2 bg-white rounded-full animate-pulseDot [animation-delay:300ms]"></span>
                <span className="w-2 h-2 bg-white rounded-full animate-pulseDot [animation-delay:600ms]"></span>
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
  );
}
