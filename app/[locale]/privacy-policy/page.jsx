import React from "react";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import legalPages from "@/lib/legalPages";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How BPS Legal collects, uses, and protects your personal information.",
};


const PrivacyPolicyPage = () => <LegalPageLayout {...legalPages["privacy-policy"]} />
export default PrivacyPolicyPage;
