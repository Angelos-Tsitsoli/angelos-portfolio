"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    console.log("✅ ClientScripts loaded!");
    // --- Set current year ---
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear().toString();
    }

    // --- Theme toggle ---
    const html = document.documentElement;
    const btn = document.getElementById("themeToggle");

    const toggleTheme = () => {
         console.log("🌓 Theme button clicked!");
      html.classList.toggle("dark");
    };

    if (btn) btn.addEventListener("click", toggleTheme);

    // --- Smooth scroll for internal links ---
    // const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    // const handleClick = (e: MouseEvent, target: HTMLElement | null) => {
    //   if (target) {
    //     e.preventDefault();
    //     target.scrollIntoView({ behavior: "smooth", block: "start" });
    //   }
    // };

    // links.forEach((link) => {
    //   const targetId = link.getAttribute("href");
    //   if (targetId) {
    //     const target = document.querySelector<HTMLElement>(targetId);
    //     link.addEventListener("click", (e) => handleClick(e, target));
    //   }
    // });

    // --- Cleanup ---
    return () => {
      if (btn) btn.removeEventListener("click", toggleTheme);
    //   links.forEach((link) => {
    //     const targetId = link.getAttribute("href");
    //     if (targetId) {
    //       const target = document.querySelector<HTMLElement>(targetId);
    //       link.removeEventListener("click", (e) => handleClick(e, target));
    //     }
    //   });
    };
  }, []);

  return null;
}
