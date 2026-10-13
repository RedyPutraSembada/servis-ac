"use client";

import { Calendar, Clock, AlertCircle, CheckCircle, ArrowRight } from "lucide-react";

export default function ScheduleBanner() {
  const scheduleDays = [
    {
      day: "RABU",
      desc: "Sesi Pagi & Sore",
      status: "Tersedia 4 Slot",
      popular: false,
    },
    {
      day: "JUMAT",
      desc: "Sesi Pagi & Sore (Jeda Salat Jumat)",
      status: "Tersedia 3 Slot",
      popular: false,
    },
    {
      day: "SABTU",
      desc: "Weekend Favorit Penghuni",
      status: "Cepat Habis (2 Slot)",
      popular: true,
    },
  ];

  return (
    <section id="jadwal" className="py-10 md:py-14 bg-gradient-to-b from-transparent via-sky-50/60 to-transparent">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-white via-sky-50/50 to-blue-50/40 p-6 sm:p-8 md:p-10 shadow-lg shadow-sky-900/5">
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 size-48 rounded-full bg-sky-200/40 blur-2xl" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 size-48 rounded-full bg-blue-200/40 blur-2xl" />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-sky-100">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-extrabold text-sky-800 mb-2">
                <Clock className="size-3.5 text-sky-600" />
                Jadwal Operasional Resmi
              </div>
              <h2 className="text-2xl font-black text-slate-900 sm:text-3xl tracking-tight">
                Buka Minggu Ini: <span className="text-sky-600">Rabu, Jumat, & Sabtu</span>
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Pengerjaan terfokus untuk memastikan kualitas pembersihan maksimal dan tidak terburu-buru.
              </p>
            </div>

            <a
              href="#booking"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-bold text-white shadow-md hover:bg-slate-800 transition-colors"
            >
              <span>Kunci Slot Waktu</span>
              <ArrowRight className="size-3.5" />
            </a>
          </div>

          {/* 3 Days Cards Grid */}
          <div className="relative mt-6 grid gap-4 sm:grid-cols-3">
            {scheduleDays.map((item, index) => (
              <div
                key={index}
                className={`group relative flex flex-col justify-between rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  item.popular
                    ? "border-sky-400 bg-gradient-to-b from-sky-50 to-white shadow-sky-500/10"
                    : "border-sky-100 bg-white"
                }`}
              >
                {item.popular && (
                  <span className="absolute -top-3 right-4 rounded-full bg-sky-600 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-sm">
                    Paling Cepat Penuh
                  </span>
                )}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                      <Calendar className="size-5" />
                    </span>
                    <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-lg">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-black text-slate-900">{item.day}</h3>
                  <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Jam Layanan:</span>
                  <span className="font-bold text-slate-700">08.00 - 17.00 WIB</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Reminder Alert */}
          <div className="relative mt-6 flex items-center gap-3 rounded-xl bg-amber-50/80 border border-amber-200/80 p-3.5 text-xs text-amber-900">
            <AlertCircle className="size-4 shrink-0 text-amber-600" />
            <p>
              <strong>Slot Terbatas Setiap Hari:</strong> Disarankan melakukan booking 1–2 hari sebelumnya agar mendapatkan jam pengerjaan yang paling nyaman.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
