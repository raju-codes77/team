import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import PresentationStarterBanner from "@/components/PresentationStarterBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffcf9] text-[#1a1210] font-sans antialiased">
      <Navbar />
      <main>
        <Banner />
        <PresentationStarterBanner />
      </main>
    </div>
  );
}
