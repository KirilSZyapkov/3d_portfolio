import { BrowserRouter } from "react-router-dom";

import {
  Hero,
  Navbar,
  About,
  Services,
  Skills,
  Works,
  Contact,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="realative bg-primery">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Works />
        <Services />
        <div className="relative">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
