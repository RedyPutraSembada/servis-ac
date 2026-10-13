"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Berapa lama durasi pengerjaan cuci 1 unit AC?",
      a: "Umumnya memakan waktu sekitar 40 hingga 55 menit per unit AC. Pengerjaan dilakukan detail mulai dari membongkar cover casing, memasang corong terpal pelindung, steam semprot evaporator, bersihkan blower fan, cuci filter, hingga cuci unit kondensor outdoor.",
    },
    {
      q: "Kenapa jadwal utamanya hari Rabu, Jumat, dan Sabtu?",
      a: "Kami memusatkan jadwal pengerjaan rutin pada hari Rabu, Jumat, dan Sabtu untuk klaster Wisma Atlet & Pademangan agar mobilitas teknisi efisien dan tidak terburu-buru demi menjaga kualitas pengerjaan. Untuk permintaan khusus hari lain, Anda tetap bisa berkoordinasi langsung dengan admin via WhatsApp.",
    },
    {
      q: "Apakah harga Rp 70.000 sudah mencakup unit indoor dan outdoor?",
      a: "Betul sekali! Paket Cuci AC Standar Rp 70.000 sudah mencakup pembersihan total unit indoor (evaporator, filter, casing) dan pembersihan unit outdoor (kondensor & kipas luar), plus bonus gratis semprotan pengharum ruangan.",
    },
    {
      q: "Bagaimana jika kasur atau barang elektronik berada di bawah AC?",
      a: "Sangat aman! Teknisi SHANK CARE selalu menggunakan plastik terpal corong khusus cuci AC yang membungkus bagian bawah unit dan mengalirkan seluruh air kotoran langsung ke ember penampungan. Dinding dan perabotan kamar Anda dijamin tidak terkena cipratan air.",
    },
    {
      q: "Apakah ada garansi setelah pengerjaan?",
      a: "Tentu ada. Untuk paket Cuci AC Premium Snow Foam kami memberikan Garansi 7 Hari. Jika terjadi kendala seperti AC menetes air (kondensasi) pasca pembersihan, tim kami akan segera menjadwalkan kunjungan pengecekan ulang tanpa biaya.",
    },
  ];

  return (
    <section id="faq" className="scroll-mt-24 py-16 md:py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-800 mb-2">
            <HelpCircle className="size-3.5 text-sky-600" />
            Tanya Jawab Seputar Layanan
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Hal-hal penting seputar estimasi waktu, prosedur cuci, dan kenyamanan kamar Anda.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base font-extrabold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-sky-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pt-3 pb-5 text-xs md:text-sm leading-relaxed text-slate-600 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
