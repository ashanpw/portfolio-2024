import { AboutBoxes } from "./components/Molecules/AboutBoxes/AboutBoxes";
import { Experience } from "./components/Molecules/Experience/Experience";
import { LinesOfCode } from "./components/Molecules/LinesOfCode/LinesOfCode";
import { Proficiencies } from "./components/Molecules/Proficiencies/Proficiencies";
import { Projects } from "./components/Molecules/Projects/Projects";
import { Technology } from "./components/Molecules/Technology/Technology";
import { NavBar } from "./components/Molecules/NavBar/NavBar";
import { Hero } from "./components/Molecules/Hero/Hero";
import { Contact } from "./components/Molecules/Contact/Contact";
import { ContactHeader } from "./components/Molecules/ContactHeader/ContactHeader";

export const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      {/* <Introduction /> */}
      <AboutBoxes />
      {/* <PersonalStatement /> */}
      {/* <Workspace /> */}
      <Proficiencies />
      <LinesOfCode />
      <Technology />
      <Experience />
      <Projects />
      <ContactHeader />
      <Contact />
    </>
  );
};

export default App;
