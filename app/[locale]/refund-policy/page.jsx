import LegalPageLayout from "@/components/legal/LegalPageLayout";
import legalPages from "@/lib/legalPages";

export const metadata = {
  title: "Refund Policy",
  description: "BPS Legal's policy on consultation fees and refunds.",
};

const RefundPolicyPage = () => <LegalPageLayout {...legalPages["refund-policy"]} />;

export default RefundPolicyPage;