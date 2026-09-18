import React from 'react'
import { notFound } from 'next/navigation';
import practiceAreas from '@/lib/practiceAreas';
import PracticeAreaDetail from '@/components/practice-areas/PracticeAreaDetail';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = practiceAreas.find((item) => item.slug === slug);

  if (!area) return { title: "Practice Area Not Found" };

  return {
    title: area.title,
    description: area.description,
  }
}

const PracticeAreaDetailPage = async ({ params }) => {
    const { locale, slug } = await params;

    const area = practiceAreas.find((item) => item.slug === slug);

    if(!area) {
        notFound();
    }
  return  <PracticeAreaDetail area={area} locale={locale} />
}

export default PracticeAreaDetailPage
