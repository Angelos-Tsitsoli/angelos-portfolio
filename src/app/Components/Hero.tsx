"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();

    // Observe <html> class changes for dark mode
    const observer = new MutationObserver(() => checkDarkMode());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Detect mobile
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Choose image source based on mobile and dark mode
  const imageSrc = isMobile
    ? isDark
      ? "/carbon (8).svg"
      : "/carbon (9).svg"
    : isDark
    ? "/carbon (3).svg"
    : "/carbon (2).svg";

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-14">
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Hi, my name is Aggelos Tsitsoli
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Aggelos Tsitsoli — I turn ideas into clean, efficient, and reliable code.
        </h2>
        <p className="text-lg dark:text-slate-300 max-w-xl mb-6">
          I’m a software developer at Gloman S.A., currently working on the SportFM
          website and CMS. I specialize in both frontend and backend development using
          Java, JavaScript, and modern web technologies.
        </p>

        <div className="flex gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 border-slate-200 border px-5 py-3 rounded-lg bg-primary font-medium shadow hover:scale-[1.02] transition-transform dark:border-slate-700 text-sm dark:text-white focus-ring"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-sm dark:text-white focus-ring"
          >
            Contact
          </a>
        </div>

        <div className="mt-6 text-sm dark:text-white">
          <span className="mr-2">Currently:</span>
          <span className="inline-block px-2 py-1 rounded border border-white dark:text-white">
            Working at Gloman S.A.
          </span>
        </div>
      </div>

      {/* Right image section */}
      <div className="relative w-full h-100 rounded-2xl border border-white dark:bg-none dark:bg-neutral-900 shadow-lg flex flex-col items-center justify-center overflow-hidden">
        <div className="relative w-[97%] h-[95%] rounded-xl overflow-hidden shadow-md">
          <Image
            src={imageSrc}
            alt="Shell program interface illustration"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
