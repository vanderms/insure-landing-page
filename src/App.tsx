import { Navbar } from "./components/navbar/navbar";
import { HeroSection } from "./components/sections/hero/hero";

function App() {
  

  return (
    <div className="md:max-w-[48rem] xl:max-w-[90rem] mx-auto">
      <Navbar />
      <HeroSection/>
    </div>
  )
}

export default App
