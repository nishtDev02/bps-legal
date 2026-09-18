import React from 'react'
import FAQPage from '@/components/faq/FAQPage'

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common legal questions on Criminal Law, Cyber Law, Bail Matters, Family Law, and Cheque Bounce cases.",
};

const page = async ({ params }) => {
    const { locale } = await params;
  return <FAQPage locale={locale} />
}

export default page
