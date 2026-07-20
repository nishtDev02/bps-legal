import Image from "next/image";
import langObj from "@/lib/dictionary";
import Link from "next/link";

export default async function Home({ params }) {
  const { locale } = await params;
  const t = langObj[locale];
  return (
    <section className="bg-[#111111] text-white px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* content */}
        <div className="flex-1 space-y-4">
          <p className="text-[#C9A227] uppercase tracking-widset text-sm font-medium">{t.heroTagline}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{t.heroTitle}</h1>
          <p className="text-[#f5f5f5]/80 text-sm md:text-base">{t.heroCredentials}</p>
          <p className="text-[#f5f5f5]/90 text-base md:text-lg max-w-xl">{t.heroSubTitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
            href={`/${locale}/contact`}
            className="bg-[#C9A227] text-[#111111] font-semibold px-6 py-3 rounded-md text-center hover:bg-[#b8931f] transition "
            >{t.ctaConsultation}</Link>
            <a 
            href="https://wa.me/9027380268" 
            target="_blank"
            className="border border-[#C9A227] text-[#C9A227] font-semibold px-6 py-3 rounded-md text-center hover:bg-[#C9A227] hover:text-[#111111] transition"
            >
              {t.ctaWhatsapp}
            </a>
          </div>
        </div>

        {/* image */}
        <div className="flex-1 w-full">
          <div className="bg-[#2D2D2D] w-full h-80 md:h-120 rounded-lg flex items-center justify-center text-[#F5F5F5]/50">Photo Placeholder</div>
        </div>
      </div>
    </section>
  );
}
