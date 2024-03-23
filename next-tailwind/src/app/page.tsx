import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ToolsSection from "@/components/ToolsSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import BoilerplatesSection from "@/components/BoilerplatesSection";
import CommunitySection from "@/components/CommunitySection";
import BuiltBySection from "@/components/BuiltBySection";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";

export default function Home() {
  return (
    <>
      <PageHead />
      <Header />
      <main className="overflow-hidden">
        <IntroSection />
        <FeaturesSection />
        <ToolsSection />
        <IntegrationsSection />
        <BoilerplatesSection />
        <CommunitySection />
        <BuiltBySection />
      </main>
      <Footer />
    </>
  );
}
