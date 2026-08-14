import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import PresentationStarterBanner from "@/components/Presentationstarterbanner ";
import FooterPage from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffcf9] text-[#1a1210] font-sans antialiased">
      <Navbar />
      <main>
        <Banner />
      </main>
      <PresentationStarterBanner/>
      <FooterPage />
    </div>
  );
}