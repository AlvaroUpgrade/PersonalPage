import { useState } from "react";
import "./App.scss";

import NavMenu from "./components/NavMenu";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Experience from "./components/Experience";
import HabilitiesAndLanguages from "./components/HabilitiesAndLanguages";

import { CV } from "./CV/CV";
import { Context } from "./shared/Contexts/Context";

const {
  personalData,
  education,
  experience,
  languages,
  habilities,
  technologies,
} = CV;

function App() {
  const [article, setArticle] = useState("About");

  return (
    <Context.Provider
      value={{
        article,
        setArticle,
        personalData,
        education,
        experience,
        languages,
        habilities,
        technologies,
      }}
    >
      <div className="App">
        <header>
          <nav>
            <NavMenu personalData={personalData} />
          </nav>
        </header>
        <main>
          <About></About>
          <Technologies></Technologies>
          <Education></Education>
          <Experience></Experience>
          <HabilitiesAndLanguages></HabilitiesAndLanguages>
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;
