"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Function to check if dark mode is active
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    // Initial check
    checkDarkMode();

    // Optional: observe class changes on <html> for dynamic switching
    const observer = new MutationObserver(() => checkDarkMode());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-14">
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400">Hi, my name is Aggelos Tsitsoli</p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Aggelos Tsitsoli — I turn ideas into clean, efficient, and reliable code.</h2>
        <p className="text-lg dark:text-white dark:text-slate-300 max-w-xl mb-6">I’m a software developer at Gloman S.A., currently working on the SportFM website and CMS. I specialize in both frontend and backend development using Java, JavaScript, and modern web technologies.</p>

        <div className="flex gap-3">
          <a href="#work" className="inline-flex items-center gap-2 border-slate-200 border px-5 py-3 rounded-lg bg-primary font-medium shadow hover:scale-[1.02] transition-transform dark:border-slate-700 text-sm dark:text-white dark:text-slate-200 focus-ring">View Work</a>
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-sm   dark:text-white focus-ring">Contact</a>
        </div>

        <div className="mt-6 text-sm  dark:text-white">
          <span className="mr-2">Currently:</span>
          <span className="inline-block px-2 py-1 rounded  border border-white dark:text-white">Working at Gloman S.A.</span>
        </div>
      </div>

     <div className="relative w-full h-100 rounded-2xl border border-white dark:bg-none dark:bg-neutral-900 shadow-lg flex flex-col items-center justify-center overflow-hidden">
  {/* Inner image container */}
  <div className="relative w-[97%] h-[95%] rounded-xl overflow-hidden shadow-md">
    <Image
      src={isDark ? "/carbon (3).svg" : "/carbon (2).svg"}
      alt="Shell program interface illustration"
      fill
      className="object-cover object-center"
    />
  </div>

  {/* GitHub section */}
  {/* <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-black/80 text-white text-sm px-3 py-1.5 rounded-full hover:bg-black transition">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-4 h-4"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1 .1.8-.6 1.8-.8 1.4-.3 2.9-.7 2.9-3.2 0-.8-.3-1.5-.8-2 1-.1 2.1-.4 3.2-.8.1.1.2.2.3.4.1.1.2.2.3.3.7-.2 1.4-.4 2.2-.4.7 0 1.3.2 2 .4.3-.1.6-.3.8-.4 1 .3 2.2.6 3.2.8-.5.5-.8 1.2-.8 2 0 2.5 1.5 2.9 2.9 3.2 1 .2.8.9 1.8.8 0 0 .7-1.2 1.9-1.3 0 0 1.2 0 .1.8 0 0-.8.4-1.4 1.8 0 0-.7 2.1-3.9 1.4v2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
    </svg>
    <span>GitHub</span>
  </div> */}
</div>

    </section>
  );
}


