"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight,
  ArrowLeft,
  Minus,
  Plus,
  Receipt,
  Sparkles,
  ShieldCheck,
  Send,
  Building,
  Home,
  Store,
  Flame,
} from "lucide-react";

export default function BookingForm({ preselectedPackage = "standar" }) {
  // Booking Form State
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("cleaning");
  const [selectedService, setSelectedService] = useState(preselectedPackage);
  const [unitsCount, setUnitsCount] = useState(1);

  // Step 2 State
  const [locationType, setLocationType] = useState("wisma-atlet");
  const [propertyType, setPropertyType] = useState("Apartemen");
  const [unitDetail, setUnitDetail] = useState("");

  // Step 3 State
  const [selectedDay, setSelectedDay] = useState("SABTU");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("09:00 - 10:30 WIB");

  // Step 4 State
  const [acPk, setAcPk] = useState("1 PK");
  const [selectedIssues, setSelectedIssues] = useState(["Kurang dingin"]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [extraNotes, setExtraNotes] = useState("");

  // Service Catalog
  const serviceCatalog = {
    standar: {
      id: "standar",
      category: "cleaning",
      title: "Cuci AC Standar",
      desc: "Cuci indoor, outdoor, filter & talang air (Harga Poster)",
      price: 70000,
      originalPrice: 85000,
    },
    premium: {
      id: "premium",
      category: "cleaning",
      title: "Cuci AC Premium Snow Foam",
      desc: "Snow foam cleaning + antibakteri jamur + garansi 7 hari",
      price: 95000,
      originalPrice: 120000,
    },
    overhaul: {
      id: "overhaul",
      category: "cleaning",
      title: "Cuci Overhaul (Bongkar)",
      desc: "Bongkar total evaporator depan belakang untuk AC ekstra kotor",
      price: 250000,
      originalPrice: 300000,
    },
    swing: {
      id: "swing",
      category: "repair",
      title: "Perbaikan Swing",
      desc: "Perbaikan tuas swing patah / macet / motor swing",
      price: 50000,
      originalPrice: 75000,
    },
    freon: {
      id: "freon",
      category: "freon",
      title: "Isi / Tambah Freon R32/R410",
      desc: "Pengisian freon sesuai tekanan standar pabrikan",
      price: 150000,
      originalPrice: 200000,
    },
    check: {
      id: "check",
      category: "repair",
      title: "Pengecekan / Diagnosa AC",
      desc: "Cek kerusakan, arus listrik, dan rekomendasi",
      price: 40000,
      originalPrice: 50000,
    },
  };

  const currentServiceObj = serviceCatalog[selectedService] || serviceCatalog.standar;

  // Price Calculation
  const subtotal = currentServiceObj.price * unitsCount;
  const transportFee = 0; // FREE for Pademangan & Wisma Atlet
  const totalEstimation = subtotal + transportFee;

  // Toggle Issues
  const toggleIssue = (issue) => {
    if (selectedIssues.includes(issue)) {
      setSelectedIssues(selectedIssues.filter((i) => i !== issue));
    } else {
      setSelectedIssues([...selectedIssues, issue]);
    }
  };

  // WhatsApp Submit Handler
  const handleBookingSubmit = (e) => {
    e.preventDefault();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // fallback
    }

    const locationName =
      locationType === "wisma-atlet"
        ? "Wisma Atlet Pademangan"
        : locationType === "rusunami"
        ? "Rusunami Pademangan"
        : locationType === "pademangan"
        ? "Area Pademangan Sekitar"
        : "Jakarta Utara Lainnya";

    const issuesString =
      selectedIssues.length > 0 ? selectedIssues.join(", ") : "Perawatan rutin normal";

    // Build Formatted WhatsApp Message
    const message = `Halo *SHANK CARE*, saya ingin booking jadwal service & cuci AC:

*DETAIL RESERVASI:*
• *Paket Layanan:* ${currentServiceObj.title}
• *Jumlah AC:* ${unitsCount} Unit
• *Lokasi:* ${locationName} ${unitDetail ? `(${unitDetail})` : ""}
• *Tipe Bangunan:* ${propertyType}
• *Hari & Jam:* Hari ${selectedDay}, Pukul ${selectedTimeSlot}
• *Kapasitas Unit:* ${acPk}
• *Keluhan / Kondisi:* ${issuesString}

*DATA PEMESAN:*
• *Nama:* ${customerName || "Penghuni / Pelanggan"}
• *Nomor Kontak:* ${customerPhone || "-"}
${extraNotes ? `• *Catatan:* ${extraNotes}\n` : ""}
*ESTIMASI BIAYA:*
• *Tarif:* Rp ${currentServiceObj.price.toLocaleString("id-ID")} x ${unitsCount} = Rp ${subtotal.toLocaleString("id-ID")}
• *Transportasi:* GRATIS (Area Pademangan & Wislet)
• *Total Estimasi:* *Rp ${totalEstimation.toLocaleString("id-ID")}*

Mohon konfirmasi ketersediaan jadwalnya, terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6282315341681?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="booking" className="scroll-mt-24 py-16 md:py-24 bg-gradient-to-b from-sky-50/50 via-white to-sky-50/30">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-sky-700">
            Booking Cepat & Mudah
          </span>
          <h2 className="mt-2 text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Booking Jadwal dalam 4 Langkah
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Pilih paket, tentukan hari & jam, lalu detail pesanan langsung terkirim ke WhatsApp teknisi.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100/80 px-4 py-1.5 text-xs font-bold text-sky-900 shadow-sm">
            <Flame className="size-4 text-amber-500 fill-amber-500" />
            <span>Tersisa 4 slot pengerjaan untuk jadwal terdekat!</span>
          </div>
        </div>

        {/* Main Booking Container (Form Left + Summary Right) */}
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_22rem]">
          {/* Left: 4-Step Form Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xl shadow-slate-200/50">
            {/* Stepper Progress Bar */}
            <div className="mb-8">
              <ol className="flex items-center justify-between">
                {[
                  { step: 1, label: "Layanan" },
                  { step: 2, label: "Lokasi" },
                  { step: 3, label: "Jadwal" },
                  { step: 4, label: "Konfirmasi" },
                ].map((item, idx) => (
                  <li key={idx} className="flex flex-1 items-center">
                    <div className="flex flex-col items-center gap-1.5 w-full">
                      <span
                        className={`flex size-8 sm:size-9 items-center justify-center rounded-full text-xs font-black transition-all ${
                          currentStep >= item.step
                            ? "bg-sky-600 text-white shadow-md shadow-sky-600/30 ring-4 ring-sky-100"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {item.step}
                      </span>
                      <span
                        className={`text-[10px] sm:text-xs font-bold ${
                          currentStep >= item.step ? "text-sky-900" : "text-slate-400"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    {idx < 3 && (
                      <span
                        className={`mb-4 h-0.5 w-full transition-colors ${
                          currentStep > idx + 1 ? "bg-sky-600" : "bg-slate-200"
                        }`}
                      />
                    )}
                  </li>
                ))}
              </ol>
            </div>

            {/* FORM CONTENT BY STEP */}
            <form onSubmit={handleBookingSubmit}>
              {/* ================= STEP 1: LAYANAN ================= */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  {/* Category Filter Pills */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: "cleaning", label: "Pembersihan AC" },
                      { id: "repair", label: "Perbaikan & Swing" },
                      { id: "freon", label: "Freon & Gas" },
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                          selectedCategory === cat.id
                            ? "bg-sky-600 text-white shadow-sm"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  {/* Services Options List */}
                  <div className="space-y-2.5">
                    {Object.values(serviceCatalog)
                      .filter((s) => s.category === selectedCategory || selectedCategory === "all")
                      .map((srv) => {
                        const isSelected = selectedService === srv.id;
                        return (
                          <div
                            key={srv.id}
                            onClick={() => setSelectedService(srv.id)}
                            className={`flex cursor-pointer items-start justify-between gap-4 rounded-2xl border p-4 transition-all ${
                              isSelected
                                ? "border-sky-600 bg-sky-50/70 ring-2 ring-sky-500 shadow-sm"
                                : "border-slate-200 bg-white hover:border-sky-300 hover:bg-slate-50/80"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <span
                                className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border ${
                                  isSelected
                                    ? "border-sky-600 bg-sky-600 text-white"
                                    : "border-slate-300"
                                }`}
                              >
                                {isSelected && <CheckCircle2 className="size-3.5" />}
                              </span>
                              <div>
                                <h4 className="text-sm font-extrabold text-slate-900 leading-snug">
                                  {srv.title}
                                </h4>
                                <p className="text-xs text-slate-500 mt-0.5">{srv.desc}</p>
                              </div>
                            </div>
                            <div className="text-right shrink-0">
                              {srv.originalPrice && (
                                <span className="block text-[11px] text-slate-400 line-through">
                                  Rp {srv.originalPrice.toLocaleString("id-ID")}
                                </span>
                              )}
                              <span className="text-sm font-black text-sky-700">
                                Rp {srv.price.toLocaleString("id-ID")}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                  </div>

                  {/* Units Count Counter */}
                  <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div>
                      <span className="block text-sm font-extrabold text-slate-900">
                        Jumlah Unit AC
                      </span>
                      <span className="text-xs text-slate-500">
                        Hitungan harga otomatis dikalikan
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setUnitsCount(Math.max(1, unitsCount - 1))}
                        disabled={unitsCount <= 1}
                        className="flex size-9 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40"
                      >
                        <Minus className="size-4" />
                      </button>
                      <span className="w-12 text-center text-base font-black text-slate-900">
                        {unitsCount} Unit
                      </span>
                      <button
                        type="button"
                        onClick={() => setUnitsCount(unitsCount + 1)}
                        className="flex size-9 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                      >
                        <Plus className="size-4" />
                      </button>
                    </div>
                  </div>

                  {/* Next Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-600 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-sky-600/25 hover:bg-sky-700 transition-all"
                    >
                      <span>Lanjut ke Lokasi</span>
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* ================= STEP 2: LOKASI ================= */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                      Pilih Wilayah Anda:
                    </label>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {[
                        {
                          id: "wisma-atlet",
                          title: "Wisma Atlet Pademangan",
                          badge: "Area Utama",
                        },
                        {
                          id: "rusunami",
                          title: "Rusunami Pademangan",
                          badge: "Area Utama",
                        },
                        {
                          id: "pademangan",
                          title: "Pademangan (Rumah / Toko)",
                          badge: "Sekitar",
                        },
                        {
                          id: "lainnya",
                          title: "Wilayah Jakarta Utara Lain",
                          badge: "Konfirmasi",
                        },
                      ].map((loc) => (
                        <div
                          key={loc.id}
                          onClick={() => setLocationType(loc.id)}
                          className={`flex cursor-pointer items-center justify-between rounded-2xl border p-3.5 transition-all ${
                            locationType === loc.id
                              ? "border-sky-600 bg-sky-50/70 ring-2 ring-sky-500"
                              : "border-slate-200 hover:border-sky-300"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <MapPin className="size-4 text-sky-600" />
                            <span className="text-xs font-bold text-slate-800">{loc.title}</span>
                          </div>
                          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                            {loc.badge}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                      Jenis Bangunan:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Apartemen", icon: Building },
                        { label: "Rumah", icon: Home },
                        { label: "Ruko/Toko", icon: Store },
                      ].map((p) => {
                        const Icon = p.icon;
                        return (
                          <button
                            key={p.label}
                            type="button"
                            onClick={() => setPropertyType(p.label)}
                            className={`flex flex-col items-center gap-1.5 rounded-2xl border p-3 text-xs font-bold transition-all ${
                              propertyType === p.label
                                ? "border-sky-600 bg-sky-50 text-sky-800 ring-2 ring-sky-500"
                                : "border-slate-200 text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            <Icon className="size-5 text-sky-600" />
                            <span>{p.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                      Tower / Blok / Nomor Lantai & Unit:
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Tower 3, Lantai 12, Unit 12B"
                      value={unitDetail}
                      onChange={(e) => setUnitDetail(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="flex items-center justify-center gap-1 rounded-2xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-slate-600 hover:bg-slate-100"
                    >
                      <ArrowLeft className="size-4" />
                      <span>Kembali</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-sky-600 py-3.5 text-sm font-extrabold text-white shadow-md shadow-sky-600/25 hover:bg-sky-700"
                    >
                      <span>Lanjut ke Jadwal</span>
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* ================= STEP 3: JADWAL ================= */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                      Pilih Hari Operasional Resmi:
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { day: "RABU", slot: "Sesi Pagi & Sore" },
                        { day: "JUMAT", slot: "Sesi Pagi & Sore" },
                        { day: "SABTU", slot: "Slot Terbatas" },
                      ].map((item) => (
                        <div
                          key={item.day}
                          onClick={() => setSelectedDay(item.day)}
                          className={`cursor-pointer rounded-2xl border p-3 text-center transition-all ${
                            selectedDay === item.day
                              ? "border-sky-600 bg-sky-50 text-sky-900 ring-2 ring-sky-500"
                              : "border-slate-200 hover:border-sky-300"
                          }`}
                        >
                          <span className="block text-base font-black">{item.day}</span>
                          <span className="block text-[10px] text-slate-500 mt-0.5">{item.slot}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                      Pilih Perkiraan Jam Kedatangan:
                    </label>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {[
                        { time: "08:30 - 10:00 WIB", label: "Pagi Awal" },
                        { time: "10:00 - 11:30 WIB", label: "Pagi Menjelang Siang" },
                        { time: "13:00 - 14:30 WIB", label: "Siang Awal" },
                        { time: "14:30 - 16:00 WIB", label: "Sore Awal" },
                        { time: "16:00 - 17:30 WIB", label: "Sore Menjelang Malam" },
                      ].map((slot) => (
                        <button
                          key={slot.time}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot.time)}
                          className={`flex items-center justify-between rounded-xl border p-3 text-left transition-all ${
                            selectedTimeSlot === slot.time
                              ? "border-sky-600 bg-sky-50 text-sky-900 ring-2 ring-sky-500"
                              : "border-slate-200 hover:bg-slate-50 text-slate-700"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Clock className="size-4 text-sky-600" />
                            <span className="text-xs font-bold">{slot.time}</span>
                          </div>
                          <span className="text-[10px] text-slate-400">{slot.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="flex items-center justify-center gap-1 rounded-2xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-slate-600 hover:bg-slate-100"
                    >
                      <ArrowLeft className="size-4" />
                      <span>Kembali</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(4)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-sky-600 py-3.5 text-sm font-extrabold text-white shadow-md shadow-sky-600/25 hover:bg-sky-700"
                    >
                      <span>Lanjut ke Konfirmasi</span>
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* ================= STEP 4: KONFIRMASI ================= */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  {/* PK Size Options */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                      Estimasi Kapasitas / PK AC Anda:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["½ PK", "¾ PK", "1 PK", "1.5 PK", "2 PK", "Belum Tahu"].map((pk) => (
                        <button
                          key={pk}
                          type="button"
                          onClick={() => setAcPk(pk)}
                          className={`rounded-xl border px-3.5 py-2 text-xs font-bold transition-all ${
                            acPk === pk
                              ? "border-sky-600 bg-sky-600 text-white"
                              : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {pk}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Issues Checkbox */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                      Keluhan yang Dialami (Bisa pilih lebih dari satu):
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {[
                        "Kurang dingin",
                        "Bocor / Netes air",
                        "Hembusan bau",
                        "Suara berisik",
                        "Swing macet",
                        "Mati sendiri",
                      ].map((issue) => {
                        const active = selectedIssues.includes(issue);
                        return (
                          <button
                            key={issue}
                            type="button"
                            onClick={() => toggleIssue(issue)}
                            className={`rounded-xl border p-2.5 text-left text-xs font-bold transition-all ${
                              active
                                ? "border-sky-600 bg-sky-50 text-sky-900"
                                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            <span className="flex items-center gap-1.5">
                              <span
                                className={`size-3 rounded-full border ${
                                  active ? "bg-sky-600 border-sky-600" : "border-slate-300"
                                }`}
                              />
                              {issue}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact Info Inputs */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nama Pemesan:
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Pak Anton / Ibu Rina"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nomor WhatsApp:
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Contoh: 081234567890"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Catatan Tambahan untuk Teknisi (Opsional):
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Contoh: Ada tangga kecil di kamar, tolong teknisi bawa terpal ekstra"
                      value={extraNotes}
                      onChange={(e) => setExtraNotes(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200 resize-none"
                    />
                  </div>

                  {/* Submit WhatsApp Button */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="flex items-center justify-center gap-1 rounded-2xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-slate-600 hover:bg-slate-100"
                    >
                      <ArrowLeft className="size-4" />
                      <span>Kembali</span>
                    </button>
                    <button
                      type="submit"
                      className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-600/30 hover:brightness-110 transition-all active:scale-95"
                    >
                      <Send className="size-4" />
                      <span>Booking via WhatsApp (0823-1534-1681)</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Right: Sticky Summary Card */}
          <aside className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50">
            <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-sky-700">
              <Receipt className="size-4 text-sky-600" /> Ringkasan Biaya Transparan
            </span>

            <h3 className="mt-4 text-xl font-black text-slate-900">{currentServiceObj.title}</h3>

            {/* Incentive Highlight Pill */}
            <div className="mt-3 flex items-start gap-2 rounded-2xl bg-sky-50 p-3 text-xs font-semibold text-sky-900">
              <Sparkles className="size-4 shrink-0 text-sky-600 mt-0.5" />
              <span>
                <strong>Gratis Biaya Transportasi:</strong> Khusus area Wisma Atlet & Pademangan!
              </span>
            </div>

            {/* Selected Info Breakdown */}
            <div className="mt-5 space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>Lokasi</span>
                <span className="font-bold text-slate-800 text-right">
                  {locationType === "wisma-atlet"
                    ? "Wisma Atlet"
                    : locationType === "rusunami"
                    ? "Rusunami"
                    : "Pademangan"}
                </span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Jumlah AC</span>
                <span className="font-bold text-slate-800">{unitsCount} unit</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Jadwal</span>
                <span className="font-bold text-slate-800">
                  {selectedDay}, {selectedTimeSlot.split(" ")[0]}
                </span>
              </div>
            </div>

            {/* Pricing Math */}
            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>
                  Layanan (Rp {currentServiceObj.price.toLocaleString("id-ID")} x {unitsCount})
                </span>
                <span className="font-bold text-slate-800">
                  Rp {subtotal.toLocaleString("id-ID")}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Biaya Transportasi</span>
                <span className="font-black text-emerald-600">GRATIS</span>
              </div>
            </div>

            {/* Total Price Box */}
            <div className="mt-5 pt-4 border-t border-slate-200">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Total Estimasi
              </p>
              <p className="mt-0.5 text-3xl font-black text-sky-800">
                Rp {totalEstimation.toLocaleString("id-ID")}
              </p>
            </div>

            <p className="mt-4 flex items-start gap-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl">
              <ShieldCheck className="size-4 shrink-0 text-slate-400" />
              <span>Harga komponen / freon tambahan dikonfirmasi transparan sebelum tindakan.</span>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
