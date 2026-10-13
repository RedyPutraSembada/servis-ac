"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Calendar, Menu, X, ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Paket & Harga", href: "#layanan" },
    { label: "Jadwal", href: "#jadwal" },
    { label: "Hasil Kerja", href: "#hasil" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "Booking", href: "#booking" },
    { label: "Ulasan", href: "#ulasan" },
    { label: "Lokasi", href: "#tentang" },
  ];

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 transition-all duration-300">
      <div
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl px-4 md:px-6 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg shadow-sky-950/5 border border-sky-100"
            : "bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm"
        }`}
      >
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative size-10 overflow-hidden rounded-xl border border-sky-200 shadow-sm transition-transform group-hover:scale-105">
            <Image
              src="/shank-logo.jpg"
              alt="Logo SHANK CARE"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base md:text-lg tracking-tight text-slate-900 leading-none">
              SHANK <span className="text-sky-600">CARE</span>
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-wider">
              AC BERSIH &bull; SEHAT
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-sky-50 hover:text-sky-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center gap-2.5 sm:flex">
          <a
            href="https://wa.me/6282315341681?text=Halo%20Shank%20Care%2C%20saya%20mau%20tanya%20jadwal%20cuci%20AC"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700 transition-colors hover:bg-emerald-100 md:inline-flex"
          >
            <Phone className="size-3.5 fill-current" />
            <span>0823-1534-1681</span>
          </a>

          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-sky-600/20 transition-all hover:shadow-lg hover:shadow-sky-600/30 hover:brightness-105 active:scale-95"
          >
            <Calendar className="size-3.5" />
            <span>Booking Sekarang</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-sky-100 bg-white/95 p-4 shadow-xl backdrop-blur-lg lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5">
            {/* Urgency Badge in Menu */}
            <div className="mb-2 flex items-center justify-between rounded-xl bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-800">
              <span className="flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-sky-600" />
                Buka: Rabu, Jumat, Sabtu
              </span>
              <span className="rounded-full bg-sky-600 px-2 py-0.5 text-[10px] font-bold text-white">
                Rp 70rb/unit
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-700"
              >
                <span>{link.label}</span>
                <ArrowRight className="size-3.5 text-slate-400" />
              </a>
            ))}

            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 py-3 text-sm font-bold text-white shadow-md shadow-sky-600/20"
              >
                <Calendar className="size-4" />
                <span>Mulai Booking Online</span>
              </a>
              <a
                href="https://wa.me/6282315341681"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-50 py-2.5 text-sm font-bold text-emerald-700"
              >
                <Phone className="size-4" />
                <span>WhatsApp: 0823-1534-1681</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
