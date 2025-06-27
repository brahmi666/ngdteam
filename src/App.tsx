import { useState, useEffect } from "react";
import Services from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Team } from "./components/Team";
import { Navigation } from "./components/Navigation";
import { ServicesRibbon } from "./components/ServicesRibbon";
import SplashScreen from "./components/SplashScreen.js";
import Footer from "./components/Footer.js";
import Hero from "./components/Hero.js";

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Matches splash screen duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <SplashScreen />}
      {!loading && (
        <div className="w-full min-h-screen bg-black text-white overflow-hidden">
          <Navigation />
          <main>
            <Hero />
            <Services />
            <ServicesRibbon />
            <Portfolio />
            <Team />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}
