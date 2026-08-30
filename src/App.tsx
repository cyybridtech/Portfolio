import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UniHiveSpotlight from "@/components/UniHiveSpotlight";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <UniHiveSpotlight />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
