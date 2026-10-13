"use client";

import Image from "next/image";
import {
  Calendar,
  ShieldCheck,
  Star,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Wind,
} from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background Ambient Glows with Brand Palette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-gradient-to-br from-sky-200/50 via-blue-100/40 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-1/3 -right-20 size-[400px] rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute bottom-10 -left-20 size-[450px] rounded-full bg-blue-200/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="flex flex-col items-start">
            {/* Urgency Announcement Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-3.5 py-1.5 text-xs font-bold text-sky-800 shadow-sm backdrop-blur-md">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex size-2.5 rounded-full bg-sky-600"></span>
              </span>
              <span>Buka Rabu, Jumat, Sabtu &bull; Slot Terbatas Setiap Hari!</span>
            </div>

            {/* Tagline Subtitle */}
            <span className="mb-3 inline-flex items-center gap-2 text-xs md:text-sm font-extrabold uppercase tracking-wider text-sky-700">
              <Wind className="size-4 text-sky-600" /> Jasa Cuci AC Pademangan & Wisma Atlet
            </span>

            {/* Main Headline */}
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              AC Bersih.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-800">
                Dingin Maksimal.
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg leading-relaxed">
              Solusi perawatan AC profesional untuk rumah & apartemen. Dikerjakan oleh teknisi
              berpengalaman dengan peralatan steam modern, rapi, bersih, dan hemat listrik untuk
              keluarga.
            </p>

            {/* Special Promo Highlight Callout */}
            <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-sky-200/90 bg-gradient-to-r from-sky-50 via-blue-50/70 to-indigo-50/50 p-4 shadow-sm">
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                  Harga Promo Spesial
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900">Rp 70.000</span>
                  <span className="text-sm font-bold text-slate-500">/ unit AC</span>
                </div>
              </div>
              <div className="h-8 w-px bg-sky-200 hidden sm:block" />
              <div className="flex flex-col gap-1 text-xs font-semibold text-slate-700">
                <span className="inline-flex items-center gap-1 text-sky-800">
                  <Sparkles className="size-3.5 text-sky-600" /> Lebih Dingin, Lebih Sehat
                </span>
                <span className="inline-flex items-center gap-1 text-sky-800">
                  <Zap className="size-3.5 text-amber-500" /> Hemat Listrik Maksimal
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-sky-600/25 transition-all hover:shadow-xl hover:shadow-sky-600/35 hover:brightness-110 active:scale-95"
              >
                <span>Booking Jadwal Sekarang</span>
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-6 py-4 text-sm font-bold text-slate-800 shadow-sm backdrop-blur-md transition-all hover:bg-slate-50 hover:border-slate-300"
              >
                <span>Lihat Paket & Harga</span>
              </a>
            </div>

            {/* Trust Proof Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-5 text-xs font-medium text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-sky-600" /> Kerapian & Kepuasan Terjamin
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="size-4 fill-amber-400 text-amber-400" /> 4.9/5 Kepuasan Pelanggan
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-600" /> Area Pademangan & Wisma Atlet
              </span>
            </div>
          </div>

          {/* Right Column: Authentic Technician Visual */}
          <div className="relative">
            {/* Visual Card Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none overflow-hidden rounded-[2.2rem] border-2 border-sky-100 bg-white p-3 shadow-2xl shadow-sky-950/10">
              <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-[1.8rem] bg-slate-100">
                <Image
                  src="/hero-technician.jpg"
                  alt="Teknisi SHANK CARE sedang membersihkan AC dengan profesional"
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              {/* Floating Badge 1: Statistics */}
              <div className="absolute -bottom-4 -left-3 sm:-left-5 rounded-2xl border border-sky-100 bg-white/95 px-5 py-3 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700 font-black">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-slate-900 leading-none">1.200+</p>
                    <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
                      Unit AC Sukses Ditangani
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Operating Days */}
              <div className="absolute -top-3 -right-3 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2.5 text-white shadow-xl">
                <p className="text-[10px] font-bold uppercase tracking-wider text-sky-200">
                  Jadwal Buka
                </p>
                <p className="text-xs font-extrabold">RABU &bull; JUMAT &bull; SABTU</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
