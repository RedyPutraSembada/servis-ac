"use client";

import { Check, Sparkles, Shield, Wrench, Wind, ArrowRight } from "lucide-react";

export default function Services({ onSelectPackage }) {
  const packages = [
    {
      id: "standar",
      name: "Cuci AC Standar",
      badge: "Harga Spesial Poster",
      badgeClass: "bg-sky-100 text-sky-800 border border-sky-300",
      price: 70000,
      originalPrice: 85000,
      period: "/ unit AC",
      description: "Perawatan rutin agar AC tetap dingin, hembusan segar, & hemat tagihan listrik.",
      features: [
        "Cuci Unit Indoor & Outdoor Menyeluruh",
        "Pembersihan Filter Udara & Casing AC",
        "Cek Kondisi & Aliran Udara",
        "Pembersihan Talang & Selang Pembuangan Air",
        "Gratis Semprot Pengharum Ruangan",
      ],
      isPopular: false,
      btnClass: "border-sky-600 text-sky-700 hover:bg-sky-600 hover:text-white",
    },
    {
      id: "premium",
      name: "Cuci AC Premium Snow Foam",
      badge: "Paling Bersih & Sehat",
      badgeClass: "bg-amber-400 text-slate-950 font-black",
      price: 95000,
      originalPrice: 120000,
      period: "/ unit AC",
      description: "Pembersihan mendalam menggunakan salju pembersih & disinfeksi antibakteri.",
      features: [
        "Semua manfaat Cuci AC Standar",
        "Snow Foam Cleaning (Rontokkan kotoran membandel)",
        "Treatment Anti Bakteri & Pembunuh Jamur",
        "GARANSI Pengerjaan 7 Hari",
        "Gratis Pengharum Ruangan Ekstra Fresh",
        "Prioritas Booking Slot Jadwal",
      ],
      isPopular: true,
      cardBg: "bg-gradient-to-b from-sky-800 to-blue-900 text-white shadow-xl shadow-sky-900/20",
      btnClass: "bg-amber-400 text-slate-950 hover:bg-amber-300 font-extrabold shadow-md",
    },
    {
      id: "swing",
      name: "Perbaikan Swing & Ringan",
      badge: "Sesuai Flyer Resmi",
      badgeClass: "bg-slate-100 text-slate-800 border border-slate-200",
      price: 50000,
      originalPrice: null,
      period: "mulai dari",
      description: "Swing AC patah, tidak bergerak, atau macet? Kami perbaiki rapi.",
      features: [
        "Perbaikan dudukan / tuas swing yang patah",
        "Pengecekan / penggantian motor swing",
        "Cek respon sensor remote kontrol",
        "Pemeriksaan jalur kabel kelistrikan",
      ],
      isPopular: false,
      btnClass: "border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white",
    },
    {
      id: "freon",
      name: "Service & Tambah Freon",
      badge: "Diagnosa Jujur",
      badgeClass: "bg-emerald-100 text-emerald-800 border border-emerald-300",
      price: 0,
      priceLabel: "Sesuai Pengecekan",
      period: "",
      description: "AC kurang dingin, pipa beku, atau ada kebocoran? Dikerjakan transparan.",
      features: [
        "Pengukuran tekanan gas freon (Manifold)",
        "Isi / Tambah Freon R32, R410A, atau R22",
        "Deteksi titik kebocoran pipa & sambungan",
        "Biaya dikonfirmasi sebelum tindakan",
      ],
      isPopular: false,
      btnClass: "border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white",
    },
  ];

  return (
    <section id="layanan" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-sky-700">
            Daftar Paket & Harga Terbuka
          </span>
          <h2 className="mt-2 text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Pilihan Layanan Sesuai Kebutuhan AC Anda
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
            Harga transparan tanpa biaya tersembunyi. Dikerjakan dengan teliti menggunakan peralatan
            lengkap dan perlindungan tempat agar ruangan tetap bersih.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                pkg.isPopular
                  ? `${pkg.cardBg} ring-2 ring-sky-500 scale-[1.02]`
                  : "bg-white border border-slate-200/80 shadow-md shadow-slate-200/50 hover:shadow-xl"
              }`}
            >
              {/* Badge Header */}
              {pkg.badge && (
                <div className="mb-4">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold ${pkg.badgeClass}`}
                  >
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                <h3
                  className={`text-lg font-black ${
                    pkg.isPopular ? "text-white" : "text-slate-900"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`mt-1.5 text-xs leading-relaxed ${
                    pkg.isPopular ? "text-sky-100" : "text-slate-500"
                  }`}
                >
                  {pkg.description}
                </p>

                {/* Pricing Number */}
                <div className="mt-5 pb-5 border-b border-current/10">
                  {pkg.price > 0 ? (
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span
                          className={`text-2xl font-black ${
                            pkg.isPopular ? "text-amber-300" : "text-slate-900"
                          }`}
                        >
                          Rp {pkg.price.toLocaleString("id-ID")}
                        </span>
                        <span
                          className={`text-xs font-semibold ${
                            pkg.isPopular ? "text-sky-200" : "text-slate-400"
                          }`}
                        >
                          {pkg.period}
                        </span>
                      </div>
                      {pkg.originalPrice && (
                        <span
                          className={`text-xs line-through ${
                            pkg.isPopular ? "text-sky-300" : "text-slate-400"
                          }`}
                        >
                          Rp {pkg.originalPrice.toLocaleString("id-ID")}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div>
                      <span
                        className={`text-xl font-black ${
                          pkg.isPopular ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {pkg.priceLabel}
                      </span>
                      <p
                        className={`text-[11px] mt-0.5 ${
                          pkg.isPopular ? "text-sky-200" : "text-slate-500"
                        }`}
                      >
                        Transparan setelah dicek teknisi
                      </p>
                    </div>
                  )}
                </div>

                {/* Features List */}
                <ul className="mt-5 space-y-2.5 text-xs">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span
                        className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full ${
                          pkg.isPopular
                            ? "bg-amber-400/20 text-amber-300"
                            : "bg-sky-100 text-sky-700"
                        }`}
                      >
                        <Check className="size-3 stroke-[3]" />
                      </span>
                      <span
                        className={
                          pkg.isPopular ? "text-slate-100 font-medium" : "text-slate-700 font-medium"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4">
                <a
                  href="#booking"
                  onClick={() => {
                    if (onSelectPackage) onSelectPackage(pkg.id);
                  }}
                  className={`flex w-full items-center justify-center gap-2 rounded-2xl py-3 px-4 text-xs font-bold transition-all ${
                    pkg.btnClass
                  }`}
                >
                  <span>Pilih & Booking</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Strip */}
        <div className="mt-12 rounded-2xl border border-sky-100 bg-sky-50/70 p-5 text-center text-xs text-sky-950 sm:flex sm:items-center sm:justify-between sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Shield className="size-5 text-sky-700 shrink-0" />
            <p>
              <strong>Garansi Pengerjaan & Kenyamanan:</strong> Jika ada kendala setelah pengerjaan,
              tim SHANK CARE siap kembali merespons dengan cepat dan ramah.
            </p>
          </div>
          <a
            href="https://wa.me/6282315341681?text=Halo%20Shank%20Care%2C%20saya%20mau%20konsultasi%20kendala%20AC"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block shrink-0 rounded-xl bg-white px-4 py-2 text-xs font-extrabold text-sky-800 shadow-sm hover:bg-sky-100 sm:mt-0"
          >
            Konsultasi Gratis WA
          </a>
        </div>
      </div>
    </section>
  );
}
