"use client";

import Image from "next/image";
import React , { useEffect, useState } from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-10 ">
       <div className="top-left-info flex items-center gap-3">
            <div className="bg-white w-15 h-15 flex items-center gap-3 rounded-lg shadow-lg justify-center ">
                {/* <svg  width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"> */}
                 <Image
                      src="/Aggelos.jpg"
                      alt="Shell program interface illustration"
                      width={40}
                      height={40}
                      className="object-cover object-center"
                    />
                {/* </svg> */}
            </div>
            <div className="short-desc">
                <h1 className="text-lg font-semibold"> Aggelos Tsitsoli</h1>
                <p className="text-xs text-slate-500 dark:text-white">• Software Developer at Gloman S.A. 
                </p>
            </div>
       </div>
       <div className="top-right flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 text-sm  dark:text-white">
            <a className="hover:underline focus-ring" href="#about">About</a>
            <a className="hover:underline focus-ring" href="#work">Work</a>
            <a className="hover:underline focus-ring" href="#skills">Skills</a>
            <a className="hover:underline focus-ring" href="#contact">Contact</a>
            </nav>
            <button id="themeToggle" aria-label="Toggle dark mode" className="p-2 rounded-md focus-ring">
                <svg id="moon" className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>
       </div>
    </header>
  );
}