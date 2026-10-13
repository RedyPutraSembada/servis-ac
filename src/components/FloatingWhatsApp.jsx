"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6282315341681?text=Halo%20SHANK%20CARE%2C%20saya%20mau%20konsultasi%20%2F%20booking%20jadwal%20cuci%20AC"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi WhatsApp SHANK CARE"
      className="group fixed bottom-24 right-4 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] p-3.5 text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 hover:bg-[#20ba59] md:bottom-6 md:right-6 md:z-50"
    >
      <div className="relative">
        <MessageCircle className="size-6 fill-current" />
        <span className="absolute -top-1 -right-1 flex size-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-white" />
        </span>
      </div>
      <span className="hidden pr-1.5 text-xs font-black tracking-wide sm:inline">
        Chat CS WhatsApp
      </span>
    </a>
  );
}
