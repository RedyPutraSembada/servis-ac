"use client";

import { useState } from "react";
import { Star, CheckCircle2, User, Send, MessageSquare } from "lucide-react";

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState([
    {
      id: 1,
      name: "Farhan Hakim",
      location: "Penghuni Wisma Atlet Tower 3",
      rating: 5,
      date: "Kemarin",
      comment:
        "Tinggal di Tower Wisma Atlet, pas nyoba panggil SHANK CARE ternyata bersih banget pengerjaannya. Air semprotan steam gak bocor ke kasur atau lantai karena bawa corong terpal sendiri. Petugasnya ramah dan harganya beneran Rp 70rb!",
    },
    {
      id: 2,
      name: "Ibu Dewi Sartika",
      location: "Warga Rusunami Pademangan",
      rating: 5,
      date: "3 hari lalu",
      comment:
        "AC kamar anak netes air dan bau apek. Dicuci detail sama teknisi Shank Care langsung wangi dan dingin nusuk lagi. Sangat recommended buat warga Pademangan!",
    },
    {
      id: 3,
      name: "Hendra Wijaya",
      location: "Pademangan Barat",
      rating: 5,
      date: "Minggu lalu",
      comment:
        "Swing AC kamar sempat macet dan patah. Untung teknisi Shank Care punya sparepart & bisa benerin swingnya sekalian cuci indoor outdoor. Peralatannya komplit dan rapi.",
    },
    {
      id: 4,
      name: "Clarissa",
      location: "Wisma Atlet Tower 7",
      rating: 5,
      date: "2 minggu lalu",
      comment:
        "Respon WhatsApp-nya cepat dan komunikatif. Jadwal hari Sabtu datang tepat waktu. AC Daikin saya jadi dingin semriwing lagi tanpa berisik.",
    },
    {
      id: 5,
      name: "Budi Santoso",
      location: "Pademangan Timur",
      rating: 5,
      date: "Bulan lalu",
      comment:
        "Teknisinya jujur banget. Pas dicek freon katanya masih bagus dan cukup, gak dipaksa-paksa isi freon tambahan. Jarang nemu jasa service AC sejujur dan sebersih ini.",
    },
    {
      id: 6,
      name: "Nita Anggraini",
      location: "Wisma Atlet",
      rating: 5,
      date: "Bulan lalu",
      comment:
        "Paket Cuci Premium pakai foam-nya mantap, kotoran hitam lendir keluar semua. Ruangan jadi harum dan sejuk. Pasti langganan terus tiap 3 bulan.",
    },
  ]);

  // Form State
  const [inputName, setInputName] = useState("");
  const [inputLocation, setInputLocation] = useState("");
  const [inputComment, setInputComment] = useState("");
  const [inputRating, setInputRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [submittedAlert, setSubmittedAlert] = useState(false);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!inputName.trim() || !inputComment.trim()) return;

    const newRev = {
      id: Date.now(),
      name: inputName,
      location: inputLocation || "Pelanggan Terverifikasi",
      rating: inputRating,
      date: "Baru saja",
      comment: inputComment,
    };

    setReviewsList([newRev, ...reviewsList]);
    setInputName("");
    setInputLocation("");
    setInputComment("");
    setSubmittedAlert(true);
    setTimeout(() => setSubmittedAlert(false), 5000);
  };

  return (
    <section id="ulasan" className="scroll-mt-24 py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-sky-700">
            Ulasan Asli Pelanggan
          </span>
          <h2 className="mt-2 text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Apa Kata Mereka Tentang SHANK CARE
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-black text-slate-800">4.9 / 5.0</span>
            <span className="text-xs text-slate-500 font-medium">
              (Berdasarkan kepuasan penghuni Wisma Atlet & Pademangan)
            </span>
          </div>
        </div>

        {/* 2-Columns Layout: Testimonials List Left + Add Review Form Right */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Reviews List Grid (8 cols) */}
          <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
            {reviewsList.map((rev) => (
              <div
                key={rev.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-sky-100 text-xs font-black text-sky-800">
                        {rev.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-slate-900 leading-tight">
                          {rev.name}
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-0.5">{rev.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="my-3 flex items-center gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className={`size-3.5 ${
                          idx < rev.rating
                            ? "fill-amber-400 text-amber-400"
                            : "fill-slate-200 text-slate-200"
                        }`}
                      />
                    ))}
                    <span className="text-[10px] text-slate-400 ml-1.5">{rev.date}</span>
                  </div>

                  <p className="text-xs leading-relaxed text-slate-600 italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] text-emerald-600 font-bold">
                  <CheckCircle2 className="size-3.5" />
                  <span>Pelanggan Terverifikasi</span>
                </div>
              </div>
            ))}
          </div>

          {/* Write a Review Box (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="flex items-center gap-2 text-sky-800 mb-1">
              <MessageSquare className="size-4" />
              <h3 className="text-base font-black">Tulis Ulasan Anda</h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Punya pengalaman cuci AC bersama SHANK CARE? Bagikan kepuasan Anda di sini.
            </p>

            {submittedAlert && (
              <div className="mb-4 rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-800 font-semibold flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-600" />
                Terima kasih! Ulasan Anda berhasil ditambahkan.
              </div>
            )}

            <form onSubmit={handleSubmitReview} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Beri Rating:</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setInputRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 transition-transform hover:scale-125 focus:outline-none"
                    >
                      <Star
                        className={`size-6 transition-colors ${
                          star <= (hoverRating || inputRating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-200"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-slate-500 ml-2">
                    {inputRating} dari 5 Bintang
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nama Anda:</label>
                <input
                  type="text"
                  required
                  placeholder="Nama Lengkap / Panggilan"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Lokasi / Tower (Opsional):
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Wisma Atlet Tower 2"
                  value={inputLocation}
                  onChange={(e) => setInputLocation(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Pengalaman Anda:</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Ceritakan hasil pengerjaan, keramahan teknisi, atau kondisi AC setelah dicuci..."
                  value={inputComment}
                  onChange={(e) => setInputComment(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 py-3 text-xs font-bold text-white shadow-md hover:bg-sky-700 transition-colors"
              >
                <Send className="size-3.5" />
                <span>Kirim Ulasan Sekarang</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
