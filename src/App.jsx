import React, { Suspense, lazy, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Partners from "./components/Partners";
import SolutionsSection from "./components/SolutionSection";
import Section from "./components/Section";
import ServicesPage from "./components/ServicePage";
import LandingPage from "./components/System";
import Statistict from "./components/Statistics";
import Hero from "./components/Hero";
import Building from "./components/Building";
import Advertis from "./components/Advertis";
import Complex from "./components/Complex";
import Dynamic from "./components/Dynamic";
import Begin from "./components/Begin";
import Support from "./components/Support";
import It from "./components/It";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

const LazySlider = lazy(() => import("./components/SliderSection"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Suspense fallback={<Spinner />}>
      <div>
        <Navbar />
        <Banner />
        <Partners />
        <SolutionsSection />
        <Section />
        <ServicesPage />
        <LandingPage />
        <Statistict />
        <Hero />
        <Building />
        <Advertis />
        <Complex />
        <Dynamic />
        <LazySlider />
        <Begin />
        <Support />
        <It />
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
