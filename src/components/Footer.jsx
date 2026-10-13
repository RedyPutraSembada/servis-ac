"use client";

import Image from "next/image";
import { Phone, MapPin, Calendar, ShieldCheck, Heart } from "lucide-react";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.5 6.27 6.27 0 0 0 1.88-4.49V8.42a8.28 8.28 0 0 0 4.89 1.58V6.69z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative size-11 overflow-hidden rounded-xl border border-sky-400/30 bg-white">
                <Image
                  src="/shank-logo.jpg"
                  alt="Logo SHANK CARE"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-tight leading-none block">
                  SHANK <span className="text-sky-400">CARE</span>
                </span>
                <span className="text-[10px] text-sky-300 font-semibold uppercase tracking-wider block mt-0.5">
                  AC Bersih, Udara Lebih Sehat
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              Jasa spesialis cuci, service, dan perbaikan AC profesional terpercaya di kawasan Wisma
              Atlet dan Pademangan, Jakarta Utara.
            </p>

            <div className="inline-flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-sky-300">
              <Calendar className="size-3.5" />
              <span>Buka: Rabu, Jumat, & Sabtu</span>
            </div>
          </div>

          {/* Col 2: Official Contacts from Badge */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
              Kontak & Sosial Media
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="https://wa.me/6282315341681?text=Halo%20Shank%20Care%2C%20saya%20ingin%20tanya%20layanan%20cuci%20AC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800">
                    <Phone className="size-3.5 fill-current" />
                  </span>
                  <span>WA: 0823-1534-1681</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/Shank_Services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-pink-400 transition-colors"
                >
                  <span className="flex size-7 items-center justify-center rounded-lg bg-pink-950/60 text-pink-400 border border-pink-800">
                    <InstagramIcon className="size-3.5" />
                  </span>
                  <span>IG: @Shank_Services</span>
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@shank.care.wislet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <span className="flex size-7 items-center justify-center rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-800">
                    <TikTokIcon className="size-3.5" />
                  </span>
                  <span>TikTok: shank.care.wislet</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400 pt-1">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-sky-400 border border-slate-800">
                  <MapPin className="size-3.5" />
                </span>
                <span>Wisma Atlet & Pademangan, Jakarta Utara</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Paket Layanan */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Cuci AC Standar (Rp 70.000)
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Cuci AC Premium Snow Foam
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Perbaikan Swing AC Macet / Patah
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Isi & Tambah Freon R32 / R410A / R22
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Cuci Overhaul (Bongkar Bersih Total)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Keunggulan & Jaminan */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
              Standar Layanan
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-sky-400" />
                <span>Garansi Pengerjaan Rapi</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-sky-400" />
                <span>Corong Terpal Bebas Bocor</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-sky-400" />
                <span>Harga Transparan Tanpa Getok</span>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-gradient-to-r from-sky-950 to-blue-950 border border-sky-800/50 p-3.5">
              <p className="text-[11px] font-bold text-sky-200">Perlu Penjadwalan Cepat?</p>
              <p className="text-[10px] text-slate-400 mt-0.5">
                Langsung kontak via WhatsApp untuk respon instan.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SHANK CARE. Hak cipta dilindungi.</p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Dibuat dengan</span>
            <Heart className="size-3 text-red-500 fill-red-500" />
            <span>untuk kenyamanan warga Wisma Atlet & Pademangan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
