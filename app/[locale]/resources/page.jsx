import React from 'react'
import ResourcesPage from '@/components/resources/ResourcesPage';

export const metadata = {
  title: "Legal Resources",
  description: "Free legal guides, checklists, glossary, and useful links to help you understand your legal situation.",
};

const Page = async ({ params }) => {
    const {locale} = await params;
  return <ResourcesPage locale={locale} />
}

export default Page
