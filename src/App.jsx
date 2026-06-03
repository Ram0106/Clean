import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import TrustBadges from "./components/TrustBadges";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import BeforeAfterGallery from "./components/BeforeAfterGallery";
import PhotoGallery from "./components/PhotoGallery";
import PriceEstimator from "./components/PriceEstimator";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import EcoBadges from "./components/EcoBadges";
import FAQ from "./components/FAQ";
import ServiceArea from "./components/ServiceArea";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import MobileBottomBar from "./components/MobileBottomBar";

function App() {
  return (
    <div className="w-full min-h-screen bg-white pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <TrustBar />
      <TrustBadges />
      <Services />
      <HowItWorks />
      <BeforeAfterGallery />
      <PhotoGallery />
      <PriceEstimator />
      <Pricing />
      <Testimonials />
      <EcoBadges />
      <FAQ />
      <ServiceArea />
      <BookingForm />
      <Footer />
      <BookingModal />
      <MobileBottomBar onBookNow={() => {
        const btn = document.querySelector('a[href="#contact"]');
        if (btn) btn.click();
      }} />
    </div>
  );
}

export default App;
