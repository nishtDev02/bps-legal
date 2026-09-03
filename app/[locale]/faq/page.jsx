import React from 'react'
import FAQPage from '@/components/faq/FAQPage'

const page = async ({ params }) => {
    const { locale } = await params;
  return <FAQPage locale={locale} />
}

export default page
