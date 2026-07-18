import Image from "next/image";
import langObj from "@/lib/dictionary";

export default async function Home({ params }) {
  const {locale} = await params;
  const t = langObj[locale];
  return (
    <div>
      <h1>This is a website for a Lawyer</h1>
      <h2>{t.heroTitle}</h2>
      <p>{t.heroSubTitle}</p>
      <button>{t.ctaConsultation}</button>
      <button>{t.ctaWhatsapp}</button>
    </div>
  );
}
