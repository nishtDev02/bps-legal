import LegalPageLayout from "@/components/legal/LegalPageLayout";
import legalPages from "@/lib/legalPages";

export const metadata = {
  title: "Cookie Policy",
  description: "How BPS Legal uses cookies and similar technologies.",
};

const CookiePolicyPage = () => <LegalPageLayout {...legalPages["cookie-policy"]} />;

export default CookiePolicyPage;