import React from "react";
import officeLocations from "@/lib/officeLocations";
import langObj from "@/lib/dictionary";
import ContactCTA from "@/components/home/ContactCTA";

import AboutIntro from "@/components/about/AboutIntro";
import AboutStory from "@/components/about/AboutStory";
import AboutCommitment from "@/components/about/AboutCommitment";
import EducationCredentials from "@/components/about/EducationCredentials";
import OurApproach from "@/components/about/OurApproach";
import OfficeLocations from "@/components/about/OfficeLocations";
import WhyChooseUs from "@/components/about/WhyChooseUs";

export const metadata = {
  title: "About Adv. Bhanu Pratap Sagar",
  description: "Learn about Adv. Bhanu Pratap Sagar's expertise in Criminal Law and Cyber Law, serving clients across Delhi's courts.",
};

const page = async ({ params }) => {
  const { locale } = await params;
  const t = langObj[locale];

  return (
    <>
      {/* Intro */}
      <AboutIntro t={t} />

      {/* About Story */}
      <AboutStory t={t} />

      {/* About Commitment */}
      <AboutCommitment t={t} />

      {/* Education & credentials */}
      <EducationCredentials t={t} />

      {/* Our Approach */}
      <OurApproach t={t} />

      {/* Office Locations */}
      <OfficeLocations t={t} officeLocations={officeLocations} />

      {/* Why Choose Us */}
      <WhyChooseUs t={t} />
      
      {/* Contact CTA */}
      <ContactCTA locale={locale} t={t} />
    </>
  );
};

export default page;
