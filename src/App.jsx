import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import BeforeAfter from "./components/BeforeAfter";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import EcoBadges from "./components/EcoBadges";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <BeforeAfter />
      <Pricing />
      <Testimonials />
      <EcoBadges />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
