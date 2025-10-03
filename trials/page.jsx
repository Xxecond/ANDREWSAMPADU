"use client";
{/*"use client";
import { motion } from "framer-motion";

export default function Try() {
  const variants = {
    hiddenLeft: { x: "-100%", opacity: 0 },
    hiddenRight: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: [0, 0.5, 1],
      transition: { x: { duration: 0.6 }, opacity: { duration: 0.6, times: [0, 0.5, 1] } },
    },
  };

  return (
    <section className="bg-black min-h-680 flex justify-center items-center">
      <div className="flex gap-8">
        <motion.div
          className="bg-blue-500 h-80 w-60"
          variants={variants}
          initial="hiddenLeft"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        />
        <motion.div
          className="bg-red-500 h-80 w-60"
          variants={variants}
          initial="hiddenRight"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        />
      </div>
    </section>
  );
 */}

{/*import { useEffect, useRef } from "react";

export default function Try() {
  const rightRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    if (!leftRef.current || !rightRef.current) return; // check actual DOM nodes

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        if (!entry.target) return; // safety check
        const el = entry.target.classList;
        if (entry.isIntersecting) {
          el.add("translate-x-0", "opacity-50");
          el.remove("-translate-x-64", "translate-x-64", "opacity-0");
           // Step 2: after slide duration, make fully visible
          setTimeout(() => {
            el.add("opacity-100");
            el.remove("opacity-50");
          }, 600); // match this to your duration
        } else {
          if (entry.target === leftRef.current) {
            el.add("-translate-x-64", "opacity-0");
             el.remove("translate-x-0", "opacity-50", "opacity-100");
          } else if (entry.target === rightRef.current) {
            el.add("translate-x-64", "opacity-0");
            el.remove("translate-x-0", "opacity-50", "opacity-100");
          }
        }
      });
    });

    observer.observe(leftRef.current);
    observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black  min-h-680 overflow-x-hidden">
      <main className="flex justify-around bg-yellow-900 min-h-dvh items-center">
        <div
  ref={leftRef}
  className="bg-blue-900 h-80 w-1/3 transition-transform transition-opacity 
             duration-600 -translate-x-64 opacity-0"
></div>

<div
  ref={rightRef}
  className="bg-red-900 h-80 w-1/3 transition-transform transition-opacity 
             duration-600  translate-x-64 opacity-0"
></div>

      </main>
    </section>
  );
}
*/}

export default function Try(){
  return(
    <div className="relative bg-blue-400 h-screen ">
      <button className="absolute px-2 py-5 bg-black text-white rounded-xl
      top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
      transform transition duration-500 hover:scale-210 rotate-15 hover:rotate-0"> click me</button>
    </div>
  )
}