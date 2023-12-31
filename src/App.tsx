import { motion } from "framer-motion";
import { AboutBoxes } from "./components/AboutBoxes/AboutBoxes";
import { Experience } from "./components/Experience/Experience";
import { LinesOfCode } from "./components/LinesOfCode/LinesOfCode";
import { Proficiencies } from "./components/Proficiencies/Proficiencies";
import { Projects } from "./components/Projects/Projects";
import { Technology } from "./components/Technology/Technology";
import { Workspace } from "./components/Workspace/Workspace";
import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";

export const App = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <AboutBoxes />
            <Workspace />
            <Proficiencies />
            <LinesOfCode />
            <Technology />
            <Experience />
            <Projects />
        </div>
    );
};

export default App;
