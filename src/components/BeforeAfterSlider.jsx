"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Sliders, CheckCircle2, AlertTriangle } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="hasil" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-sky-700">
            Bukti Nyata & Kualitas Kerja
          </span>
          <h2 className="mt-2 text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Hasilnya Beda! Lihat Sendiri Bedanya.
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Geser pemisah ke kanan atau ke kiri untuk melihat perbandingan kisi-kisi AC sebelum dicuci
            penuh debu dan jamur versus sesudah disemprot bersih oleh teknisi SHANK CARE.
          </p>
        </div>

        {/* Comparison Showcase Container */}
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          {/* Interactive Slider Box (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border-2 border-slate-200 bg-slate-900 shadow-xl select-none">
              {/* "BEFORE" Image Layer (Dirty AC Coil) */}
              <div className="absolute inset-0 size-full">
                {/* Fallback stylized dirty coil representation or real photo */}
                <div className="relative size-full bg-slate-800">
                  <Image
                    src="/hero-technician.jpg"
                    alt="Evaporator AC Kotor Sebelum Dicuci"
                    fill
                    className="object-cover filter contrast-125 brightness-75 sepia-[0.3]"
                  />
                  {/* Dark dirty dust overlay effect for realism */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-950/60 via-slate-950/70 to-slate-900/60 mix-blend-multiply" />
                </div>
              </div>

              {/* "AFTER" Image Layer (Clean AC Coil, clipped by width) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div
                  className="relative h-full"
                  style={{ width: `${(100 / sliderPosition) * 100}%` }}
                >
                  <Image
                    src="/hero-technician.jpg"
                    alt="Evaporator AC Bersih Sesudah Dicuci"
                    fill
                    className="object-cover filter brightness-110 contrast-105"
                  />
                  {/* Clean ice fresh blue glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 via-transparent to-transparent mix-blend-screen" />
                </div>
              </div>

              {/* Divider Line */}
              <div
                className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.6)] cursor-col-resize z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Drag Handle Knob */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex size-10 items-center justify-center rounded-full border-2 border-white bg-sky-600 text-white shadow-lg">
                  <Sliders className="size-4 rotate-90" />
                </div>
              </div>

              {/* Badges Overlay */}
              <div className="absolute top-4 left-4 z-10 rounded-full bg-emerald-600/90 backdrop-blur-md px-3.5 py-1 text-xs font-black text-white shadow-md">
                SESUDAH (Bersih & Dingin)
              </div>
              <div className="absolute top-4 right-4 z-10 rounded-full bg-slate-900/80 backdrop-blur-md px-3.5 py-1 text-xs font-black text-white shadow-md">
                SEBELUM (Penuh Debu)
              </div>

              {/* Native Range Input for accessibility & smooth touch */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                aria-label="Geser untuk membandingkan sebelum dan sesudah"
                className="absolute inset-0 size-full opacity-0 cursor-col-resize z-30"
              />
            </div>

            <p className="mt-3 text-center text-xs text-slate-500 font-medium">
              &larr; Geser ke kiri &bull; Geser ke kanan &rarr;
            </p>
          </div>

          {/* Right Column: Key Benefits of Proper Cleaning (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-5">
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white">
                  <Sparkles className="size-4" />
                </span>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm">Hembusan Angin Jadi Kencang</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Blower fan dan kisi kisi yang bebas debu membuat udara dingin keluar optimal
                    sehingga ruangan cepat sejuk dalam hitungan menit.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5">
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <CheckCircle2 className="size-4" />
                </span>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm">Bebas Bau Apek & Alergi</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Jamur dan bakteri yang menempel di evaporator dihilangkan menyeluruh sehingga
                    udara aman dihirup anak dan lansia.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-5">
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-amber-600 text-white">
                  <AlertTriangle className="size-4" />
                </span>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm">Cegah Kompresor Cepat Rusak</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    AC yang kotor memaksa kompresor bekerja non-stop memakan listrik tinggi. Cuci
                    rutin 3 bulan sekali menghemat pulsa token listrik Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
