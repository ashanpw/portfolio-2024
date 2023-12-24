import { AboutBoxes } from "./components/AboutBoxes/AboutBoxes";
import { Experience } from "./components/Experience/Experience";
import { Proficiencies } from "./components/Proficiencies/Proficiencies";
import { Projects } from "./components/Projects/Projects";
import { Technology } from "./components/Technology/Technology";
import { Workspace } from "./components/Workspace/Workspace";

function App() {
    return (
        <div>
            <AboutBoxes />
            <Proficiencies />
            <Workspace />
            <Experience />
            <Technology />
            <Projects />
        </div>
    );
}

export default App;
