import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  title: "SHANK CARE — Cuci & Service AC Wisma Atlet & Pademangan Jakarta Utara",
  description:
    "Jasa cuci dan service AC profesional terpercaya di Wisma Atlet dan Pademangan, Jakarta Utara. Buka Rabu, Jumat, Sabtu. Harga spesial mulai Rp 70.000/unit AC. AC bersih, dingin maksimal, hemat listrik!",
  keywords: [
    "Cuci AC Wisma Atlet",
    "Service AC Pademangan",
    "Shank Care AC",
    "Cuci AC Jakarta Utara",
    "Service AC Murah 70rb",
    "Jasa Bersih AC Rusunami",
  ],
  authors: [{ name: "SHANK CARE" }],
  openGraph: {
    title: "SHANK CARE — AC Bersih, Udara Lebih Sehat",
    description:
      "Perawatan & cuci AC detail untuk Wisma Atlet dan Pademangan. Harga spesial Rp 70.000/unit. Booking online slot terbatas!",
    url: "https://shankcare.id",
    siteName: "SHANK CARE",
    images: [
      {
        url: "/shank-logo.jpg",
        width: 800,
        height: 800,
        alt: "Logo SHANK CARE",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/shank-logo.jpg",
    apple: "/shank-logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
