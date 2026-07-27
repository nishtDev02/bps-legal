import React from "react";
import officeLocations from "@/lib/officeLocations";
import langObj from "@/lib/dictionary";
import ContactCTA from "@/components/home/ContactCTA";

import AboutIntro from "@/components/about/AboutIntro";
import EducationCredentials from "@/components/about/EducationCredentials";
import OfficeLocations from "@/components/about/OfficeLocations";

const page = async ({ params }) => {
  const { locale } = await params;
  const t = langObj[locale];

  return (
    <>
      {/* Intro */}
      <AboutIntro t={t} />

      {/* Education & credentials */}
      <EducationCredentials t={t} />

      {/* Office Locations */}
      <OfficeLocations t={t} officeLocations={officeLocations} />
      
      {/* Contact CTA */}
      <ContactCTA locale={locale} t={t} />
    </>
  );
};

export default page;
