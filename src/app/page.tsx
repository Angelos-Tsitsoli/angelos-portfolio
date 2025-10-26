import Header from "./Components/Header";
import Hero from "./Components/Hero"
import AboutMe from "./Components/AboutMe"
import Skills from "./Components/Skills";
import Footer from "./Components/Footer"
import Contact from "./Components/Contact"; 
import Work from "./Components/Work";

export default function Home() {
  return (
    <div className="max-w-6x1 mx-auto px-6 py-12">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
