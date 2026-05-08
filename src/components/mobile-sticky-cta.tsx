import Link from "next/link";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <Link
        href="/contact"
        className="interactive-lift block rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700"
      >
        Book a Discovery Call
      </Link>
    </div>
  );
}
