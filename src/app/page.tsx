import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainFeatures from "@/components/MianFeatures";
import ProductsServices from "@/components/ProductsServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import Contact from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main >
     <Header />
     <Hero />
     <MainFeatures />
     <ProductsServices />
     <WhyChooseUs />
     <Testimonials />
     <FAQ />
     <Contact />
     <Footer />
    </main>
  );
}
