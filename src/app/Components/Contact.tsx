"use client";
import React from "react";

export default function Contact() {
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    // Open default email client
    window.location.href = `mailto:tsitaggelos@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `From: ${name} (${email})\n\nMessage:\n${message}`
    )}`;
  };


  return (
    <section id="contact" className="mb-10">
      <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <form className="p-6 rounded-2xl border border-white  shadow-md backdrop-blur" onSubmit={handleSubmit}>
          <label className="block mb-3 text-sm dark">Name
            <input required name="name" className="mt-2 block w-full rounded-md p-3 border border-slate-200 placeholder-gray-400  bg-transparent focus-ring" placeholder="Your name"/>
          </label>

          <label className="block mb-3 text-sm dark">Email
            <input required name="email" type="email" className="mt-2 block w-full rounded-md p-3 border border-slate-200 placeholder-gray-400  bg-transparent focus-ring" placeholder="you@domain.com"/>
          </label>

          <label className="block mb-3 text-sm">Message
            <textarea required name="message" className="mt-2 block w-full rounded-md p-3 border border-slate-200 dark:border-slate-700 placeholder-gray-400 bg-transparent focus-ring" rows={4} placeholder="Say hi — I reply fast."></textarea>
          </label>

            <button
              type="submit"
              className="mt-3 border border-white inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary  font-semibold shadow-md hover:bg-primary/90 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
            >
              Send message
            </button>
        </form>

        <div className="p-6 rounded-2xl border border-white from-white/60 to-white/30 dark:from-slate-800/60 dark:to-slate-800/30 ring-1 ring-slate-900/5">
          <h4 className="text-lg font-semibold">Other ways to reach me</h4>
          <ul className="mt-4 space-y-3 text-sm  dark:text-white">
            <li>• Email: <a className="underline">tsitaggelos@gmail.com</a></li>
            <li>• GitHub: <a className="underline" href="https://github.com/Angelos-Tsitsoli" target= "_blank">github.com/Angelos-Tsitsoli</a></li>
            <li>• LinkedIn: <a className="underline" href="https://www.linkedin.com/in/aggelos-tsitsoli-586b03360/" target="_blank">https://www.linkedin.com/in/aggelos-tsitsoli-586b03360/</a></li>
          </ul>
        </div>
      </div>
    </section>
    
  );
}

