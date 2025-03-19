import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FixedItems from "./components/FixedItems";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading"; 


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <Loading onComplete = {()=> setLoading(false)} />
  ) : (
    <div className="overflow-x-hidden overflow-y-hidden text-neutral-300">
      {/* Background Design */}
      <div className="fixed top-0 -z-10 w-full h-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#0A192F] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),#0A192F)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Project />
        <Contact />
        <Footer />
      </div>

      <FixedItems />
    </div>
  );
};

export default App;
