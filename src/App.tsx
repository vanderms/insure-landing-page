import { Navbar } from "./components/navbar/navbar";
import { HeroSection } from "./components/sections/hero/hero";
import { FeaturesSection } from "./components/sections/features/features";
import { CallToActionSection } from "./components/sections/call-to-action/call-to-action";

function App() {
  return (
    <div className="md:max-w-[48rem] xl:max-w-[90rem] mx-auto">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CallToActionSection/>
      </main>
    </div>
  );
}

export default App;
