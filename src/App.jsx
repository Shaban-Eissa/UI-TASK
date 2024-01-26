import Achievements from "./components/Achievements";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Partnerships from "./components/Partnerships";
import SliderSection from "./components/SliderSection";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <SliderSection />
      <Achievements />
      <Download />
      <Features />
      <Partnerships />
      <FAQ />
      <Feedback />
      <Footer />
    </>
  );
}

export default App;
