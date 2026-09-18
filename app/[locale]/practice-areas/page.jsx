import React from "react";
import PracticeAreasListing from "@/components/practice-areas/PracticeAreasListing";

export const metadata = {
  title: "Practice Areas",
  description:
    "Comprehensive legal support across Criminal Law, Cyber Law, Bail Matters, Family Law, and more — tailored to your specific situation.",
};

const PracticeAreasPage = async ({ params }) => {
  const { locale } = await params;

  return <PracticeAreasListing locale={locale} />;
};

export default PracticeAreasPage;
