import Image from "next/image";
import langObj from "@/lib/dictionary";
import Link from "next/link";
import HeroSubtitle from "@/components/HeroSubtitle";
import practiceAreas from "@/lib/practiceAreas";
import {
  Shield,
  Gavel,
  Users,
  Home,
  ShoppingCart,
  FileText,
} from "lucide-react";

import connectDB from "@/lib/db";
import Blog from "@/models/Blog";

export default async function HomePage({ params }) {
  await connectDB();
  const { locale } = await params;
  const t = langObj[locale];

  const blogs = await Blog.find({ locale: locale })
    .sort({ createdAt: -1 })
    .limit(3);
  const blogsData = JSON.parse(JSON.stringify(blogs));

  const iconMap = { Shield, Gavel, Users, Home, ShoppingCart, FileText };
  return (
    <>
      <section className="relative overflow-hidden bg-(--color-bg-secondary) text-(--color-text) px-6 md:px-16 py-16 md:py-24">
        {/* Ghosted bg image */}
        <div
          className="absolute inset-0 opacity-[0.14] grayscale bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url('/images/background-image.jpg')" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* content */}
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-(--color-text-secondary) text-sm md:text-base">
              {t.heroCredentials}
            </p>
            <p className="text-(--color-accent) uppercase tracking-widest text-sm font-medium">
              {t.heroTagline}
            </p>

            <HeroSubtitle text={t.heroSubTitle} locale={locale} />

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={`/${locale}/contact`}
                className="bg-(--color-accent) text-[#111111] font-semibold px-6 py-3 rounded-md text-center hover:bg-[#b8931f] transition "
              >
                {t.ctaConsultation}
              </Link>
              <a
                href="https://wa.me/9027380268"
                target="_blank"
                className="flex items-center gap-2 border border-(--color-accent) text-(--color-accent) font-semibold px-6 py-3 rounded-md text-center hover:bg-(--color-accent) hover:text-[#111111] transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12.004 2c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.481 1.34 4.997L2 22l5.144-1.35a9.96 9.96 0 004.86 1.24h.004c5.514 0 9.997-4.483 9.997-9.997C21.997 6.483 17.518 2 12.004 2zm5.847 15.845a8.3 8.3 0 01-5.847 2.418h-.003a8.34 8.34 0 01-4.25-1.164l-.305-.181-3.152.827.842-3.075-.198-.315a8.32 8.32 0 01-1.276-4.44c0-4.596 3.741-8.337 8.34-8.337 2.226 0 4.318.868 5.892 2.443a8.28 8.28 0 012.442 5.892 8.3 8.3 0 01-2.485 5.932z" />
                </svg>
                {t.ctaWhatsapp}
              </a>
            </div>
          </div>

          {/* image */}
          <div className="flex-1 w-full">
            <div className="bg-(--color-bg) w-full h-80 md:h-120 rounded-lg flex items-center justify-center text-(--color-text-secondary)">
              Photo Placeholder
            </div>
          </div>
        </div>
      </section>

      {/*badges section */}
      {/* <section className="bg-(--color-bg) border-b border-(--color-bg-secondary) px-6 md:px-16 py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-4">
          {t.trustBadges.map((badge, index) => (
            <div 
            key={index}
            className="flex items-center gap-2 text-(--color-text-secondary) text-sm md:text-[15px] font-medium tracking-wide"
            >
              <CheckCircle2 size={16} className="text-(--color-accent)" strokeWidth={2.5} />
              {badge}
            </div>
          ))}
        </div>
      </section> */}

      {/* about preview */}
      <section className="relative bg-(--color-bg) px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <p className="text-(--color-accent) uppercase tracking-widest text-sm font-medium">
            About
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {t.aboutHeading}
          </h2>

          <p className="text-(--color-text-secondary) text-base md:text-lg">
            {t.aboutPreview}
          </p>

          <Link
            href={`/${locale}/about`}
            className="inline-flex items-center gap-2 text-(--color-accent) font-semibold hover:underline pt-2"
          >
            {t.aboutCta}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="relative bg-(--color-bg-secondary) px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <p className="text-(--color-accent) uppercase tracking-widest text-sm font-medium">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {t.practiceAreasHeading}
            </h2>
          </div>

          {/* cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => {
              const Icon = iconMap[area.icon];
              return (
                <Link
                  key={area.slug}
                  href={`/${locale}/practice-areas/${area.slug}`}
                  className="group bg-(--color-bg) border border-(--color-text-secondary)/10 rounded-lg p-6 flex flex-col gap-4 hover:border-(--color-accent) hover:shadow-md transition"
                >
                  <div className="w-12 h-12 rounded-full bg-(--color-accent)/10 flex items-center justify-center group-hover:bg-(--color-accent) transition">
                    <Icon
                      size={22}
                      className="text-(--color-accent) group-hover:text-[#111111] transition"
                    />
                  </div>

                  <h3 className="text-lg font-semibold leading-snug">
                    {area.title}
                  </h3>

                  <span className="text-(--color-accent) text-sm font-medium inline-flex items-center gap-1 mt-auto">
                    Learn More
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href={`/${locale}/practice-areas`}
              className="inline-block bg-(--color-accent) text-[#111111] font-semibold px-7 py-3 rounded-md hover:opacity-90 transition"
            >
              {t.practiceAreasCta}
            </Link>
          </div>
        </div>
      </section>

      {/* blogs section */}
      {blogsData.length > 0 && (
        <section className="relative bg-(--color-bg) px-6 md:px-16 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            {/* heading */}
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
              <p className="text-(--color-accent) uppercase tracking-widest text-sm font-medium ">
                Insights
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {t.blogHeading}
              </h2>
            </div>

            {/* blog cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogsData.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/${locale}/blog/${blog.slug}`}
                  className="group bg-(--color-bg-secondary) border border-(--color-text-secondary)/10 rounded-lg overflow-hidden flex flex-col hover:border-(--color-accent) hover:shadow-md transition"
                >
                  <div className="relative w-full h-44">
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      fill
                      sizes="( max-width: 768px ) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <span className="text-(--color-accent) text-xs font-semibold uppercase tracking-wide">
                      {blog.category}
                    </span>
                    <h3 className="text-lg font-semibold leading-snug group-hover:text-(--color-accent) transition">
                      {blog.title}
                    </h3>
                    <p className="text-(--color-text-secondary) text-sm line-clamp-2">
                      {blog.excerpt}
                    </p>

                    <span className="text-(--color-accent) text-sm font-medium inline-flex items-center gap-1 mt-auto pt-2">
                      Read Article
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* view all blogs */}
            <div className="text-center mt-12">
              <Link
                href={`/${locale}/blog`}
                className="inline-flex items-center gap-2 text-(--color-accent) font-semibold hover:underline"
              >
                {t.blogCta}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* contact section */}
      <section className="relative bg-(--color-accent) px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#111111]">{t.contactHeading}</h2>

          <p className="text-[#111111]/80 text-base md:text-lg">{t.contactSubheading}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href={`/${locale}/contact`} className="bg-[#111111] text-white font-semibold px-7 py-3 rounded-md text-center hover:opacity-90 transition w-full sm:w-auto">
              {t.ctaConsultation}
            </Link>
            <a href="" target="_blank" className="flex items-center justify-center gap-2 border border-[#111111] text-[#111111] font-semibold px-7 py-3 rounded-md text-center hover:bg-[#111111] hover:text-white transition w-full sm:w-auto">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.004 2c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.481 1.34 4.997L2 22l5.144-1.35a9.96 9.96 0 004.86 1.24h.004c5.514 0 9.997-4.483 9.997-9.997C21.997 6.483 17.518 2 12.004 2zm5.847 15.845a8.3 8.3 0 01-5.847 2.418h-.003a8.34 8.34 0 01-4.25-1.164l-.305-.181-3.152.827.842-3.075-.198-.315a8.32 8.32 0 01-1.276-4.44c0-4.596 3.741-8.337 8.34-8.337 2.226 0 4.318.868 5.892 2.443a8.28 8.28 0 012.442 5.892 8.3 8.3 0 01-2.485 5.932z" />
              </svg>
              {t.ctaWhatsapp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
