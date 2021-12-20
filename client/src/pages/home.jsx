import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureLeft from "./components/FeatureLeft";
import FeatureRight from "./components/FeatureRight";
import FeatureCard from "./components/FeatureCard";
// import FeatureSection from "./components/FeatureSection";
import FeatureStats from "./components/FeatureStats";
import Cta from "./components/CTA";
import Footer from "./components/Footer"
const { offerings } = require("./data/features");

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <div className="relative py-32 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
          />
          <FeatureLeft
            title={offerings[0].title}
            icon={offerings[0].icon}
            preview={offerings[0].preview}
            imageURL={offerings[0].imageURL}
          />
          <FeatureRight />
          <FeatureLeft
            title={offerings[1].title}
            icon={offerings[1].icon}
            preview={offerings[1].preview}
            imageURL={offerings[1].imageURL}
          />
        </div>
        {/* <FeatureSection /> */}
        <FeatureStats />
        <FeatureCard />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
