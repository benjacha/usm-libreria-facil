import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/QuickAccess";
import { BookSearch } from "@/components/BookSearch";
import { ScientificResources } from "@/components/ScientificResources";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <QuickAccess />
      <BookSearch />
      <ScientificResources />
      <Footer />
    </div>
  );
};

export default Index;
