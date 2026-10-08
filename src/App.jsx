import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BrandSwiper from "./components/BrandSwiper";
import Ecosystem from "./components/Ecosystem";
import FeaturedWork from "./components/FeaturedWork";
import Speaking from "./components/Speaking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="grain bg-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <BrandSwiper />
        <Ecosystem />
        <FeaturedWork />
        <Speaking />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}