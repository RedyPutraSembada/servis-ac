"use client";

import Image from "next/image";
import {
  MapPin,
  ExternalLink,
  ShieldCheck,
  Award,
  Users,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function AboutAndCoverage() {
  const pillars = [
    {
      title: "Teknisi Berpengalaman",
      desc: "Dikerjakan oleh teknisi berpengalaman, terlatih, dan paham seluk-beluk berbagai tipe AC.",
      icon: Users,
    },
    {
      title: "Aman & Terpercaya",
      desc: "Peralatan lengkap, corong terpal pelindung dinding & kasur, proses higienis & rapi.",
      icon: ShieldCheck,
    },
    {
      title: "Pelayanan Ramah & Responsif",
      desc: "Admin dan teknisi komunikatif, menjelaskan kondisi AC secara jujur tanpa getok harga.",
      icon: Sparkles,
    },
    {
      title: "Kualitas & Hasil Maksimal",
      desc: "Fokus pada kebersihan kisi evaporator & outdoor agar AC kembali dingin maksimal & hemat listrik.",
      icon: Award,
    },
  ];

  return (
    <section id="tentang" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Column: About Profile */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3.5 py-1.5 text-xs font-extrabold text-sky-800 mb-3">
              <CheckCircle className="size-3.5 text-sky-600" />
              Tentang SHANK CARE
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Mitra Kesegaran AC Anda di <span className="text-sky-600">Pademangan</span>
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-600">
              <strong>SHANK CARE</strong> hadir sebagai penyedia layanan cuci, service, dan
              perawatan pendingin ruangan (AC) terpercaya yang berbasis di sekitar Wisma Atlet dan
              Pademangan, Jakarta Utara.
            </p>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-600">
              Kami percaya bahwa AC yang bersih bukan sekadar membuat ruangan dingin, tapi juga
              menjaga kualitas pernapasan keluarga agar terbebas dari debu dan jamur, sekaligus
              menghemat konsumsi daya listrik harian Anda.
            </p>

            {/* Statistics Row */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { number: "1.200+", label: "Unit AC Dicuci" },
                { number: "4.9/5", label: "Rating Kepuasan" },
                { number: "100%", label: "Teknisi Terlatih" },
                { number: "R, J, S", label: "Hari Buka Rutin" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-sky-100 bg-sky-50/50 p-3.5 text-center"
                >
                  <p className="text-xl font-black text-sky-800">{stat.number}</p>
                  <p className="mt-0.5 text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* 4 Pillars Grid */}
            <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50/50 p-4"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{p.title}</h4>
                      <p className="mt-1 text-[11px] leading-relaxed text-slate-500">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Google Maps & Coverage Area */}
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              {/* Header Box with Logo Badge */}
              <div className="flex items-center justify-between border-b border-slate-100 p-4 bg-slate-50/80">
                <div className="flex items-center gap-3">
                  <div className="relative size-10 overflow-hidden rounded-xl border border-sky-200 shadow-sm">
                    <Image
                      src="/shank-logo.jpg"
                      alt="Logo SHANK CARE"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 leading-none">
                      Area Layanan Utama
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Wisma Atlet & Pademangan, Jakarta Utara
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-black text-emerald-800">
                  Gratis Ongkir
                </span>
              </div>

              {/* Embedded Google Maps */}
              <div className="relative aspect-[16/11] w-full bg-slate-100">
                <iframe
                  title="Peta Lokasi Layanan SHANK CARE Pademangan"
                  src="https://www.google.com/maps?q=Wisma+Atlet+Kemayoran+Pademangan+Jakarta+Utara&output=embed"
                  className="size-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Bottom Details Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 bg-white">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <MapPin className="size-4 text-sky-600 shrink-0" />
                  <span>Siap melayani seluruh Tower Wisma Atlet, Rusunami, & sekitarnya</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Wisma+Atlet+Kemayoran+Pademangan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 shrink-0 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800 transition-colors"
                >
                  <span>Buka di Maps</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
