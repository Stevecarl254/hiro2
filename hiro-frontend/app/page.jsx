import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import ServicesSection from "../components/ServicesSection"
import WhyChooseUs from "../components/WhyChooseUs"
import AboutSection from "../components/AboutSection"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <AboutSection />
      <Footer />
    </main>
  )
}
