import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import HowItWorks from "@/components/HowITWorks";
import AssistantPreview from "@/components/AssistantPreview";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffcf9] text-[#1a1210] font-sans antialiased">
   
      <main>
       <Banner/>
       <HowItWorks/>
       <AssistantPreview/>
      
      </main>
    </div>
  );
}
