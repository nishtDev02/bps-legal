import React from 'react'
import ResourcesPage from '@/components/resources/ResourcesPage';

const Page = async ({ params }) => {
    const {locale} = await params;
  return <ResourcesPage locale={locale} />
}

export default Page
