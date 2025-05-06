
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/home/HeroBanner";
import SpecialOffers from "@/components/home/SpecialOffers";
import CustomerReviews from "@/components/home/CustomerReviews";
import AppDownload from "@/components/home/AppDownload";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <SpecialOffers />
        <CustomerReviews />
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
