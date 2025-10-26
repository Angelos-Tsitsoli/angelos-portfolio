export default function Footer() {
  return (
        <footer className="mt-12 py-6 text-sm text-slate-500 border-t border-slate-100 dark:border-slate-700">
      <div className="flex items-center justify-between">
        <div>© <span id="year">2025</span> Aggelos Tsitsoli. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a className="text-slate-500 hover:text-slate-700">Athens, Greece</a>
          {/* <a className="text-slate-500 hover:text-slate-700">Terms</a> */}
        </div>
      </div>
    </footer>
  );
}


