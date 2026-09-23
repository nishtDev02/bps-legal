import React from "react";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import legalPages from "@/lib/legalPages";

export const metadata = {
  title: "Disclaimer",
  description: "Bar Council of India compliance disclaimer for BPS Legal.",
};

const DisclaimerPage = () => <LegalPageLayout {...legalPages["disclaimer"]} />

export default DisclaimerPage;
