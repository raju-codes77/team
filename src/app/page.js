import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import HowItWorks from "@/components/HowItWorks";
import AssistantPreview from "@/components/AssistantPreview";
import PresentationStarterBanner from "@/components/PresentationStarterBanner";
import FooterPage from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffcf9] text-[#1a1210] font-sans antialiased">
      <Navbar />
      <main>
        <Banner />
        <HowItWorks />
        <AssistantPreview />
        <PresentationStarterBanner />
      </main>
      <FooterPage />
    </div>
  );
}
