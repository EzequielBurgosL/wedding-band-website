import React from "react";
import About from "./components/About";
import BookingForm from "./components/BookingForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import "./i18n/config";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
