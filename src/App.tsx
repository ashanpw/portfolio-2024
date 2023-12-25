import { motion } from "framer-motion";
import { AboutBoxes } from "./components/AboutBoxes/AboutBoxes";
import { Experience } from "./components/Experience/Experience";
import { LinesOfCode } from "./components/LinesOfCode/LinesOfCode";
import { Proficiencies } from "./components/Proficiencies/Proficiencies";
import { Projects } from "./components/Projects/Projects";
import { Technology } from "./components/Technology/Technology";
import { Workspace } from "./components/Workspace/Workspace";
import { ScrollableContainer } from "./components/ScrollableContainer/ScrollableContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import { useState, useEffect } from "react";

export const App = () => {
    // const [mousePos, setMousePos] = useState({
    //     x: 0,
    //     y: 0,
    // });

    // useEffect(() => {
    //     const handleMouseMove = (event: { clientX: any; clientY: any }) => {
    //         setMousePos({ x: event.clientX, y: event.clientY });
    //     };

    //     window.addEventListener("mousemove", handleMouseMove);

    //     return () => {
    //         window.removeEventListener("mousemove", handleMouseMove);
    //     };
    // }, []);

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
