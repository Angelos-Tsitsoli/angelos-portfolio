export default function AboutMe() {
  return (
    <section id="about" className="mb-14">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold mb-3">About me</h3>
          <p className="dark:text-slate-300 dark:text-white leading-relaxed">I recently graduated from the National and Kapodistrian University of Athens with a degree in Computer Science. I currently work at Gloman S.A., where I develop and maintain both frontend and backend systems for the SportFM website and CMS. Previously, I completed a six-month internship at Netcompany–Intrasoft, gaining valuable experience in software development. I’m passionate about building scalable, efficient, and secure web applications that provide great user experiences and solve real problems.</p>

          {/* <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <li className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 shadow-sm">Design systems &amp; UI</li>
            <li className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 shadow-sm">Prototyping (Figma)</li>
            <li className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 shadow-sm">React &amp; TypeScript</li>
            <li className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 shadow-sm">Performance &amp; accessibility</li>
          </ul> */}
        </div>

        <aside className="hidden md:block p-5 rounded-xl  from-white/50 to-white/30 border border-white ring-1 ring-slate-900/5">
          <h4 className="text-sm font-medium dark:text-white">Contact</h4>
          <p className="text-sm dark:text-white">Email me at</p>
          <a className="text-primary font-medium block mt-2">tsitaggelos@gmail.com</a>
          <p className="text-xs text-slate-400 mt-3">Based in Athens • Available for remote work</p>
        </aside>
      </div>
    </section>
   
  );
}
