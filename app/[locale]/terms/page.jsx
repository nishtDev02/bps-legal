import React from "react";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import legalPages from "@/lib/legalPages";

export const metadata = {
  title: "Terms & Conditions",
  description: "The terms governing your use of the BPS Legal website.",
};

const TermsPage = () => <LegalPageLayout {...legalPages["terms"]} />

export default TermsPage;
