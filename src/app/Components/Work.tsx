import Image from "next/image";

export default function Work() {
  return (
    <section id="work" className="mb-14">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">Selected work</h3>
        {/* <a href="#" className="text-sm text-slate-500 hover:underline">See all projects →</a> */}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project card (repeatable) */}
        <article className="group border border-white rounded-2xl p-5   shadow hover:shadow-xl transition-shadow focus-ring">
          <div className="relative h-40 rounded-lg overflow-hidden mb-4 bg-gradient-to-b from-primary/10 to-transparent flex items-end p-4">
            <Image
              src="/bus.png" // <-- your image file path here
              alt="Shell program interface illustration"
              fill
              className="object-cover"
            />
            </div>
            <div className="p-1">
            <h4 className="text-lg font-semibold">Creation Of A Shell Like Bash</h4>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">Program that works exactly like a shell. Basically by giving commands to the command line the shell works accordingly.</p>
          <div className="flex items-center justify-between text-xs  dark:text-white">
            <span>• C</span>
            <a className="underline" href="https://github.com/Angelos-Tsitsoli/Creation-Of-A-Shell">See Project</a>
          </div>
        </article>

        <article className="group border border-white rounded-2xl p-5   shadow hover:shadow-xl transition-shadow focus-ring">
          <div className="relative h-40 rounded-lg overflow-hidden mb-4 bg-gradient-to-b from-primary/10 to-transparent flex items-end p-4">
            <Image
              src="/theairbnb.png" // <-- your image file path here
              alt="Shell program interface illustration"
              fill
              className="object-cover"
            />
            </div>
            <div className="p-1">
            <h4 className="text-lg font-semibold">Data Mining</h4>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">Using data from a well-known home rental application (airbnb). Specifically,  data for the Athens area for 3 months in 2019 and 2023 in order to get insights on rental price trends, create graphs and visualizations.</p>
          <div className="flex items-center justify-between text-xs dark:text-white">
            <span>• Python</span>
            <a className="underline" href="https://github.com/Angelos-Tsitsoli/Data-Mining-Project">See Project</a>
          </div>
        </article>

        {/* placeholder for more cards */}
        {/* <article className="group rounded-2xl p-5 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/60 dark:to-slate-800/30 backdrop-blur shadow transition-shadow focus-ring">
          <div className="h-40 rounded-lg overflow-hidden mb-4 flex items-end p-4 bg-slate-100 dark:bg-slate-700/40">
            <h4 className="text-lg font-semibold">Project Three</h4>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">Another short description. Replace these cards with your content or generate them dynamically.</p>
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Accessibility</span>
            <a className="underline" href="#">Case study</a>
          </div>
        </article> */}
      </div>
    </section>
  );
}