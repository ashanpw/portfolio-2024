import { AboutBoxes } from './components/Molecules/AboutBoxes/AboutBoxes';
import { Experience } from './components/Molecules/Experience/Experience';
import { LinesOfCode } from './components/Molecules/LinesOfCode/LinesOfCode';
import { Proficiencies } from './components/Molecules/Proficiencies/Proficiencies';
import { Projects } from './components/Molecules/Projects/Projects';
import { NavBar } from './components/Molecules/NavBar/NavBar';
import { Hero } from './components/Molecules/Hero/Hero';
import { Contact } from './components/Molecules/Contact/Contact';
import { ContactHeader } from './components/Molecules/ContactHeader/ContactHeader';
import { Technology } from './components/Molecules/Technology/Technology';
import ReactLenis from '@studio-freight/react-lenis';
import { MouseCursor } from './components/Molecules/MouseCursor/MouseCursor';
import { LoadingScreen } from './components/Atoms/LoadingScreen/LoadingScreen';

export const App = () => {
  return (
    <ReactLenis root options={{ duration: 1.7 }}>
      <LoadingScreen />
      <NavBar />
      <MouseCursor />
      <Hero />
      <AboutBoxes />
      <Proficiencies />
      <LinesOfCode />
      <Technology />
      <Experience />
      <Projects />
      <ContactHeader />
      <Contact />
    </ReactLenis>
  );
};

export default App;
