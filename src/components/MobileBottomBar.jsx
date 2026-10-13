"use client";

import { Package, CalendarCheck } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-30 flex gap-2 rounded-2xl bg-white/95 p-2 shadow-2xl shadow-slate-900/20 backdrop-blur-lg border border-slate-200/90 md:hidden">
      <a
        href="#layanan"
        className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-bold text-slate-800 transition-transform active:scale-95"
      >
        <Package className="size-4 text-sky-600" />
        <span>Lihat Paket</span>
      </a>
      <a
        href="#booking"
        className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-3 py-2.5 text-xs font-extrabold text-white shadow-md shadow-sky-600/30 transition-transform active:scale-95"
      >
        <CalendarCheck className="size-4" />
        <span>Booking (Rp 70rb)</span>
      </a>
    </div>
  );
}
