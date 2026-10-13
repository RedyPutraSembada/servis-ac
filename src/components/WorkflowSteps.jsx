"use client";

import { Calendar, Search, Droplets, CheckCircle, Sparkles } from "lucide-react";

export default function WorkflowSteps() {
  const steps = [
    {
      num: "01",
      title: "Booking Online",
      desc: "Pilih paket, jumlah unit AC, dan hari operasional (Rabu, Jumat, atau Sabtu).",
      icon: Calendar,
    },
    {
      num: "02",
      title: "Pengecekan Awal",
      desc: "Teknisi tiba tepat waktu, memeriksa kondisi awal AC, aliran udara, & keluhan.",
      icon: Search,
    },
    {
      num: "03",
      title: "Pengerjaan Rapi & Bersih",
      desc: "Pasang plastik corong pelindung. Cuci indoor, outdoor, casing, & pembuangan air.",
      icon: Droplets,
    },
    {
      num: "04",
      title: "Quality Check & Tes Dingin",
      desc: "Ukur hembusan suhu dingin, bersihkan sisa air, dan garansi kepuasan pelanggan.",
      icon: CheckCircle,
    },
  ];

  const acBrands = [
    "DAIKIN",
    "PANASONIC",
    "SHARP",
    "LG",
    "SAMSUNG",
    "GREE",
    "MIDEA",
    "AQUA",
    "AUX",
    "CHANGHONG",
    "POLYTRON",
    "MITSUBISHI",
  ];

  return (
    <section id="cara-kerja" className="scroll-mt-24 py-16 md:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-sky-700">
            Standar Operasional Rapi
          </span>
          <h2 className="mt-2 text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Proses Pengerjaan 4 Langkah Mudah
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Dari pemesanan hingga pengetesan, setiap unit ditangani dengan teliti tanpa merusak
            perabotan atau mengotori lantai ruangan Anda.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Icon className="size-6" />
                    </span>
                    <span className="text-xl font-black text-sky-200 group-hover:text-sky-500 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-extrabold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{step.desc}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-sky-700">
                  <Sparkles className="size-3" />
                  <span>Teknisi Profesional</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Marquee Running Bar */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-white py-4 shadow-sm">
          <div className="mb-2 text-center text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Melayani Semua Tipe & Merek AC Terpopuler
          </div>
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-10 py-1">
              {[...acBrands, ...acBrands].map((brand, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 text-xs md:text-sm font-black tracking-wider text-slate-600"
                >
                  <span className="size-1.5 rounded-full bg-sky-500" />
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
